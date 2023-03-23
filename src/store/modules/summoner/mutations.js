export default {
    registerInfoSummoner(state, payload){
        state.summonerInfos = {
            encryptedSummonerId: payload.summonerInfos,
            puuid: payload.puuid,
            name: payload.name,
            profileIconId: payload.profileIconId,
            revisionDate: payload.revisionDate,
            summonerLevel: payload.summonerLevel,
            accountId: payload.accountId,
            region: payload.region,
        }
        // state.summonerInfos.push(payload)
    }
}