<template>
  <div style="background-color: red">
    <div  v-for="data in gameData" :key="data">
      <div :class="[win === 'Defeat' ? 'cardLose' : 'cardWin']"
           v-for="searchedPlayer in focusedPlayerData"
           :key="searchedPlayer.name"
      >

        <div class="game-info">
          <div class="game-mode">
            <h4>{{ data.gameMode }}</h4>
          </div>
          <div class="win-lose-duration">
            <p v-if="searchedPlayer.win === 'Victory'" style="color: cornflowerblue">{{ searchedPlayer.win}}</p>
            <p v-else style="color: red">{{ searchedPlayer.win}}</p>
            <p>{{ data.gameDuration}} min</p>
          </div>
        </div>

        <div class="summoner-info">
          <div class="summoner-data">
            <div class="champ-icon-level">
              <img :src="`${champUrlIcon}`+ `${searchedPlayer.champion}`+'.png'" :alt="searchedPlayer.champion">
              <p>{{ searchedPlayer.level }}</p>
            </div>

            <div class="summoner-spells">
              <img :src="`${summonerSpellIcon}`+ `${getSummonerSpells(searchedPlayer.summonerSpell1)}`" alt="summoner-spell1">
              <img :src="`${summonerSpellIcon}`+ `${getSummonerSpells(searchedPlayer.summonerSpell2)}`" alt="summoner-spell2">
            </div>

            <div class="summoner-stats">
              <p> {{ searchedPlayer.kills }} / {{ searchedPlayer.death }} / {{searchedPlayer.assists }}</p>
              <div> {{ searchedPlayer.kda }} KDA </div>
              <div class="spree">{{ searchedPlayer.spree }}</div>
            </div>
          </div>

          <div class="summoner-items">
            <div v-for="item in searchedPlayer.items" :key="item" >
              <img v-if="item !== 0" class="items-img" :src="`${itemIcon}`+ `${item}`+'.png'" alt="item">
            </div>
          </div>
        </div>

        <div class="players-info">
          <div class="team1">
            <div  v-for="player in data.players" :key="player">
              <div class="player" v-if="player.playerTeamId === 100">
                <img :src="`${champUrlIcon}`+ `${player.playerChampion}`+'.png'" :alt="player.playerChampion">
                <p>{{ player.playerName }}</p>
              </div>
            </div>
          </div>

          <div class="team2">
            <div  v-for="player in data.players" :key="player">
              <div class="player" v-if="player.playerTeamId === 200">
                <img :src="`${champUrlIcon}`+ `${player.playerChampion}`+'.png'" :alt="player.playerChampion">
                <p>{{ player.playerName }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="more-info">
          <button @click="openDetailedPoppin">MORE</button>
        </div>
      </div>
    </div>

    <v-dialog v-model="detailMatchActive" width="auto">
      <v-card >
        <detailed-match class="detailed-match-poppin" :gameData="gameData"></detailed-match>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";
import detailedMatch from "@/components/summoner/subSummonerComponents/matchHistory/DetailedMatch";

export default {
  props: ['matchId', 'regionAlias'],
  components: {
    detailedMatch
  },
  data(){
    return {
      gameData: [],
      focusedPlayerData: [],
      champUrlIcon: 'https://ddragon.leagueoflegends.com/cdn/13.6.1/img/champion/',
      itemIcon: 'https://ddragon.leagueoflegends.com/cdn/13.6.1/img/item/',
      summonerSpellIcon: 'https://ddragon.leagueoflegends.com/cdn/13.6.1/img/spell/',
      win: '',
      detailMatchActive: false
    }
  },
  methods: {
    openDetailedPoppin(){
      this.detailMatchActive = true
    },
    getSummonerSpells(key){
      const spells =  this.$store.getters['summoner/getSummonerSpellInfos']
      const found = spells.find(icon => icon.key === key)
      return found.full
    },
    fetchMatchData(){
      axios.get('https://'+this.regionAlias+'.api.riotgames.com/lol/match/v5/matches/'+this.matchId+'?api_key='+this.apiKey).then(response =>{
        const playerData= []
        response.data.info.participants.forEach(player => {
          // console.log(player)
          playerData.push({
            playerName: player.summonerName,
            playerChampion: player.championName,
            playerLevel: player.champLevel,
            playerDeath: player.deaths,
            playerKills: player.kills,
            playerAssists: player.assists,
            playerItems: [player.item0, player.item1, player.item2, player.item3, player.item4, player.item5, player.item6],
            playerDamageDealt: player.totalDamageDealtToChampions,
            playerDamageTaken: player.totalDamageTaken,
            playerHeal: player.totalHeal,
            playerIcon: player.profileIcon,
            playerWin: player.win === true ? 'Victory' : 'Defeat',
            playerDoubleKill: player.doubleKill,
            playerQuadraKills: player.quadraKills,
            playerTripleKills: player.tripleKills,
            playerPentaKills: player.pentakills,
            playerGoldEarned: player.goldEarned,
            playerLargestKillingSpree: player.largestKillingSpree,
            playerLargestMultiKill: player.largestMultiKill,
            // for summoner spell , i need to know which one i should use for summoner icon image
            playerSummonerSpell1: player.summoner1Id.toString(),
            playerSummonerSpell2: player.summoner2Id.toString(),
            playerTeamId: player.teamId, // 100 or 200
            playerKda: ((player.kills + player.assists) / player.deaths).toFixed(2)
          })
          if(player.summonerName === this.searchedSummonerName){
            this.focusedPlayerData.push({
              name: player.summonerName,
              champion: player.championName,
              level: player.champLevel,
              death: player.deaths,
              kills: player.kills,
              assists: player.assists,
              items: [player.item0, player.item1, player.item2, player.item3, player.item4, player.item5, player.item6],
              damageDealt: player.totalDamageDealtToChampions,
              damageTaken: player.totalDamageTaken,
              heal: player.totalHeal,
              icon: player.profileIcon,
              win: player.win === true ? 'Victory' : 'Defeat',
              doubleKill: player.doubleKill,
              quadraKills: player.quadraKills,
              tripleKills: player.tripleKills,
              pentaKills: player.pentakills,
              goldEarned: player.goldEarned,
              largestKillingSpree: player.largestKillingSpree,
              largestMultiKill: player.largestMultiKill,
              // for summoner spell , I need to know which one i should use for summoner icon image
              summonerSpell1: player.summoner1Id.toString(),
              summonerSpell2: player.summoner2Id.toString(),
              teamId: player.teamId, // 100 or 200
              kda: ((player.kills + player.assists) / player.deaths).toFixed(2),
              spree: this.findBestKillingSpree(player.pentaKills, player.quadraKills, player.tripleKills, player.doubleKill)
            })
          }
        })

        this.gameData.push({
          gameMode: response.data.info.gameMode,
          gameDuration: Math.round(response.data.info.gameDuration / 60),
          players: playerData,
        })
        this.win = this.focusedPlayerData[0].win
      }).catch(error => {
        console.log(error)
      })
    },
    findBestKillingSpree(penta, quadra, triple, double){
      if(penta !== 0){
        return 'Penta Kill'
      } else if(quadra !== 0){
        return 'Quadra Kill'
      } else if(triple !== 0){
        return 'Triple Kill'
      } else if(double !== 0){
        return 'Double Kill'
      } else {
        return 'No Kill Spree :('
      }
    },
  },
  computed: {
    apiKey(){
      return this.$store.getters['getApiKey']
    },
    searchedSummonerName(){
      const summonerInfos = this.$store.getters['summoner/getSummonerInfos']
      return summonerInfos.name
    },
  },
  mounted() {
    this.fetchMatchData()
  }
}

</script>

<style scoped>
.cardWin {
  background-color: #121112;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  border: cornflowerblue solid;
}
.cardLose {
  background-color: #121112;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  border: lightcoral solid;
}

/* GAME INFOS CSS */

.game-info {
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.game-mode {
  align-items: center;
  height: 50%;
  justify-content: center;
  align-content: center;
  display: flex;
}

.win-lose-duration {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

/* SUMMONER INFOS CSS */

.summoner-info {
  width: 40%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: auto;
}

.summoner-data {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 50%;
}

.champ-icon-level {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  border-radius: 50%;
}

.champ-icon-level img{
  border-radius: 50px;
}

.champ-icon-level p{
  border-radius: 50%;
  background-color: #121112;
  padding: 0.5rem;
  color: white;
  margin-top: -1.5rem;
  border: white solid;
}

.summoner-spells {
  display: flex;
  flex-direction: column;
}

.summoner-spells img {
  border-radius: 30px;
}

.summoner-stats {
  padding: 0.5rem;
}

.spree {
  background-color: chocolate;
  border-radius: 30px;
  padding: 0.5rem;
}

.summoner-items {
  display: flex;
  flex-direction: row;
  /*height: 50%;*/
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
}

.items-img {
  border: white solid;
  max-width:100%;
  max-height: 100%;
}

/* PLAYER INFOS CSS */

.players-info {
  display: flex;
  flex-direction: row;
  width: 30%;
  /*max-width: 100%;*/
  /*max-height: 100%;*/
  align-items: center;
}

.team1 {
  width: 50%;
}

.team2 {
  width: 50%;
}

.player {
  display: flex;
  align-items: center;
  overflow: hidden;
}

.player img {
  width:10%;
  height: 10%;
}

.player p {
  overflow: hidden;
}

/* MORE INFOS CSS */

.more-info {
  width: 10%;
  display: flex;
  align-items: center;
}

.more-info button {
  border: chocolate solid 0.1rem;
  padding: 0.5rem;
}

.more-info button:hover {
  border: cyan solid;
}

.detailed-match-poppin {
  height: 70vh;
  width: 70vw;
  background-color: #121112;
  border: cyan solid;
}
</style>