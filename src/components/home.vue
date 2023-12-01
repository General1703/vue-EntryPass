<script setup>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

</script>

<template>
  <body>
  <div>
    
    <h1>
       Dashboard
    </h1>

    <router-link to="/booking"><Button label="Book Appointments" /></router-link>
    <router-link to="/viewapps"><Button label="View Appointments" /></router-link>
    

    
  </div>
</body>
</template>

<style scoped>
body {
background-image: url('/src/assets/bg.png');
position: absolute;
width: 1920px;
height: 1080px;
left: 0px;
top: 0px;
}
</style>