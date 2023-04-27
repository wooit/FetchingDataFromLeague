<template>
  <div class="container-home">
    <video-background
        class="animated-background"
        src="test2.mp4"
        style="max-height: 100vh; height: 100vh;"
    >
      <section>
        <p>
          <router-link class="nav-item" to="/champions">
          Discover all <span> champions </span> available, learn more about their lore, capacities, skins ...
          </router-link>
        </p>
      </section>

      <section>
        <p>
          <router-link class="nav-item" to="/summoner">
          Find out more information about a <span> summoner </span>, his level mastery for each champion, his match history ...
          </router-link>
        </p>
      </section>

      <section>
        <p>
          <router-link class="nav-item" to="/rotation">
          See which champions are available in the weekly <span> rotation </span> in your region ...
          </router-link>
        </p>
      </section>

      <section>
        <p>
          <router-link class="nav-item" to="/status-servers">
          Stay updated about the current <span> status </span> of the server you are playing on ...
          </router-link>
        </p>
      </section>

      <section>
        <p>
          <router-link class="nav-item" to="/ranking">
          Checkout who is wrecking the <span> ladder </span> in your region ...
          </router-link>
        </p>
      </section>

    </video-background>
  </div>
</template>

<script>
import VideoBackground from "vue-responsive-video-background-player";

export default {
  components: {
    VideoBackground
  },
  data(){
    return {
    }
  },
}
</script>

<style scoped>

  .container-home {
    color: white;
  }

  .animated-background {
    opacity: 1;
    border-radius: 0;
  }

  section {
    margin-left: 1rem;
    background-color: black;
    width: fit-content;
    opacity: 0.6;
    border-radius: 25px;
  }

  section:hover {
    opacity: 1;
  }

  span {
    color: cyan;
    white-space: pre;
  }

  p {
    display: flex;
    padding: 0.5rem;
  }

  a {
    text-decoration: none;
    color: white;
  }
</style>