<script setup>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

</script>

<template>
  <div>
    
    <h1>
        <router-link to="/">back</router-link>
    </h1>

    <p>Register</p>
    <p>Enter Firstname:</p>
    <InputText v-model="value1" type="text" size="small" placeholder="First Name" />
    <p>Enter Lastname:</p>
    <InputText v-model="value1" type="text" size="small" placeholder="Last Name" />
    <p>Enter Password:</p>
    <InputText v-model="value1" type="text" size="small" placeholder="Password" />
    <Button label="Submit" />
    

    
  </div>
</template>

<style scoped>
</style>