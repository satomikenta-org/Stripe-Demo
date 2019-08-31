<template>
  <div class="header-container">
    <Logo size="large" :clickable="true"/>
    <ContactBtn />
  </div>
  
</template>

<script>
import ContactBtn from '@/components/atoms/ContactBtn';
import Logo from '@/components/atoms/Logo';
export default {
  components: {
    Logo,
    ContactBtn,
  }
}
</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
}

</style>