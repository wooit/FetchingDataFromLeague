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
            },
            summonerSpells: [
                {
                    "id": "SummonerBarrier",
                    "name": "Barrier",
                    "description": "Shields your champion from 105-411 damage (depending on champion level) for 2 seconds.",
                    "key": "21",
                    "full": "SummonerBarrier.png",
                },
                {
                    "id": "SummonerBoost",
                    "name": "Cleanse",
                    "description": "Removes all disables (excluding suppression and airborne) and summoner spell debuffs affecting your champion and lowers the duration of incoming disables by 65% for 3 seconds.",
                    "key": "1",
                    "full": "SummonerBoost.png",
                },
                {
                    "id": "SummonerDot",
                    "name": "Ignite",
                    "description": "Ignites target enemy champion, dealing 70-410 true damage (depending on champion level) over 5 seconds, grants you vision of the target, and reduces healing effects on them for the duration.",
                    "key": "14",
                    "full": "SummonerDot.png",
                },
                {
                    "id": "SummonerExhaust",
                    "name": "Exhaust",
                    "description": "Exhausts target enemy champion, reducing their Move Speed by 30%, and their damage dealt by 35% for 3 seconds.",
                    "key": "3",
                    "full": "SummonerExhaust.png",
                },
                {
                    "id": "SummonerFlash",
                    "name": "Flash",
                    "description": "Teleports your champion a short distance toward your cursor's location.",
                    "key": "4",
                    "full": "SummonerFlash.png",
                },
                {
                    "id": "SummonerHaste",
                    "name": "Ghost",
                    "description": "For 10 seconds, your champion can move through units and gains 24 - 48% Move Speed (depending on champion level). Ghost extends its duration on takedown.",
                    "key": "6",
                    "full": "SummonerHaste.png",
                },
                {
                    "id": "SummonerHeal",
                    "name": "Heal",
                    "description": "Restores 80-318 Health (depending on champion level) and grants 30% Move Speed for 1 second to you and target allied champion. This healing is halved for units recently affected by Summoner Heal.",
                    "key": "7",
                    "full": "SummonerHeal.png",
                },
                {
                    "id": "SummonerMana",
                    "name": "Clarity",
                    "description": "Restores 50% of your champion's maximum Mana. Also restores allies for 25% of their maximum Mana.",
                    "key": "13",
                    "full": "SummonerMana.png",
                },
                {
                    "id": "SummonerSmite",
                    "name": "Smite",
                    "description": "Deals 600-1200 true damage to target monster or minion.",
                    "key": "11",
                    "full": "SummonerSmite.png",
                },
                {
                    "id": "SummonerSnowball",
                    "name": "Mark",
                    "description": "Throw a snowball in a straight line at your enemies. If it hits an enemy, they become marked, granting True Sight, and your champion can quickly travel to the marked target as a follow up.",
                    "key": "32",
                    "full": "SummonerSnowball.png",
                },
                {
                    "id": "SummonerTeleport",
                    "name": "Teleport",
                    "description": "After channeling for 4 seconds, teleports your champion to target allied structure. Upgrades to Unleashed Teleport at 14 minutes, which teleports your champion to target allied structure, minion, or ward.",
                    "key": "12",
                    "full": "SummonerTeleport.png",
                },
                {
                    "id": "Summoner_UltBookPlaceholder",
                    "name": "Placeholder",
                    "description": "This slot will be replaced by another champion's ultimate selected at the start of the game. There will be 30 seconds to select an ultimate. Be prepared!",
                    "key": "54",
                    "full": "Summoner_UltBookPlaceholder.png",
                },
                {
                    "id": "Summoner_UltBookSmitePlaceholder",
                    "name": "Placeholder and Attack-Smite",
                    "description": "This slot will be replaced by another champion's ultimate and you will gain Attack-Smite. There will be 30 seconds to select an ultimate. Be prepared!",
                    "key": "55",
                    "full": "Summoner_UltBookSmitePlaceholder.png",
                }
            ]


        }
    },
    mutations: mutations,
    getters: getters,
    actions: actions
}