<template>
  <div>
    <button class="previous-page-btn" @click="redirectChampionList">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16l1.4-1.4l-1.6-1.6H16v-2h-4.2l1.6-1.6L12 8l-4 4l4 4Zm0 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg>
      Champions List</button>

    <h1 class="title">{{ champName }} : {{ title }}</h1>

    <section class="section-infos">
      <display-infos :name="champName"
                     :champKey="champKey"
                     :title="title"
                     :lore="lore" v-if="lore"
                     :roles="roles"
                     :difficulty="difficulty">
      </display-infos>
    </section>

    <h1 class="title">SPELL ABILITIES </h1>
    <section class="section-skills">

      <display-skills :name="champName"
                      :champKey="champKey"
                      :passive="passive"
                      :spells="spells">

      </display-skills>
    </section>

    <h1 class="title">SKINS AVAILABLE</h1>
    <section class="section-skins">


      <display-skins :skins="skins"
                     :name="champName"
                     :champKey="champKey">
      </display-skins>
    </section>
    </div>
</template>

<script>

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
      componentKey: 0,
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
    },
  },
  beforeMount() {
    this.initComponentData()
  }
}

</script>

<style scoped>
  .previous-page-btn {
    display: flex;
  }

  .previous-page-btn svg {
    margin-right: 0.5rem;
  }

  .title {
    text-align: center;
    color: darkgoldenrod;
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .section-infos {
    height: 76vh;
    width: 100vw;
    align-items: center;
    margin-top: 2rem;
  }

  .section-skills {
    /*height: 100vh;*/
    /*width: 100vw;*/
    margin-bottom: 1rem;
  }

  .section-skins {
    /*height: 70vh;*/
    /*width: 70vw;*/
  }

</style>

