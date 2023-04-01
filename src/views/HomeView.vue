<template>
  <div>
    <h1>Home</h1>
    <video-background
        src="test2.mp4"
        style="max-height: 100vh; height: 100vh;"
    >

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
  }
}
</script>



<style scoped>

</style>