<template>
  <div class="container">
    <h1>Checkout if there are incidents or maintenances on your server</h1>
    <select-region class="select-region-component" @selected-region="getSelectedRegion"></select-region>

    <section v-if="showStatusServerInformation">
      <h1>{{ selectedRegion }} : {{ name }}</h1>

      <div>
        <h1>Incidents</h1>
        <div class="no-incidents" v-if="!incidents.length">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 32 32"><path fill="currentColor" d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13s13-5.8 13-13c0-1.4-.188-2.794-.688-4.094L26.688 13.5c.2.8.313 1.6.313 2.5c0 6.1-4.9 11-11 11S5 22.1 5 16S9.9 5 16 5c3 0 5.694 1.194 7.594 3.094L25 6.688C22.7 4.388 19.5 3 16 3zm11.28 4.28L16 18.563l-4.28-4.28l-1.44 1.437l5 5l.72.686l.72-.687l12-12l-1.44-1.44z"/></svg>
        </div>

        <div v-else class="incident">
          <div  v-for="incident in incidents" :key="incident.id">
            <h2>{{ incident.title.content }} (id:{{ incident.id }})</h2>


            <p>created : {{ incident.createdAt.toDateString() }}</p>
            <p>severity : {{ incident.severity }}</p>
            <p>platforms : {{ incident.platforms }}</p>

            <div v-for="message in incident.updateMessage" :key="message">
              <div class="updates-incidents">
                <h2>Update: <span class="id-update"> (id:  {{message.id }}) </span></h2>
                <p>by {{ message.author }}</p>
                <p>{{ message.translations.find(item => item.locale === 'en_US').content }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style="margin-top: 2rem">
        <h1>Maintenances</h1>
        <div class="no-maintenances" v-if="!maintenances.length">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 32 32"><path fill="currentColor" d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13s13-5.8 13-13c0-1.4-.188-2.794-.688-4.094L26.688 13.5c.2.8.313 1.6.313 2.5c0 6.1-4.9 11-11 11S5 22.1 5 16S9.9 5 16 5c3 0 5.694 1.194 7.594 3.094L25 6.688C22.7 4.388 19.5 3 16 3zm11.28 4.28L16 18.563l-4.28-4.28l-1.44 1.437l5 5l.72.686l.72-.687l12-12l-1.44-1.44z"/></svg>
        </div>

        <div v-else class="maintenances">
          <div> TOTO </div>
        </div>
      </div>





      <!--      <div>-->
      <!--        <div>-->
      <!--          <h1>Maintenances</h1>-->
      <!--          <p v-if="maintenances">There is no maintenance in progress in this region.</p>-->
      <!--          <p v-else> {{ maintenances }}</p>-->
      <!--        </div>-->
      <!--      </div>-->
    </section>
  </div>
</template>

<script>
// incident_severity	string	(Legal values: info, warning, critical)
//maintenance_status	string	(Legal values: scheduled, in_progress, complete)
// platforms	List[string]	(Legal values: windows, macos, android, ios, ps4, xbone, switch)
import axios from "axios";
import selectRegion from "@/components/UI/SelectRegion";
export default {
  components: {
    selectRegion
  },
  data(){
    return {
      selectedRegion: null,
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
                platforms: incident.platforms,
                title: incident.titles.find(item => item.locale === 'en_US'),
                update: incident.updated_at,
                updateMessage: incident.updates,
              }
          )
        })

        this.maintenances = response.data.maintenances
        this.name = response.data.name

        console.log(this.incidents)
        console.log(this.maintenances)
      }).catch(error =>{
        console.log(error)
      })

    },

    getSelectedRegion(region){
      this.maintenances = []
      this.incidents = []
      this.selectedRegion = region
      this.fetchStatusServerForSelectedRegion()
    }
  },
  computed: {
    apiKey(){
      return this.$store.getters['getApiKey']
    }
  },
}
</script>

<style scoped>
.container {

}

.container h1 {
  text-align: center;
  margin-bottom: 1rem;
}

.select-region-component {
  width: 30%;
}

.no-incidents,
.no-maintenances {
  text-align: center;
  margin-top: 2rem;
}

svg {
  color: green;
}


.incident {
  text-align: start;
  padding: 2rem;
  background-color: #121112;
  width: 50%;
  margin: auto;
}

.updates-incidents {
  margin-top: 1rem;
  color: gray;
}

.id-update {
  font-size: small;
}

</style>