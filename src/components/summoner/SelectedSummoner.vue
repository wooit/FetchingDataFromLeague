<template>
  <div>
    <button @click="redirectBack" class="redirect-btn">go back</button>

    <section class="section-summoner-profile">
      <summoner-profile :profileIconId="getSummonerInfo.profileIconId"></summoner-profile>
    </section>

    <section class="section-radio-input">
        <label><input type="radio" v-model="active" value="ChampionsMastery" /> Champions Mastery</label>
        <label><input type="radio" v-model="active" value="ChestsObtained" /> Chest Obtained</label>
        <label><input type="radio" v-model="active" value="MatchHistory"/> Match History</label>
    </section>

    <section class="section-display-chosen-component">
        <keep-alive>
          <component :is="active"></component>
        </keep-alive>
    </section>
  </div>

</template>

<script>
import SummonerProfile from "@/components/summoner/subSummonerComponents/SummonerProfile";
import MatchHistory from "@/components/summoner/subSummonerComponents/MatchHistory";
import ChestsObtained from "@/components/summoner/subSummonerComponents/ChestsObtained";
import ChampionsMastery from "@/components/summoner/subSummonerComponents/ChampionsMastery"

export default {
  components: {
    SummonerProfile, MatchHistory, ChestsObtained, ChampionsMastery
  },
  data(){
    return {
      active: null
    }
  },
  methods: {
    redirectBack(){
      this.$router.push('/summoner')
    }
  },
  computed: {
    getSummonerInfo(){
      return this.$store.getters['summoner/getSummonerInfos']
    }
  }
}
</script>

<style scoped>
  .redirect-btn {
      text-align: end;
  }

  .section-summoner-profile {
    background-color: #121112;
    display: flex;
    width: 33vw;
    padding: 2rem;
    margin: auto;
    border-radius: 30px;
  }

  .section-radio-input {
    margin: 2rem auto 2rem auto;
    background-color: #121112;
    display: flex;
    border-radius: 30px;
    flex-direction: row;
    padding: 2rem;
    width: 50%;
    justify-content: space-between;
  }

  input[type='radio'] {
    accent-color: cyan;
  }

  .section-display-chosen-component {

  }

</style>