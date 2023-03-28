<template>
  <div>
    <div v-for="data in gameData" :key="data">

      <div v-for="searchedPlayer in focusedPlayerData" :key="searchedPlayer.name">
        <div>
          <h4>{{ data.gameMode }}</h4>
          <p>{{ searchedPlayer.win}}</p>
          <p>{{ data.gameDuration}} min</p>
        </div>

        <div>
          <img :src="`${champUrlIcon}`+ `${searchedPlayer.champion}`+'.png'" :alt="searchedPlayer.champion">
          <span>{{ searchedPlayer.level }}</span>
          <div> {{ searchedPlayer.kills }} / {{ searchedPlayer.death }} / {{searchedPlayer.assists }}</div>
          <div> KDA: {{ searchedPlayer.kda }} </div>
          <div>{{ searchedPlayer.spree }}</div>

          <img :src="`${summonerSpellIcon}`+ `${getSummonerSpells(searchedPlayer.summonerSpell1)}`" alt="">
          <img :src="`${summonerSpellIcon}`+ `${getSummonerSpells(searchedPlayer.summonerSpell2)}`" alt="">

          <div style="display: flex">
            <div v-for="item in searchedPlayer.items" :key="item" >
              <img :src="`${itemIcon}`+ `${item}`+'.png'" alt="item">
            </div>
          </div>
        </div>


        <div v-for="player in data.players" :key="player" style="display: flex">

            <div>
              <ul v-if="player.playerTeamId === 100">
                <li style="display: flex">
                  <img :src="`${champUrlIcon}`+ `${player.playerChampion}`+'.png'" :alt="player.playerChampion">
                  <div>{{ player.playerName }}</div>
                </li>
              </ul>
            </div>

            <div>
              <ul v-if="player.playerTeamId === 200">
                <li style="display: flex">
                  <img :src="`${champUrlIcon}`+ `${player.playerChampion}`+'.png'" :alt="player.playerChampion">
                  <div>{{ player.playerName }}</div>
                </li>
              </ul>
            </div>
        </div>

        <button @click="openDetailedPoppin">MORE</button>

      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ['matchId', 'regionAlias'],
  data(){
    return {
      gameData: [],
      focusedPlayerData: [],
      champUrlIcon: 'https://ddragon.leagueoflegends.com/cdn/13.6.1/img/champion/',
      itemIcon: 'https://ddragon.leagueoflegends.com/cdn/13.6.1/img/item/',
      summonerSpellIcon: 'https://ddragon.leagueoflegends.com/cdn/13.6.1/img/spell/',
    }
  },
  methods: {
    openDetailedPoppin(){
      console.log('TODO later')
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
          players: playerData
        })

      }).catch(error => {
        console.log(error)
      })
    },
    findBestKillingSpree(penta, quadra, triple, double){
      if(penta !==0){
        return 'Penta Kill'
      } else if(quadra !==0){
        return 'Quadra Kill'
      } else if(triple !==0){
        return 'Triple Kill'
      } else if(double !==0){
        return 'Double Kill'
      } else {
        return ''
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

</style>