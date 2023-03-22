<template>
  <p>Select a Queue</p>
  <div style="display: flex">
    <select v-model="selectedQueue" @change="submitQueue(selectedQueue)"> Region ...
      <label for="">Queue...</label>
      <option v-for="queue in getListQueues" :key="queue" :value="queue">
        {{ queue }}
      </option>
    </select>
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
  methods: {
    submitQueue(queue){
      this.$emit('selected-queue', queue)
    }
  },
  computed: {
    getListQueues(){
      return this.$store.getters['getListQueues']
    },
  }}
</script>