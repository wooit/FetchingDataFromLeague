<template>
  <body>
  <nav-bar></nav-bar>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
  </body>

</template>

<script>
import NavBar from '@/components/Layout/NavBar'
export default {
  components: {
    NavBar
  }
}

</script>

<style scoped>
body{
  font-family: 'Alkatra', cursive;
}

.route-enter-from{
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to{
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active{
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from{
  opacity: 1;
  transform: translateY(0);
}

</style>