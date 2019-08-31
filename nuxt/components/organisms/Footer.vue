<template>
  <div class="container">
    <div class="copyright">Copyright 2019</div>
    <Logo/>
  </div>
</template>

<script>
import Logo from '@/components/atoms/Logo';

export default {
  components: {
    Logo,
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 5px;
  margin-top: 20px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.copyright {
  margin-right: 10px;
  color: $title-color;
}
</style>