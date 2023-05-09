<template>
  <div class="section-container">
    <section class="video-section">
      <video-ability :name="name"
                     :champKey="champKey"
                     :case-ability="caseAbility"
                     :key="rerenderCount">
      </video-ability>
    </section>

    <section class="spells-section">
      <div class="spells">
        <button class=spell-btn @click="showSpellDescAndVideo('passive')">
          <img class="spell-img" :src="`${linkPassiveImg}${passive.image}`" alt="passive" :title="`${passive.name}`">
        </button>
        <button class=spell-btn  v-for="spell in spells" :key="spell.id" @click="showSpellDescAndVideo(spell.id)">
          <img class="spell-img" :src="`${linkSpellImg}${spell.image}`" :alt="spell.name" :title="`${spell.name}`">
        </button>
      </div>

      <div class="description-spell">
        <div v-if="isAbilityChecked">
          <h3>{{ activeAbility.name }}</h3>
          <p>{{ activeAbility.description }}</p>
        </div>
        <div v-else>
          <h3>{{ passive.name }}</h3>
          <p>{{ passive.description}}</p>
        </div>
      </div>
    </section>


  </div>
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
      linkSpellImg: process.env.VUE_APP_SPELL_IMG_PATCH,
      linkPassiveImg: process.env.VUE_APP_SPELL_PASSIVE_PATCH,
      activeAbility: '',
      isAbilityChecked: false,
      caseAbility: 'passive',
      rerenderCount: 0
    }
  },
  methods: {
    showSpellDescAndVideo(spell){
      this.rerenderCount ++
      if(spell !== 'passive'){
        this.isAbilityChecked = true
        let found = this.spells.find( el => el.id === spell)
        this.activeAbility = found
        this.caseAbility = found.caseAbility
      } else {
        this.isAbilityChecked = false
        this.caseAbility = 'passive'
      }
    }
  },
}
</script>

<style scoped>
  .section-container {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
  }

  .video-section {
    align-self: center;
    z-index: -100;
  }

  .spells-section {
    width: 50rem;
    margin-top: 2rem;
    z-index: 10;
    display: flex;
    align-self: center;
    justify-content: space-evenly;
    flex-direction: column;
    /*gap: 1rem;*/
  }

  .spells {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 2rem;
  }

  .spell-btn {
    align-content: space-between;
    background-color: black;
    border:1px solid black;
  }

  .spell-btn:hover {
    border:1px solid cyan;
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
  }

  .spell-btn:focus {
    border:1px solid cyan;
  }

  .spell-img {
    border-color: black;
  }

  .description-spell {
    border-color: gray;
    z-index: 100;
    margin-bottom: 5rem;
    background-color: #121112;
    border-radius: 5px;
    padding: 1rem;
  }

  .description-spell h3 {
    text-align: center;
    margin-bottom: 0.5rem;
  }

</style>