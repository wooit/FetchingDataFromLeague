<template>
  <div style="display: flex">
    <section>
      <h1>Skills</h1>
      <div style="display: flex">
        <button @click="showSpellDescAndVideo('passive')">
          <img :src="`${linkPassiveImg}${passive.image}`" alt="passive">
        </button>
        <button  v-for="spell in spells" :key="spell.id" @click="showSpellDescAndVideo(spell.id)">
          <img :src="`${linkSpellImg}${spell.image}`" :alt="spell.name">
        </button>
      </div>

      <div>
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

    <section>
      <video-ability :name="name"
                     :champKey="champKey"
                     :case-ability="caseAbility"
                     :key="rerenderCount">

      </video-ability>
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
      linkSpellImg: process.env.VUE_APP_SPELL_IMG_PATCH_13_5_1,
      linkPassiveImg: process.env.VUE_APP_SPELL_PASSIVE_PATCH_13_5_1,
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