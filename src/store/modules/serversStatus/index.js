import mutations from "@/store/modules/serversStatus/mutations";
import getters from "@/store/modules/serversStatus/getters";
import actions from "@/store/modules/serversStatus/actions";

export default {
    namespaced: true,
    state(){
        return {
            regions : [
                { value: 'EUW1', title: 'Western-Europe' },
                { value: 'BR1', title: 'Brazil' },
                { value: 'EUN1', title: 'Northern-Europe' },
                { value: 'JP1', title: 'Japan' },
                { value: 'KR', title: 'Korea' },
                { value: 'LA1', title: 'Latin-America-North' },
                { value: 'LA2', title: 'Latin-America-South' },
                { value: 'NA1', title: 'North-America' },
                { value: 'OC1', title: 'Oceania' },
                { value: 'TR1', title: 'Turkey' },
                { value: 'RU', title: 'Russia' },
                { value: 'PH2', title: 'Philippine' },
                { value: 'SG2', title: 'Singapore' },
                { value: 'TH2', title: 'Thailand' },
                { value: 'TW2', title: 'Taiwan' },
                { value: 'VN2', title: 'Vietnam' },
            ],
            availableRegionForMatchHistory: [
                { id: 'EUW1', name: 'europe' },
                { id: 'BR1', name: 'americas' },
                { id: 'EUN1', name: 'europe' },
                { id: 'JP1', name: 'asia' },
                { id: 'KR', name: 'asia' },
                { id: 'LA1', name: 'americas' },
                { id: 'LA2', name: 'americas' },
                { id: 'NA1', name: 'americas' },
                // { id: 'OC1', name: 'Oceania' },
                // { id: 'TR1', name: 'Turkey' },
                // { id: 'RU', name: 'Russia' },
                { id: 'PH2', name: 'sea' },
                { id: 'SG2', name: 'sea' },
                { id: 'TH2', name: 'sea' },
                { id: 'TW2', name: 'sea' },
                { id: 'VN2', name: 'sea' },
            ]
        }
    },
    mutations: mutations,
    getters: getters,
    actions: actions
}