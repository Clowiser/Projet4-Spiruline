<template>
    <div>
        <h1>Liste des fournisseurs</h1>
        <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur." </p>
    </div>
    <!-- <Supplier /> --> <!-- 5.2.1 - Dans un premier temps, appelez le composant Supplier dans le composant SuppliersList. Vous devriez donc avoir la même page aux urls /suppliers et /supplier -->
</template>

<script>
import Supplier from './Supplier.vue'

export default {
  name: 'SuppliersList',
  components: {Supplier},

  data(){
        return {
            name: 'Mon fournisseur',
            status: true, // est ce qu'il y a du stock
            checkedAt: new Date() // date de la dernière mise à jour du stock
        }
    },

}
</script>