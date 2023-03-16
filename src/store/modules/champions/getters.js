export default {
    getChampionNameAndId(state){
        return state.champions.map(champ => (
            {
                id : champ.id,
                key: champ.key
            }
        ))
    },
    getChampionsByRoles(state){
        return state.champions.map(champ => (
            {
                id : champ.id,
                tags: champ.tags,
                key: champ.key
            }
        ))
    },
}