import mutations from "@/store/modules/summoner/mutations";
import getters from "@/store/modules/summoner/getters";
import actions from "@/store/modules/summoner/actions";

export default {
    namespaced: true,
    state(){
        return {
            summonerInfos: {
                encryptedSummonerId: '',
                puuid: '',
                name: '',
                profileIconId: '',
                revisionDate: '',
                summonerLevel: '',
                accountId: '',
                region: '',
            }
        }
    },
    mutations: mutations,
    getters: getters,
    actions: actions
}