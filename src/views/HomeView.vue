<template>
  <h1>Home</h1>
<!--  <video>-->
<!--    <source src="https://assets.contentstack.io/v3/assets/blt731acb42bb3d1659/blt433631be4325013a/61d63e9f130d606170804b53/Zeri_R.mp4">-->
<!--  </video>-->
  <video width="320" height="240" controls>
    <source :src="url" type="video/mp4">
    <source :src="url" type="video/ogg">
    Your browser does not support the video tag.
  </video>
  <video width="320" height="240" controls>
    <source :src="url2" type="video/mp4">
    <source :src="url2" type="video/ogg">
    Your browser does not support the video tag.
  </video>
  <video width="320" height="240" controls>
    <source :src="url5" type="video/mp4">
    <source :src="url5" type="video/ogg">
    Your browser does not support the video tag.
  </video>
  <video width="320" height="240" controls>
    <source :src="url6" type="video/mp4">
    <source :src="url6" type="video/ogg">
    Your browser does not support the video tag.
  </video>
</template>

<script>
export default {
  // src="https://assets.contentstack.io/v3/assets/blt731acb42bb3d1659/bltac2b05e4db48f16d/61d63e20c548b77c207ddafa/Zeri_W.mp4"

  //Passive: src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_P1.webm"
  // Q:      src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_Q1.webm"
  // W:      src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_W1.webm"
  // E:      src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_E1.webm"
  // R:      src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_R1.webm"

  data(){
    return {
      // BARD
      url: ' https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_P1.webm',
      url2: 'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_Q1.webm',
      url3: 'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_W1.webm',
      url4: 'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_R1.webm',
      // AATROX:
      url5: 'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_P1.webm',
      url6: 'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_Q1.webm',
    }
  }
}
</script>



<style scoped>

</style>