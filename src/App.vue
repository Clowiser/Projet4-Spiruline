<template>
  <img
    alt="Vue logo"
    src="./assets/spiruline.png"
  />
  <HelloWorld msg="La Spiruline" />
  <div> 
    <!-- BOUTONS -->
    <input type="button" v-on:click="onSuppliersListClick" value="Liste des fournisseurs"/>
    <input type="button" @click="onMapClick" value="Carte des fournisseurs"/>
  </div>
</template>


<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  components: {
    HelloWorld,
  },

   methods: { // on déclare nos méthodes dans un methods
    onSuppliersListClick(){
      alert('Message sur la liste');
    },

    onMapClick(){
      alert('Message sur la carte');
    },
}
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>