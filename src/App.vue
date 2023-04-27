<template>
  <body>
    <nav-bar></nav-bar>
    <main>
      <router-view v-slot="slotProps">
        <transition name="route" mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>
    </main>
    <the-footer></the-footer>
  </body>
</template>

<script>
import NavBar from '@/components/Layout/NavBar';
import TheFooter from '@/components/Layout/TheFooter';
export default {
  components: {
    NavBar,
    TheFooter
  }
}

</script>

<style >
  body{
    font-family: 'Alkatra', cursive;
    display: flex;
    flex-direction: column;
  }
  html {
    background-color: black;
    color: white;
  }
  main {
    min-height: 90vh;
    margin: 1rem;
  }

  the-footer {
    min-height: 5vh;
    height: 30%;
    margin-top: auto;
  }
  /* TRANSITIONS */

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