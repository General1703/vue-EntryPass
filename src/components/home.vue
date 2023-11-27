<script setup>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

</script>

<template>
  <div>
    
    <h1>
       Dashboard
    </h1>

    <router-link to="/booking"><Button label="Book Appointments" /></router-link>
    <router-link to="/viewapps"><Button label="View Appointments" /></router-link>
    

    
  </div>
</template>

<style scoped>
</style>