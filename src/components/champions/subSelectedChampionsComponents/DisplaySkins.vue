<template>
  <div>
    <h1>Skins</h1>

    <div style="display: flex">
      <div>
        <h1>Skins available</h1>
        <div v-for="skin in skins" :key="skin.id">
          <button style="display: flex ; width: 400px" @click="displaySelectedSkin(skin.num)">
            <img :src="`${skinSplashArt}${name +'_'+skin.num+'.jpg'}`" :alt="skin.name" style="height: 100px; width: 100px">
            <p>{{ skin.name }}</p>
          </button>

        </div>
      </div>

      <div>
        <img :src="`${skinSplashArt}${name +'_'+selectedSkin+'.jpg'}`" :alt="selectedSkin">
      </div>
    </div>
  </div>
</template>

<script>
// todo REMOVE INLINE CSS LATER
export default {
  props: ['name', 'champKey', 'skins'],
  data(){
    return {
      skinSplashArt: process.env.VUE_APP_GET_CHAMPION_SPLASH_IMAGE,
      selectedSkin: 0
    }
  },
  methods: {
    displaySelectedSkin(skinNum){
      this.selectedSkin = skinNum
    }
  }
}

</script>