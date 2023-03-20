import { createApp } from 'vue';
import App from '@/App';
import store from "@/store/index";
import router from "@/router";
import ChampionCard from "@/components/champions/ChampionCard";

const app = createApp(App);
app.component('champion-card', ChampionCard)
app.use(store);
app.use(router);


app.mount('#app')
