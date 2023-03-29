import {createRouter, createWebHistory} from "vue-router";
import HomeView from '@/views/HomeView';
import ChampionsList from "@/views/ChampionsList";
import SummonerView from '@/views/SummonerView';
import RotationView from '@/views/RotationView';
import RankingView from '@/views/RankingView';
import StatusServers from '@/views/StatusServers';
import SelectedChampion from '@/components/champions/SelectedChampion';
import SelectedSummoner from '@/components/summoner/SelectedSummoner';

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
            path: '/champions', component: ChampionsList, name: 'champions',
        },
        {
            path: '/champions/:name/:key', name: 'selected-champion' ,component: SelectedChampion, props: true,
        },
        {
            path: '/summoner' , component: SummonerView, name: 'summoner',
        },
        {
            path: '/summoner/:name', name: 'selected-summoner', component: SelectedSummoner,
        },
        {
            path: '/ranking', component: RankingView, name: 'ranking',
        },
        {
            path: '/rotation', component: RotationView, name: 'rotation',
        },
        {
            path: '/status-servers', component: StatusServers, name: 'status-servers',
        },
        {
            path: '/:notFound(,*)', redirect: '/home',
        }
    ],
    linkActiveClass: 'active',
})

export default router;