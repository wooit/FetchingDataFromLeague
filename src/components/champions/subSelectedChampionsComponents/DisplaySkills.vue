<template>
  <h1> Skills </h1>


  <ul v-for="spell in spells" :key="spell.id">
    <p>{{ spell.caseAbility }}</p>
    <img :src="`${linkSpellImg}${spell.image}`" :alt="spell.name">
    <p>{{ spell.name }} : {{ spell.description }}</p>
    <video-ability :name="name" :caseAbility="spell.caseAbility"></video-ability>
  </ul>

    <img :src="`${linkPassiveImg}${passive.image}`" alt="passive">
  <p>{{ passive.name }} : {{ passive.description }}</p>
  <video-ability :name="name"></video-ability>


</template>

<script>
import videoAbility from '@/components/champions/subSelectedChampionsComponents/VideoAbility'
export default {
  components: {
    videoAbility
  },
  props: ['spells', 'passive', 'name', 'champKey'],
  data(){
    return {
      linkSpellImg: process.env.VUE_APP_SPELL_IMG_PATCH_13_5_1,
      linkPassiveImg: process.env.VUE_APP_SPELL_PASSIVE_PATCH_13_5_1


    }
  },
  methods: {

  }
}
</script>