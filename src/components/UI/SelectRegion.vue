<template>
  <div class="container-select-region">
    <v-select
        v-model="selectedRegion"
        clearable
        label="Select a region"
        :items="getListRegions"
        variant="outlined"
        color="cyan"
    ></v-select>
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
  computed: {
    getListRegions(){
      return this.$store.getters['serverStatus/getAllRegions']
    },
  },
  watch: {
    selectedRegion (region) {
      this.$emit('selected-region', region)
    }
  },
}
</script>

<style scoped>
  .container-select-region {
    display: flex;
    flex-direction: column;
    margin: auto;
  }

  .container-select-region:hover,
  .container-select-region:focus{
    color: cyan;
  }

</style>