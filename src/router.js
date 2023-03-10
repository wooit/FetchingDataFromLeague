import {createRouter, createWebHistory} from "vue-router";
import HomeView from '@/views/HomeView';
import ChampionsList from "@/views/ChampionsList";
import SummonerView from '@/views/SummonerView';
import RotationView from '@/views/RotationView';
import RankingView from '@/views/RankingView';
import StatusServers from '@/views/StatusServers';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', redirect: '/home',
        },
        {
            path: '/home', component: HomeView, name: 'home',
        },
        {
            path: '/champions', component: ChampionsList, name: 'champions'
        },
        {
            path: '/summoner' , component: SummonerView, name: 'summoner'
        },
        {
            path: '/ranking', component: RankingView, name: 'ranking'
        },
        {
            path: '/rotation', component: RotationView, name: 'rotation'
        },
        {
            path: '/status-servers', component: StatusServers, name: 'status-servers'
        },
        {
            path: '/:notFound(,*)', redirect: '/home'
        }
    ]
})

export default router;