import {createStore} from "vuex";
import championsModule from "@/store/modules/champions";
const store = createStore({
    modules: {
        champions: championsModule
    },
    state(){
        return {

        }
    }
})

export default store;