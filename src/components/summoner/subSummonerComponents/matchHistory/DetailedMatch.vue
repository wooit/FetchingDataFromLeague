<template>
  <div class="container">
    <div class="table-winning-team">
      <div class="headers">
        <div style="width: 30%; color: cornflowerblue">Victory</div>
        <div style="width: 20%">kda</div>
        <div style="width: 20%">damages</div>
        <div style="width: 30%">items</div>
      </div>

      <div class="rows">
        <div class="row-summoner">
          <template v-for="player in gameData[0].players" :key="player.champion">
            <template v-if="player.playerWin === 'Victory'">
              <div class="player-row">

                <div class="cell-summoner">
                  <div class="cell-summoner-champ">
                    <img :src="`${champUrlIcon}`+ `${player.playerChampion}`+'.png'" :alt="player.playerChampion">
                  </div>
                  <div class="cell-summoner-level">
                   {{ player.playerLevel }}
                  </div>
                  <div class="cell-summoner-spells">
                    <img :src="`${summonerSpellIcon}`+ `${getSummonerSpells(player.playerSummonerSpell1)}`" alt="summoner-spell1">
                    <img :src="`${summonerSpellIcon}`+ `${getSummonerSpells(player.playerSummonerSpell2)}`" alt="summoner-spell2">
                  </div>
                  <div class="cell-summoner-name">
                    {{ player.playerName }}
                  </div>
                </div>

                <div class="cell-kda">
                  <div>{{ player.playerKills }} / {{ player.playerDeath }} / {{ player.playerAssists }}</div>
                  <div v-if="player.playerKda >= 5" style="color: orange">{{ player.playerKda }} kda</div>
                  <div v-else-if="player.playerKda >= 4 && player.playerKda < 5" style="color: dodgerblue">{{ player.playerKda }} kda</div>
                  <div v-else-if="player.playerKda >= 3 && player.playerKda < 4" style="color: lightseagreen">{{ player.playerKda }} kda</div>
                  <div v-else style="color: gray">{{ player.playerKda }} kda</div>
                </div>

                <div class="cell-damages">
                  <div>Damage Dealt <span>{{ player.playerDamageDealt }}</span></div>
                  <div>Damage Taken <span>{{ player.playerDamageTaken }}</span></div>
                </div>

                <div class="cell-items">
                  <template v-for="item in player.playerItems" :key="item">
                    <img v-if="item !== 0" :src="`${itemIcon}`+ `${item}`+'.png'" alt="item">
                  </template>
                </div>
              </div>
            </template>
          </template>
        </div>
      </div>
    </div>

    <div class="container-progress-bars">
      <div class="container-bars">
        <div class="container-progress-bar-kills">
          <div class="progress-bar-winning-team" :style="{ width: `${percentageWinningTeamKills}%` }">{{ totalKillWinningTeam }} kills</div>
          <div class="progress-bar-losing-team" :style="{ width: `${percentageLosingTeamKills}%` }">{{ totalKillLosingTeam }} kills</div>
        </div>
        <div class="container-progress-bar-kills">
          <div class="progress-bar-winning-team" :style="{ width: `${percentageWinningTeamGold}%` }">{{ totalGoldWinningTeam }} gold</div>
          <div class="progress-bar-losing-team" :style="{ width: `${percentageLosingTeamGold}%` }">{{ totalGoldLosingTeam }} gold</div>
        </div>
      </div>
    </div>

    <div class="table-losing-team">
      <div class="headers">
        <div style="width: 30%; color: lightcoral">Defeat</div>
        <div style="width: 20%">kda</div>
        <div style="width: 20%">damages</div>
        <div style="width: 30%">items</div>
      </div>

      <div class="rows">
        <div class="row-summoner">
          <template v-for="player in gameData[0].players" :key="player.champion">
            <template v-if="player.playerWin === 'Defeat'">
              <div class="player-row">

                <div class="cell-summoner">
                  <div class="cell-summoner-champ">
                    <img :src="`${champUrlIcon}`+ `${player.playerChampion}`+'.png'" :alt="player.playerChampion">
                  </div>
                  <div class="cell-summoner-level">
                    {{ player.playerLevel }}
                  </div>
                  <div class="cell-summoner-spells">
                    <img :src="`${summonerSpellIcon}`+ `${getSummonerSpells(player.playerSummonerSpell1)}`" alt="summoner-spell1">
                    <img :src="`${summonerSpellIcon}`+ `${getSummonerSpells(player.playerSummonerSpell2)}`" alt="summoner-spell2">
                  </div>
                  <div class="cell-summoner-name">
                    {{ player.playerName }}
                  </div>
                </div>

                <div class="cell-kda">
                  <div>{{ player.playerKills }} / {{ player.playerDeath }} / {{ player.playerAssists }}</div>
                  <div v-if="player.playerKda >= 5" style="color: orange">{{ player.playerKda }} kda</div>
                  <div v-else-if="player.playerKda >= 4 && player.playerKda < 5" style="color: dodgerblue">{{ player.playerKda }} kda</div>
                  <div v-else-if="player.playerKda >= 3 && player.playerKda < 4" style="color: lightseagreen">{{ player.playerKda }} kda</div>
                  <div v-else style="color: gray">{{ player.playerKda }} kda</div>
                </div>

                <div class="cell-damages">
                  <div>Damage Dealt <span>{{ player.playerDamageDealt }}</span></div>
                  <div>Damage Taken <span>{{ player.playerDamageTaken }}</span></div>
                </div>

                <div class="cell-items">
                  <template v-for="item in player.playerItems" :key="item">
                    <img v-if="item !== 0" :src="`${itemIcon}`+ `${item}`+'.png'" alt="item">
                  </template>
                </div>
              </div>
            </template>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['gameData'],
  data(){
    return {
      totalGoldWinningTeam: 0,
      totalGoldLosingTeam: 0,
      totalKillWinningTeam: 0,
      totalKillLosingTeam: 0,
      champUrlIcon: 'https://ddragon.leagueoflegends.com/cdn/13.6.1/img/champion/',
      itemIcon: 'https://ddragon.leagueoflegends.com/cdn/13.6.1/img/item/',
      summonerSpellIcon: 'https://ddragon.leagueoflegends.com/cdn/13.6.1/img/spell/',
      percentageWinningTeamKills: 0,
      percentageLosingTeamKills: 0,
      percentageWinningTeamGold: 0,
      percentageLosingTeamGold: 0,
    }
  },
  methods: {
    aggregateSomeData(){
      this.gameData[0].players.forEach(player => {
        if(player.playerWin === 'Victory'){
          this.totalGoldWinningTeam += player.playerGoldEarned
          this.totalKillWinningTeam += player.playerKills
        } else {
          this.totalGoldLosingTeam += player.playerGoldEarned
          this.totalKillLosingTeam += player.playerKills
        }
      })
      // progress bar calculation
      let totalKills = this.totalKillWinningTeam + this.totalKillLosingTeam
      this.percentageWinningTeamKills = Math.round((this.totalKillWinningTeam / totalKills) * 100)
      this.percentageLosingTeamKills = Math.round((this.totalKillLosingTeam / totalKills) * 100)

      let totalGold = this.totalGoldWinningTeam + this.totalGoldLosingTeam
      this.percentageWinningTeamGold =  Math.round((this.totalGoldWinningTeam / totalGold) * 100)
      this.percentageLosingTeamGold =  Math.round((this.totalGoldLosingTeam / totalGold) * 100)

    },
    getSummonerSpells(key){
      const spells =  this.$store.getters['summoner/getSummonerSpellInfos']
      const found = spells.find(icon => icon.key === key)
      return found.full
    },
  },
  beforeMount() {
    this.aggregateSomeData()
  }
}
</script>

<style scoped>
.container {
  padding: 0.5rem;
}

.table-winning-team {
  height: 40%;
  background-color: #121112;
  color: white;
  border: cornflowerblue;
}
.headers {
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.headers div {
  text-align: center;
}
.rows {
  height: 85%;
  display: flex;
}
.row-summoner {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.player-row {
  height: 20%;
  display: flex;
  width: 100%;
}
.cell-summoner {
  width: 30%;
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
}
.cell-summoner-champ img {
  border-radius: 50%;
  max-height: 100%;
  max-width: 100%;
}
.cell-summoner-level {
  border-radius: 50%;
  display: flex;
  border: white thin;
  align-items: center;
}
.cell-summoner-champ {
}
.cell-summoner-spells {
  display: flex;
  justify-content: center;
  align-items: center;
}
.cell-summoner-spells img {
  max-height: 50%;
  max-width: 50%;
  border-radius: 40px;
}
.cell-summoner-name {
  display: flex;
  justify-content: center;
  align-items: center;
}

.cell-kda {
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.cell-damages {
  width: 20%;
  display: flex;
  justify-content: space-evenly;
  color: gray;
}
.cell-damages span {
  display: flex;
  color: white;
}
.cell-items {
  width: 30%;
  display: flex;
  gap: 0.3rem;
  padding: 0.2rem;
  align-items: center;
  justify-content: flex-end;
}
.cell-items img {
  max-height: 100%;
  max-width: 100%;
  border-radius: 10px;
}


.container-progress-bars {
  padding: 1rem;
  margin: 1rem;
  height: 10%;
  background-color: #121112;

}
.table-losing-team {
  background-color: #121112;
  height: 40%;
  color: white;
}

.container-progress-bar-kills {
  display: flex;
  width: 80%;
  margin: auto;
}

.progress-bar-winning-team {
  background-color: cornflowerblue;
  color: white;
  text-align: center;
  margin-bottom: 0.5rem;
}

.progress-bar-losing-team {
  background-color: lightcoral;
  color: white;
  text-align: center;
  margin-bottom: 0.5rem;
}

</style>