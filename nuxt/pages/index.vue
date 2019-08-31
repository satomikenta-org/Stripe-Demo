<template>
  <div class="container">
    <div class="row-container">
      <img :src="img" alt="hero" class="hero">
      <div class="column-container">
        <h4 class="title"><strong>世界規模</strong>のプラットホーム</h4>
        <h4 class="title">３分で<strong>あなたのお店</strong>を世界へ</h4>
        <h4 class="title"><strong>手数料なし</strong>で<strong>ダイレクト送金</strong></h4>
      </div>
    </div>
    <b-button block variant="outline-primary" class="btn register-btn">オーナーの新規登録はこちら</b-button>
    <b-button block variant="outline-primary" outline class="btn">ログイン</b-button>
  </div>
</template>

<script>
import lpImg from '@/assets/image/lp-img.jpeg';
export default {
  data() {
    return {
      img: lpImg,
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
}
.row-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.column-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hero {
  width: 80vw;
  max-width: 600px;
  height: 500px;
}
.title {
  color: $title-color;
  margin-top: 10px;
  padding: 10px;
  text-decoration: underline;
  text-decoration-color: $primary;
}


.btn {
  max-width: 400px;
  margin-top: 40px;
}
.btn-outline-primary {
  color: $title-color;
  border-color: $primary;
}
.register-btn {
  background-color: $primary;
  color: white;
  font-size: 1.1rem;
}

.btn-outline-primary:hover {
  color: white;
  background-color: $primary;
}
</style>
