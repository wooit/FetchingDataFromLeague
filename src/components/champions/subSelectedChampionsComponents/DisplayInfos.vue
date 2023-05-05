<template>
  <section class="section-info">
    <div class="champ-info-container">

      <div class="roles-container">
        <h1>Role(s) - </h1>
        <h3 v-for="role in roles" :key="role"><span>{{ role }}</span></h3>
      </div>

      <div class="difficulty-container">
        <h1>Difficulty</h1>
        <div class="svg-container">
          <svg :class="{ 'difficulty' : difficulty >= 2}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19 12l-7 10l-7-10l7-10"/></svg>
          <svg :class="{ 'difficulty' : difficulty >= 4}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19 12l-7 10l-7-10l7-10"/></svg>
          <svg :class="{ 'difficulty' : difficulty >= 6}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19 12l-7 10l-7-10l7-10"/></svg>
          <svg :class="{ 'difficulty' : difficulty >= 8}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19 12l-7 10l-7-10l7-10"/></svg>
          <svg :class="{ 'difficulty' : difficulty >= 10}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19 12l-7 10l-7-10l7-10"/></svg>
        </div>
      </div>
    </div>

    <div class="img-container">
      <img :src="linkImage" alt="background-image">
    </div>
  </section>
  <section class="section-lore">
    <div class="lore-container">
          <span v-for="(letter, index) in letters" :key="index">
          {{ letter }}
        </span>
    </div>
  </section>
</template>

<script>
export default {
  props: ['name', 'champKey', 'lore', 'title', 'roles', 'difficulty', 'keyComponent'],
  data(){
    return {
      linkImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/'+this.name+'_0.jpg',
      letters: [],
      showLore: false,
    }
  },
  methods: {
    animateText() {
      const splitText = this.lore.split("");
      let i = 0;
      const intervalId = setInterval(() => {
        if (i < splitText.length) {
          this.letters.push(splitText[i]);
          i++;
        } else {
          clearInterval(intervalId);
        }
      }, 100);
    },
  },
  created() {
    this.animateText()
  }
}

</script>
<style scoped>

.section-info {
  display: flex;
  /*align-self: center;*/
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.champ-info-container {
  width: 50vh;
  margin-right: 10vh;
  margin-left: 10vh;
  display: flex;
  flex-direction: column;
  gap: 1rem
}

h1 {
  font-size: xx-large;
}

.img-container {
  width: 100%;
  height: 100%;
}

img {
  /*width: 50vw;*/
  /*height: 50vh;*/
}

.difficulty {
  color: darkgoldenrod;
}

.roles-container {
  display: flex;
  align-items: center;
  gap: 2rem;
  background-color: #121112;
  border-radius: 5px;
  padding: 1rem;
}

.roles-container span {
  color: darkgoldenrod;
}

.difficulty-container {
  display: flex;
  align-items: center;
  gap: 2rem;
  background-color: #121112;
  border-radius: 5px;
  padding: 1rem;
}

.svg-container {
  display: flex;
  border: solid white;
  align-items: center;
  padding: 1rem;
}

.section-lore {
  display: flex;
  width: 50%;
  margin: 5rem auto;
}

.lore-container {
  background-color: #121112;
  padding: 1rem;
  border:  1rem double;
  border-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='75' height='75'%3E%3Cg fill='none' stroke='%23B88846' stroke-width='2'%3E%3Cpath d='M1 1h73v73H1z'/%3E%3Cpath d='M8 8h59v59H8z'/%3E%3Cpath d='M8 8h16v16H8zM51 8h16v16H51zM51 51h16v16H51zM8 51h16v16H8z'/%3E%3C/g%3E%3Cg fill='%23B88846'%3E%3Ccircle cx='16' cy='16' r='2'/%3E%3Ccircle cx='59' cy='16' r='2'/%3E%3Ccircle cx='59' cy='59' r='2'/%3E%3Ccircle cx='16' cy='59' r='2'/%3E%3C/g%3E%3C/svg%3E") 25;
  font-size: 1.5rem;
}
</style>