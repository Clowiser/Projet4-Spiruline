<template>
  <div class='logoTitre'>
    <img
    alt="spiruline logo"
    src="./assets/spiruline.png"
    />
    <Home class='texte' msg="La Spiruline" />
  </div>
  <div>
    <!-- BOUTONS -->
    <!-- <input type="button" v-on:click="onSuppliersListClick" value="Liste des fournisseurs"/>
    <input type="button" @click="onMapClick" value="Carte des fournisseurs"/> -->
  </div>
  <!-- ROUTER -->
  <div class='router'>
    <router-link to='/suppliers'>Liste des Fournisseurs</router-link>
    <router-link to='/map'>Carte des Fournisseurs</router-link>
    <!-- 4.3.2 - <router-link to="" ></router-link> permet de passer d'une page à l'autre. -->
    <!-- <br>
    <router-link to='/supplier'>Supplier</router-link> -->
  </div>
  <!-- 5.1.1 - Créez dans un premier temps une nouvelle route '/supplier' qui va représenter un nouveau composant à créer, Supplier.vue. -->
  <router-view />
  <!-- 4.3.1 - <router-view></router-view> affiche le contenu de la route correspondant au composant spécifié dans la déclaration. -->
</template>


<script>
import Home from "./components/Home.vue";

export default {
  components: {
    Home,
  },

   methods: { // on déclare nos méthodes dans un methods (merci captain obvious!)
    onSuppliersListClick(){
      alert('Message sur la liste');
    },

    onMapClick(){
      alert('Message sur la carte');
    },
}
};
// 2.1 - Ajoutez dans votre composant App deux méthodes : onSuppliersListClick et onMapClick qui devront faire des alertes pour marquer le fait qu'un utilisateur a cliqué dessus => on fait deux boutons ou on appelle les méthodes correspondantes lors d'un clic
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 1%; 
  text-align: center;
}

.cadre{
  border: solid #214f34 1px;
  margin: auto;
  width: 60%;;
  margin-top: 1%;
}

.logoTitre{
   display: flex;
   width: 80%;
   margin: auto;
}

.texte{
  margin-top: 10%;
  color: #214f34
}

.router{
  display: flex;
  justify-content: space-around;
}

.titreSuppliers{
   color : #214f34
}
</style>