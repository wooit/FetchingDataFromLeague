<template>
  <div>
    <router-view></router-view>
    <div class="form-field">
      <input class="input-field"  v-model="selectedChampion" @click="resetSorting"  type="search"  autocomplete="off" placeholder="Search a champion..."  required />
    </div>

    <div class="wrapper-buttons">
      <div class="container" @click="sortBy('Tank')">
        <a href="#" class="btn" title="filter all tanks">Tanks </a>
      </div>
      <div class="container" @click="sortBy('Fighter')">
        <a href="#" class="btn" title="filter all fighters">Fighter </a>
      </div>
      <div class="container" @click="sortBy('Mage')">
        <a href="#" class="btn" title="filter all mages">Mage </a>
      </div>
      <div class="container" @click="sortBy('Assassin')">
        <a href="#" class="btn" title="filter all assassins">Assassin </a>
      </div>
      <div class="container" @click="sortBy('Marksman')">
        <a href="#" class="btn" title="filter all marksmans">Marksman </a>
      </div>
      <div class="container" @click="sortBy('Support')">
        <a href="#" class="btn" title="filter all supports">Support </a>
      </div>
    </div>

    <div class="grid-champions">
      <champion-card v-for="champ in searchChamp" :key="champ.key" :championKey="champ.key"> </champion-card>
    </div>

  </div>
</template>

<script>
import ChampionCard from "@/components/champions/ChampionCard";
export default {
  components: {ChampionCard},
  data() {
    return {
      selectedChampion: '',
      sortingByRole: '',
      championName: null,
      champKey: null,
    }
  },
  methods: {
    sortBy(role){
      this.selectedChampion = ''
      this.sortingByRole = role
    },
    resetSearch(){
      this.selectedChampion = ''
      this.sortingByRole = ''
    },
    resetSorting(){
      this.sortingByRole = ''
    },
  },
  computed: {
    searchChamp() {
      if(this.sortingByRole === ''){
        return this.$store.getters['champions/getChampionNameAndId'].filter(champ => champ.id.toLowerCase().includes(this.selectedChampion))
      } else {
        return this.$store.getters['champions/getChampionsByRoles'].filter((champ) => champ.tags.includes(this.sortingByRole))
      }
    },
  }
}

</script>

<style scoped>
  .form-field {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }

  .input-field {
    font-family: inherit;
    width: 20rem;
    border: 0;
    border-bottom: 2px solid gray;
    outline: 0;
    font-size: 1.3rem;
    color: white;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
  }

  /* To show X in input field because Vuetify hides it otherwise */
  input[type="search"] {
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    -webkit-appearance: searchfield;
  }

  input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: searchfield-cancel-button;
  }

  .input-field:focus {
    border-color: rgb(146, 148, 248);
  }

  .wrapper-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 3rem;
    margin-top: 3rem;
  }

  /* CREDIT TO Kniw Studio for the button style */
  .container {
    display: flex;
  }

  a {
    font-size: 1.5rem;
    padding: 1rem 3rem;
    color: #f4f4f4;
    text-transform: uppercase;
  }

  .btn {
    text-decoration: none;
    border: 1px solid rgb(146, 148, 248);
    position: relative;
    overflow: hidden;
  }

  .btn:hover {
    box-shadow: 1px 1px 25px 10px rgba(146, 148, 248, 0.4);
  }

  .btn:before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        120deg,
        transparent,
        rgba(146, 148, 248, 0.4),
        transparent
    );
    transition: all 650ms;
  }

  .btn:hover:before {
    left: 100%;
  }

  .grid-champions {
    display: flex;
    flex-wrap: wrap;
  }

</style>