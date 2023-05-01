<template>
  <div class="container-select-queue">
    <v-select
        v-model="selectedQueue"
        clearable
        label="Select a queue"
        :items="getListQueues"
        variant="outlined"
        color="cyan"
    ></v-select>
  </div>
</template>

<script>
export default {
  emits: ['selected-queue'],
  data(){
    return {
      selectedQueue: '',
    }
  },
  computed: {
    getListQueues(){
      return this.$store.getters['getListQueues']
    },
  },
  watch: {
    selectedQueue (queue) {
      this.$emit('selected-queue', queue)
    }
  },
}
</script>

<style scoped>
  .container-select-queue {
    display: flex;
    flex-direction: column;
    margin: auto;
  }

  .container-select-queue:hover,
  .container-select-queue:focus{
    color: cyan;
  }

</style>