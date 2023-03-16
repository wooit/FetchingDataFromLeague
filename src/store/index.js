import {createStore} from "vuex";
import championsModule from "@/store/modules/champions";
import serverStatusModule from "@/store/modules/serversStatus";

const store = createStore({
    modules: {
        champions: championsModule,
        serverStatus: serverStatusModule
    },
    state(){
        return {
            apiKey: process.env.VUE_APP_API_LEAGUE_OF_LEGENDS_KEY
        }
    },
    getters: {
        getApiKey(state){
            return state.apiKey
        }
    }
})

export default store;