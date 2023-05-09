<template>
  <div class="container-home">

    <video-background class="animated-background" src="/assets/kda.mp4" style="max-height: 100vh; height: 100vh;">
      <section>
        <p>
          Discover all<span @click="routeTo('champions')"> champions </span>available, learn more about their lore, capacities, skins ...
        </p>
      </section>
    </video-background>

    <div class="section-separator"></div>

    <video-background class="animated-background" src="/assets/leona.mp4" style="max-height: 100vh; height: 100vh;">
      <section>
        <p>
          Find out more information about a <span @click="routeTo('summoner')"> summoner </span>, his level mastery for each champion, his match history ...
        </p>
      </section>
    </video-background>

    <div class="section-separator"></div>

    <video-background class="animated-background" src="/assets/zed.mp4" style="max-height: 100vh; height: 100vh;">
      <section>
        <p>
          Checkout who is wrecking the <span @click="routeTo('ranking')"> ladder </span> in your region ...
        </p>
      </section>
    </video-background>

    <div class="section-separator"></div>

    <video-background class="animated-background" src="/assets/sona.mp4" style="max-height: 100vh; height: 100vh;">
      <section>
        <p>
          See which champions are available in the weekly <span @click="routeTo('rotation')"> rotation </span> in your region ...
        </p>
      </section>
    </video-background>

    <div class="section-separator"></div>

    <video-background class="animated-background" src="/assets/diana.mp4" style="max-height: 100vh; height: 100vh;">
      <section>
        <p>
          Stay updated about the current <span @click="routeTo('status-servers')"> status </span> of the server you are playing on ...
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
  methods: {
    routeTo(navItem){
      console.log(navItem)
      this.$router.push('/'+ navItem)
    },
  }
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
  background-color: black;
  opacity: 0.6;
  border-radius: 25px;
  align-self: start;
  font-size: 2rem;
  width: 30%;
  margin-left: 0.5rem;
}

section:hover {
  opacity: 1;
}

span {
  color: cyan;
  white-space: pre;
}

p {
  padding: 0.5rem;
  margin: 2rem 2rem
}

p:hover {
  cursor: pointer;
}

section p a {
  text-decoration: none;
}

.section-separator {
  height: 2rem;
  background-color: black;
}
</style>