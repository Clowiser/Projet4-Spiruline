<template>
    <div >
        <p>{{id}}</p>
        <p>{{latitude}}</p> 
        <p>{{longitude}}</p>
    </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {
   name: 'Marker',
    props: ['markers', 'id', 'latitude', 'longitude']   
    }
</script>