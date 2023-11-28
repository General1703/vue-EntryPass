<script setup>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

</script>

<template>
  <div>
    
    <h1>Entry Pass</h1>
    <p>Log in ko</p>
    <InputText v-model="value1" type="text" size="small" placeholder="UserName" />
    <InputText v-model="value1" type="text" size="small" placeholder="Password" />
    <router-link to="/home"><Button label="Login" /></router-link>
    <p>
      <router-link to="/registration">Register here</router-link>
    </p>

    
  </div>
</template>

<style scoped>

</style>