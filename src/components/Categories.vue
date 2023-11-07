<script setup>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';


const categories = [
  {
    id: 1,
    name: "Allowance",
    description: "From Parents",
  },
  {
    id: 2,
    name: "Donation",
    description: "From Friends",
  }
];
</script>

<template>
  <div>
    <img src="vue-EntryPass/src/assets//LogoUIC.png" alt="uicLogo">
    <h1>Entry Pass (Welcome)</h1>
    <p>Log in</p>
    <InputText v-model="value1" type="text" size="small" placeholder="UserName" />
    <InputText v-model="value1" type="text" size="small" placeholder="Password" />
    <Button label="Submit" />
    <p>Register here</p>

    
  </div>
</template>

<style scoped>
</style>