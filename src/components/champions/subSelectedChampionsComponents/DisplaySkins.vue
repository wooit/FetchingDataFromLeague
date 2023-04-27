<template>
  <div class="carousel-container">
    <v-carousel height="auto" cycle interval="4000">
      <v-carousel-item v-for="skin in skins" :key="skin.id"
                       :src="`${skinSplashArt}${name +'_'+skin.num+'.jpg'}`" :alt="skin.name" cover>
        <div class="name-container">
          <p class="name-skin">
            {{ skin.name }}
          </p>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  props: ['name', 'champKey', 'skins'],
  data(){
    return {
      skinSplashArt: process.env.VUE_APP_GET_CHAMPION_SPLASH_IMAGE,
      selectedSkin: 0
    }
  },
}

</script>

<style scoped>
.carousel-container {
  margin: auto;
  width: 70vw;
  justify-content: center;
}

.name-container {
  background: rgb(37, 37, 37);
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  padding: 0.5rem;
  display: inline-block;
}
.name-skin {
  opacity: 1;
  font-weight: bold;
}

</style>