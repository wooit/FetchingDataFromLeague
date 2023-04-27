import { createApp } from 'vue';
import App from '@/App';
import store from "@/store/index";
import router from "@/router";
import ChampionCard from "@/components/champions/ChampionCard";
import SelectRegion from "@/components/UI/SelectRegion";
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp(App);
app.component('champion-card', ChampionCard)
app.component('select-region', SelectRegion)
app.use(store);
app.use(router);
app.use(vuetify);

app.mount('#app')
