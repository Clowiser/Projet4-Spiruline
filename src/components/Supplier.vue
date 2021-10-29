<template>
    <div >
        <h1>Fournisseur: {{name}}</h1>
        <div v-bind:class="{'red':!status, 'green':status}">
            <!-- quand !status = false grâce au ! et sans ! = true -->
            <h3>Stock ? {{status}}</h3>
        </div>
        <!-- <h5>Date de dernier relevé des stocks: {{checkedAt.toLocaleString()}}</h5>  -->
        <h5>Date de dernier relevé des stocks: {{formatage}}</h5> 
    </div>
</template>


<script>
import { format } from 'timeago.js';
// 5.1.2 - Ce composant aura comme data l'objet javascript suivant :
export default {
    name: 'Supplier',
    props: ['name', 'status', 'checkedAt'],
    //   data(){
    //     return {
    //         name: 'Mon fournisseur',
    //         status: true, // est ce qu'il y a du stock
    //         checkedAt: new Date() // date de la dernière mise à jour du stock
    //     }
    // }
    // 5.2.2 - Ajoutez le fait que le composant Supplier a trois props qui s'appellent name, status et checkedAt, supprimez les datas du composant Supplier, mais ajoutez les dans le composant SuppliersList.

      computed: { // date affiche 'Just now'
      formatage(){
        return format(this.date);
      }
    }
}


</script>

<style scoped>

.red{
    color: red;
}

.green{
    color: green;
}
</style>
