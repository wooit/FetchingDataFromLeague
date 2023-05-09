<template>
    <nav>
      <router-link class="nav-item" to="/home" >
        <img class="logo" src="/assets/geoLogo.png" alt="logo">
      </router-link>

      <router-link class="nav-item" to="/home" >home</router-link>
      <router-link class="nav-item" to="/champions">champions</router-link>
      <router-link class="nav-item" to="/summoner">summoner</router-link>
      <router-link class="nav-item" to="/ranking" >ranking</router-link>
      <router-link class="nav-item" to="/rotation" >rotation</router-link>
      <router-link class="nav-item" to="/status-servers">status-servers</router-link>
    </nav>
</template>

<script>

</script>

<style >
nav {
  min-height: 5vh;
  background-color: #121112;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: flex-end;
}

nav a:first-of-type {
  margin-right: auto;
}

.logo {
  width: 100px;
  height: 100px;
  margin-left: 1rem;
  align-self: flex-start;
}

.nav-item {
  margin: 0 1rem;
  color: white;
  list-style: none;
  align-items: center;
  font-size: 1.5rem;
}

/*!* ici "a" fait reference à <router-link> car under the hood, router link is an anchor tag*!*/
a {
  text-decoration: none;
  font: inherit;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  display: flex;
}

a:hover,
a:active{
  color: white;
  text-decoration: underline;
  text-underline-offset: 8px;
}
a.active{
  color: cyan;
  text-decoration: underline;
  text-underline-offset: 8px;
}

</style>


