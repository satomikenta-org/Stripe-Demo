<template>
  <div :class=" clickable ? 'clickable': '' "  @click="handleOnClick">
    <div :class=" size === 'large' ? 'large-title': 'default-title' ">
      PayPay
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: String,
    clickable: Boolean
  },
  methods: {
    handleOnClick() {
      if (this.clickable) {
        this.$router.push('/');
      } 
    }
  }
}
</script>

<style lang="scss" scoped>

.clickable {
  cursor: pointer;
}

.default-title {
  margin-left: 3px;
  font-weight: 400;
  color: $primary;
}
.large-title {
  margin-left: 3px;
  font-weight: 500;
  font-size: 2rem;
  color: $primary;
}
</style>