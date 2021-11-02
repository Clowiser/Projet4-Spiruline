<template>
<div>
    <h1 class='titreSuppliers'>Cartes des fournisseurs</h1>
</div>
<div style="height: 600px;">
    <div class="info" style="height: 15%">
      <p>Latitude/Longitude: {{center}}</p>
      <p>Zoom: {{zoom}}</p>
      <!-- <p>Bounds: {{bounds}}</p> -->
    </div>

    <l-map
      style="height: 100%; width: 100%"
      :zoom="zoom"
      :center="center"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @update:bounds="boundsUpdated"
    >
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    </l-map>

    
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css" 
// c'est grâce à cet import qu'il évite de partir dans tous les sens
import {LMap, LTileLayer} from "@vue-leaflet/vue-leaflet";

export default {
  name: 'SuppliersMap',
  components:{
    LMap, 
    LTileLayer, 
  },
  
   data() {
   return {
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 3,
      center: [47.413220, -1.219482],
      bounds: null
    };
  },

  methods: {
    zoomUpdated (zoom) {
      this.zoom = zoom;
    },
    centerUpdated (center) {
      this.center = center;
    },
    boundsUpdated (bounds) {
      this.bounds = bounds;
    }
  }
}
</script>