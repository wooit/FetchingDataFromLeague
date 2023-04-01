<template>
  <div>
    <h1>Rotation</h1>
    <display-rotation></display-rotation>
  </div>
</template>

<script>
import displayRotation from '@/components/rotations/DisplayRotation';
// getting data here https://developer.riotgames.com/apis#champion-v3/GET_getChampionInfo
export default {
  components: {
    displayRotation
  }
}

</script>



<style scoped>

</style>