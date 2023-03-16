<template>
  <h1>Status Servers</h1>

  <section>
    <p>Select a Region</p>
    <div style="display: flex">
      <select v-model="selectedRegion"> Region ...
        <label for="">Region...</label>
        <option v-for="region in getListRegions" :key="region.id" :value="region.id">
          {{ region.id }}
        </option>
      </select>
      <button @click="submitRegion(selectedRegion)"> GO </button>
    </div>
  </section>

  <section v-if="showStatusServerInformation">
    <h1>{{ selectedRegion }} : {{ name }}</h1>

    <div>
      <h1>Incidents</h1>
      <div v-for="incident in incidents" :key="incident.id" style="background-color: gray">
        <p>{{ incident.title.content }}</p>
        <p>id : {{ incident.id }}</p>
        <p>created : {{ incident.createdAt }}</p>
        <p>severity : {{ incident.severity }}</p>
        <p>maintenanceStatus : {{ incident.maintenanceStatus }}</p>
        <p>platforms : {{ incident.platforms }}</p>
        <p>update : {{ incident.update }}</p>
        <p>updateMessage : {{ incident.updateMessage }}</p>
      </div>

    </div>

    <div>
      <div>
        <h1>Maintenances</h1>
        <p v-if="maintenances">There is no maintenance in progress in this region.</p>
        <p v-else> {{ maintenances }}</p>
      </div>
    </div>
  </section>

</template>

<script>
// incident_severity	string	(Legal values: info, warning, critical)
//maintenance_status	string	(Legal values: scheduled, in_progress, complete)
// platforms	List[string]	(Legal values: windows, macos, android, ios, ps4, xbone, switch)
import axios from "axios";
export default {
  data(){
    return {
      selectedRegion: '',
      showStatusServerInformation: false,
      maintenances: [],
      incidents: [],
      name: '',
    }
  },
  methods: {
    fetchStatusServerForSelectedRegion(){
      axios.get('https://'+this.selectedRegion+'.api.riotgames.com/lol/status/v4/platform-data?api_key='+this.apiKey).then(response => {
        console.log(response.data)
        this.showStatusServerInformation = true

        const test = response.data.incidents
        test.forEach(incident => {
          this.incidents.push(
              {
                id: incident.id,
                createdAt:  new Date(incident.created_at),
                severity: incident.incident_severity,
                maintenanceStatus: incident.maintenance_status,
                platforms: incident.platforms,
                title: incident.titles.find(item => item.locale === 'en_US'),
                update: incident.updated_at,
                updateMessage: incident.updates
              }
          )
        })
       console.log(this.incidents)

        this.maintenances = response.data.maintenances
        console.log(this.maintenances)
        this.name = response.data.name
      }).catch(error =>{
        console.log(error)
      })

    },
    submitRegion(region){
      console.log(region)
      console.log(this.selectedRegion)
      this.maintenances = []
      this.incidents = []
      this.fetchStatusServerForSelectedRegion()
    }
  },
  computed: {
    getListRegions(){
      return this.$store.getters['serverStatus/getAllRegions']
    },
    apiKey(){
      return this.$store.getters['getApiKey']
    }
  },
}
</script>




<style scoped>

</style>