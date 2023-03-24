<template>
  <button @click="redirectBack">go back</button>
  <section>
    <summoner-profile :profileIconId="getSummonerInfo.profileIconId"></summoner-profile>
  </section>

  <section>
    <div>
      <label><input type="radio" v-model="active" value="ChampionsMastery" /> Champions Mastery</label>
      <label><input type="radio" v-model="active" value="ChestsObtained" /> Chest Obtained</label>
      <label><input type="radio" v-model="active" value="MatchHistory"/> Match History</label>
    </div>
  </section>

  <section>
      <div>
        <keep-alive>
          <component :is="active"></component>
        </keep-alive>
      </div>
  </section>

</template>

<script>
import SummonerProfile from "@/components/summoner/subSummonerComponents/SummonerProfile";
import MatchHistory from "@/components/summoner/subSummonerComponents/MatchHistory";
import ChestsObtained from "@/components/summoner/subSummonerComponents/ChestsObtained";
import ChampionsMastery from "@/components/summoner/subSummonerComponents/ChampionsMastery"
// todo I WILL NEED A FIND SUMMONER SEARCH FIELD IN TOP RIGHT CORNER => THIS WILL UPDATE STATE SUMMONER INFO (WONT BE POSSIBLE TO CHANGE REGION)

// get last 10 games:  need region / puuid
// https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/%27--oOzBpkdtwNvv8_bKLQm6mic-MNzFgyrWLx7HhYCuxgPh6jm9_YPMXK1ktRn_wlBMdKzzsSgxpfqw%27/ids?start=0&count=20&api_key=RGAPI-9fd3c989-4a67-4b31-8c54-1c05bd261446
// get data for 1 game : need region / matchId
// https://europe.api.riotgames.com/lol/match/v5/matches/EUW1_6311416364?api_key=RGAPI-9fd3c989-4a67-4b31-8c54-1c05bd261446
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