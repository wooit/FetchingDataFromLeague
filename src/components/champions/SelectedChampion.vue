<template>
  <button @click="redirectChampionList">Champions List</button>
  <h1>{{ champName }}</h1>
  <display-infos></display-infos>
  <display-skills></display-skills>
  <display-skins></display-skins>
</template>

<script>
// in this component i want a card component with Image / Name / title / tags / difficulty / lore => i have all data
// i want a skills component with icone for spells and video for spells => i dont have but can get them => http://ddragon.leagueoflegends.com/cdn/13.5.1/data/en_US/champion/Aatrox.json
// i want a component with all skins

import displayInfos from '@/components/champions/subSelectedChampionsComponents/DisplayInfos';
import displaySkills from '@/components/champions/subSelectedChampionsComponents/DisplaySkills';
import displaySkins from '@/components/champions/subSelectedChampionsComponents/DisplaySkins';
export default {
  components: {
    displayInfos,
    displaySkills,
    displaySkins
  },
  inheritAttrs: false,
  data(){
    return {
      champName: this.$route.params.name,
      champKey: this.$route.params.key,
    }
  },
  methods: {
    redirectChampionList(){
      this.$router.push('/champions')
    }
  },
  beforeMount() {
    //i need to fetch data related to champion before forwarding them in the adapted components
  }
}

</script>

