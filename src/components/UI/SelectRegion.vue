<template>
      <p>Select a Region</p>
      <div style="display: flex">
        <select v-model="selectedRegion" @change="submitRegion(selectedRegion)"> Region ...
          <label for="">Region...</label>
          <option v-for="region in getListRegions" :key="region.id" :value="region.id" >
            {{ region.id }}
          </option>
        </select>
      </div>
</template>

<script>
export default {
  emits: ['selected-region'],
  data(){
    return {
      selectedRegion: '',
    }
  },
  methods: {
    submitRegion(region){
      this.$emit('selected-region', region)
    }
  },
  computed: {
    getListRegions(){
      return this.$store.getters['serverStatus/getAllRegions']
    },
}}
</script>