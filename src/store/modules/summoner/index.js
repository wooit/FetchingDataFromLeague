import mutations from "@/store/modules/serversStatus/mutations";
import getters from "@/store/modules/serversStatus/getters";
import actions from "@/store/modules/serversStatus/actions";

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