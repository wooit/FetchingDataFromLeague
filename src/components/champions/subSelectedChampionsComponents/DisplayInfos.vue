<template>
  <div>
    <h1> Infos </h1>
    <div>
      <img :src="linkImage" alt="background-image">
      <br><br>
      {{ name }}
      <br> <br>
      {{ title }}
      <br> <br>
      {{ lore }}
      <br> <br>
      {{ roles }}
      <br> <br>
      {{ difficulty }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'champKey', 'lore', 'title', 'roles', 'difficulty'],
  data(){
    return {
      linkImage: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/'+this.name+'_0.jpg',
    }
  }
}
</script>

<style scoped>

</style>