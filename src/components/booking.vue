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
    <img src="src/assets/LogoUIC.png" alt="uicLogo">
    <p>First Name:</p>
    <InputText v-model="value1" type="text" size="small" placeholder="Firstname" />
    <p>Last Name:</p>
    <InputText v-model="value1" type="text" size="small" placeholder="Lastname" />
    <p>Purpose of Visit:</p>
    <InputText v-model="value1" type="text" size="small" placeholder="Purpose" />
    <p>Date:</p>
    <InputText v-model="value1" type="text" size="small" placeholder="mm/yy/dd" />
    <p>Time:</p>
    <InputText v-model="value1" type="text" size="small" placeholder="12:00" />
    <Button label="Submit" />
  

    
  </div>
</template>

<style scoped></style>