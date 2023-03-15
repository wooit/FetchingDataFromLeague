<template>
  <button @click="redirectChampionList">Champions List</button>
  <h1>{{ champName }}</h1>

  <section>
    <display-infos :name="champName"
                   :champKey="champKey"
                   :title="title"
                   :lore="lore"
                   :roles="roles"
                   :difficulty="difficulty">
    </display-infos>
  </section>

  <section>
    <display-skills :name="champName"
                    :champKey="champKey"
                    :passive="passive"
                    :spells="spells">

    </display-skills>
  </section>

  <section>
    <display-skins :skins="skins"
                   :name="champName"
                   :champKey="champKey">
    </display-skins>
  </section>



</template>

<script>
// in this component i want a card component with Image / Name / title / tags / difficulty / lore => i have all data
// i want a skills component with icone for spells and video for spells => i dont have but can get them => http://ddragon.leagueoflegends.com/cdn/13.5.1/data/en_US/champion/Aatrox.json
// i want a component with all skins

//images:
//loading screen : http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg
//image full : http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg

import displayInfos from '@/components/champions/subSelectedChampionsComponents/DisplayInfos';
import displaySkills from '@/components/champions/subSelectedChampionsComponents/DisplaySkills';
import displaySkins from '@/components/champions/subSelectedChampionsComponents/DisplaySkins';
import axios from "axios";

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
      urlChampionData: process.env.VUE_APP_CHAMPION_DATA_PATCH_13_5_1,
      title: '',
      lore: '',
      roles: [],
      difficulty: 0,
      spells: [],
      passive: {},
      skins: [],
    }
  },
  methods: {
    initComponentData(){
      axios.get(this.urlChampionData+this.champName+'.json').then(response =>{
        this.formatData(response.data.data[this.champName])
      }).catch(error =>{
        console.log(error)
      })
    },
    formatData(jsonContent){
      //data for DisplayInfos component
      this.title = jsonContent.title
      this.lore = jsonContent.lore
      this.roles = jsonContent.tags
      this.difficulty = jsonContent.info.difficulty

      //data for DisplaySkills component
      let formattedSpells = []
      jsonContent.spells.forEach((spell, index) => {
        let arrCaseSpells = ['Q', 'W', 'E', 'R']
        formattedSpells.push(
            {
              id: spell.id,
              name: spell.name,
              description: spell.description,
              image: spell.image.full,
              caseAbility: arrCaseSpells[index]
            }
        )
      })
      this.spells = formattedSpells
      this.passive = {
        name: jsonContent.passive.name,
        description: jsonContent.passive.description,
        image: jsonContent.passive.image.full,
      }

      //data for DisplaySkins component
      this.skins = jsonContent.skins
    },
    redirectChampionList(){
      this.$router.push('/champions')
    }
  },
  beforeMount() {
    this.initComponentData()
  }
}

</script>

