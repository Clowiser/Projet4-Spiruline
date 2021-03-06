import { createRouter, createWebHistory } from 'vue-router'
import SuppliersList from '../components/SuppliersList.vue';
import SuppliersMap from '../components/SuppliersMap.vue';
// import SuppliersMap from '../components/Home.vue';
// import Supplier from '../components/Supplier.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
        path: '/suppliers',
        component: SuppliersList
        },
        {
        path: '/',
        redirect: '/suppliers'
        },
        {
        path: '/map',
        component: SuppliersMap
        },
        // {
        // path: '/',
        // component: Home
        // }
    ]
})
// 4.2.1 - Déclarez votre tableau de route dans le fichier index.js du répertoire router en faisant référence aux composants créés avant.

  export default router 