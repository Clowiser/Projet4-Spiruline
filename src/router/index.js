import { createRouter, createWebHistory } from 'vue-router'
import SuppliersList from '../components/SuppliersList.vue';
import SuppliersMap from '../components/SuppliersMap.vue';
import Supplier from '../components/Supplier.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
        path: '/suppliers',
        component: SuppliersList
        },
        {
        path: '/map',
        component: SuppliersMap
        },
        {
        path: '/supplier',
        component: Supplier
        }
    ]
})
// 4.2.1 - Déclarez votre tableau de route dans le fichier index.js du répertoire router en faisant référence aux composants créés avant.

  export default router 