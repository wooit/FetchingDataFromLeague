import mutations from "@/store/modules/serversStatus/mutations";
import getters from "@/store/modules/serversStatus/getters";
import actions from "@/store/modules/serversStatus/actions";

export default {
    namespaced: true,
    state(){
        return {
            regions : [
                { id: 'EUW1', name: 'Western-Europe' },
                { id: 'BR1', name: 'Brazil' },
                { id: 'EUN1', name: 'Northern-Europe' },
                { id: 'JP1', name: 'Japan' },
                { id: 'KR', name: 'Korea' },
                { id: 'LA1', name: 'Latin-America-North' },
                { id: 'LA2', name: 'Latin-America-South' },
                { id: 'NA1', name: 'North-America' },
                { id: 'OC1', name: 'Oceania' },
                { id: 'TR1', name: 'Turkey' },
                { id: 'RU', name: 'Russia' },
                { id: 'PH2', name: 'Philippine' },
                { id: 'SG2', name: 'Singapore' },
                { id: 'TH2', name: 'Thailand' },
                { id: 'TW2', name: 'Taiwan' },
                { id: 'VN2', name: 'Vietnam' },
            ]
        }
    },
    mutations: mutations,
    getters: getters,
    actions: actions
}