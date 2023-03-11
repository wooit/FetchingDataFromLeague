export default {
    getChampionNameAndId(state){
        return state.champions.map(champ => (
            {
                id : champ.id,
                key: champ.key
            }
        ))
    }
}