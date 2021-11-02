<template>
    <div>
        <div v-if='loading'>Chargement des informations en cours, merci de patienter !</div>

        <div v-if="error">
        <p>Erreur - Veuillez réessayer ultérieurement.</p>
        <p>{{error}}</p>
        </div>

        <h1 class='titreSuppliers'>Liste des fournisseurs</h1>
    </div>
    <Supplier 
    v-for="supplier in suppliers" 
    :key="supplier.id" 
    :name="supplier.name" 
    :status="supplier.status" 
    :checked-at="supplier.checkedAt" 
    :latitude="supplier.latitude"  
    class="cadre"/> 
    <!-- 5.2.1 - Dans un premier temps, appelez le composant Supplier dans le composant SuppliersList. Vous devriez donc avoir la même page aux urls /suppliers et /supplier -->
    <!-- A TESTER : au lieu de passer des clefs/valeurs -> lui passer le tableau d'objet -->
    <!-- 6.2 - Bouclez maintenant sur cette donnée pour appeler autant de fois le composant Supplier qu'il y a d'objets dans cette nouvelle data de SuppliersList. Remarquez que nous avons ajouté une clef id à nos objets, pourquoi ? Afin d'identifier chaque élément de manière unique -->
</template>

<script>
import Supplier from './Supplier.vue';
import axios from 'axios';

export default {
  name: 'SuppliersList',
  components: {Supplier},

  data(){
        return {
            suppliers: [],
            loading: false,
            error: null,
        }
    },

    mounted(){
        this.loading = true,
        axios.get('https://api-suppliers.herokuapp.com/api/suppliers')
        .then(response => {
            this.suppliers = response.data;
        })
        .catch(error => {
            console.log(error);
            this.error = error;
        })
        .finally( () => {
            this.loading = false;
        })
    }
}

</script>