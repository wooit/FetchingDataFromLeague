<template>
  <div>
    <nav>
      <router-link to="/home" >home</router-link>
      <router-link to="/champions">champions</router-link>
      <router-link to="/summoner">summoner</router-link>
      <router-link to="/ranking" >ranking</router-link>
      <router-link to="/rotation" >rotation</router-link>
      <router-link to="/status-servers">status-servers</router-link>
    </nav>

  </div>
</template>

<script>

</script>

<style scoped>
div{
  background-color: #121112;
  min-width: 1080px;
  padding-top: 10px;
  padding-bottom: 10px;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto, sans-serif;
}

li {
  margin: 0 2rem;
}

/* ici "a" fait reference à <router-link> car under the hood, router link is an anchor tag*/
a {
  text-decoration: none;
  font: inherit;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

a:hover,
a:active{
  color: white;
  background-color: cornflowerblue;
  text-decoration: underline;
  text-underline-offset: 8px;
}
a.active{
  color: cyan;
  text-decoration: underline;
  text-underline-offset: 8px;
}

</style>


