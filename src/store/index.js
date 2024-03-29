import {createStore} from "vuex";
import championsModule from "@/store/modules/champions";
import serverStatusModule from "@/store/modules/serversStatus";
import summonerModule from '@/store/modules/summoner';

const store = createStore({
    modules: {
        champions: championsModule,
        serverStatus: serverStatusModule,
        summoner: summonerModule
    },
    state(){
        return {
            apiKey: process.env.VUE_APP_API_LEAGUE_OF_LEGENDS_KEY,
            queue: ['RANKED_SOLO_5x5', 'RANKED_FLEX_SR']
        }
    },
    getters: {
        getApiKey(state){
            return state.apiKey
        },
        getListQueues(state){
            return state.queue
        }
    }
})

export default store;