<template>
<div>
    <h1 class='titreSuppliers'>Cartes des fournisseurs</h1>
</div>
  <div style="height: 600px;">
      <div class="info" style="height: 10%">
        <p>Latitude/Longitude: {{center}}</p>
        <p>Zoom: {{zoom}}</p>
  </div>
  <hr>
  <l-map
      style="height: 100%; width: 100%"
      :zoom="zoom"
      :center="center"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
    > 
    <!-- Pour la base de la carte en général  -->
    <l-tile-layer 
    :url="url" 
    :attribution="attribution"></l-tile-layer> 
    <!-- charge chaque 'carré' de la map -->

    <!-- <l-marker :lat-lng="markerLatLng" ></l-marker> Pour afficher les marqueurs -->
    <l-marker 
    v-for="marker in markers"
    :key="marker.id"
    :lat-lng="marker.position">
    </l-marker>
  </l-map>
    <!-- Réactivité : l’une des fonctionnalités les plus emblématiques de Vue est le système de réactivité non obstrusif.
    Les modèles sont simplement des objets JavaScript. Lorsque vous les modifiez, la vue se met à jour -->
  
  <!-- <Marker 
  v-for="marker in markers" 
  :key="marker.id"
  :latitude="marker.latitude"
  :longitude="marker.longitude"
  class="test"/> -->
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css" 
// c'est grâce à cet import qu'il évite de partir dans tous les sens
// import {latLng} from "leaflet";
import {LMap, LTileLayer, LMarker} from "@vue-leaflet/vue-leaflet";

export default {
  name: 'SuppliersMap',
  components:{
    LMap,
    LTileLayer,
    LMarker,
},  
  
   data() {
   return {
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png", // Ajout du Layer d'OpenStreetMap
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 3,
      center: [47.413220, -1.219482],
      // markerLatLng: [47.313220, -1.319482], // ex : marqueur sur France
      markers: [
          {
            id: 1,
            position: { lat: 51.505, lng: -0.09 }
          },
          {
            id: 2,
            position: { lat: 49, lng: 9.6 }
          }
        ]
    };
  },

  methods: {
    zoomUpdated (zoom) {
      this.zoom = zoom;
    },
    centerUpdated (center) {
      this.center = center;
    },
  }
}
</script>