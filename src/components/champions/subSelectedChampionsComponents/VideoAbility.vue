<template>
    <div v-if="caseAbility === 'passive'">
      <video autoplay style="max-height: 800px; height: 100vh;">
        <source :src="videoLinkPassive" type="video/mp4">
        <source :src="videoLinkPassive" type="video/ogg">
      </video>
    </div>

    <div v-else>
      <video autoplay style="max-height: 800px; height: 100vh;">
        <source :src="videoLinkAbility" type="video/mp4">
        <source :src="videoLinkAbility" type="video/ogg">
      </video>
    </div>
</template>

<script>
export default {
  props: ['name', 'caseAbility', 'champKey'],
  data(){
    return {
      // PROBLEM FOR AT LEAST ONE SPELL WHICH HAS A mp4 url link and not 'webm'
      videoLinkAbility: 'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0'+this.champKey+'/ability_0'+this.champKey+'_'+this.caseAbility+'1.webm',
      videoLinkPassive: 'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0'+this.champKey+'/ability_0'+this.champKey+'_P1.webm'
    }
  },
}

</script>