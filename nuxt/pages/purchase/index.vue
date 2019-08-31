<template>
  <div class="container">
    <div class="description">購入商品：</div>
    <div class="product-title">任天堂Switch</div>
    <div class="product-price">¥28000</div>
    <div class="payment-box">
      <h6 class="label">決済用カード情報を入力</h6>
      <card class='stripe-card'
        :class='{ complete }'
        :stripe="stripe_key"
        @change='complete = $event.complete'
      />
      <button class='pay-with-stripe' :disabled="!complete" @click='pay' >購入する</button>
    </div>
  </div>
</template>

<script>
import { Card, createToken } from 'vue-stripe-elements-plus'
export default {
  data () {
      return {
        complete: false,
        stripe_key: "pk_test_6TYNoqkh8FnmsYw1yUx3zggw00tx1M155r"
      }
    },
  
  components: { Card },
  
  methods: {
    pay () {
      createToken().then(async (data) => {
        try {
          const customer = await this.makeCreateCustomerRequest(data.token.id); 
          const result = await this.buyProduct(customer.id);
          console.log("Payment Succeeded!!", result);
        } catch (err) {
          console.log("sendTokenToServer Error", err);
        }
      })
      .catch(console.log)
    },
    async buyProduct() {
      const customer = "cus_FitWfCSvDcZOMO"; // customer_id;
      const amount = 20000000;
      const currency = "JPY";
      const result = await this.$axios.$post('http://localhost:3000/api/stripe/', { customer, currency, amount });
      console.log("BuyProduct By Custmer Result", result);
    },
    async buyProductByToken() {
      const source = "tok_1FDQrIIfZWX020zfWlNMjNf9"; // one-time token
      const currency = "JPY";
      const amount = 1000;
      const result = await this.$axios.$post('http://localhost:3000/api/stripe', { source, amount, currency });
      console.log("post result", result);
    },
    async makeCreateCustomerRequest(token) {
      const result = await this.$axios.$post('http://localhost:3000/api/stripe/create-customer', { token });
      console.log("create customer result", result);
      return result;
    },
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  height: 85vh;
}
.description {
  color: grey;
  font-size: 0.7rem;
}
.product-title {
  margin-top: 5px;
  color: $title-color;
  font-weight: bold;
  font-size: 1.2rem;
}
.product-price {
  margin-top: 5px;
  color: $title-color;
  font-weight: bold;
  font-size: 1rem;
}

.payment-box {
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items:center;
  flex-direction: column;
}
.label {
  font-weight: 300;
  color: grey;
  font-size: 0.8rem;
}
.stripe-card {
  padding-left: 1px;
  width: 30vw;
  height: 30px;
  border: 1px solid grey;
  border-radius: 3px;
  border-color: $primary;
}
.stripe-card.complete {
  border-color: $primary;
  border-radius: 3px;
}

.pay-with-stripe {
  margin-top: 25px;
  height: 50px;
  width: 30vw;
  border-radius: 10px;
  background-color: $primary;
  color: white;
  font-size: 1.1rem;
  font-weight: 550;
}
.pay-with-stripe:disabled {
  margin-top: 25px;
  height: 50px;
  width: 30vw;
  border-radius: 10px;
  background-color: #e0e3e6;
  border-color: #e0e3e6;
  color: white;
  font-size: 1.1rem;
  font-weight: 550;
}
</style>