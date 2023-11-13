<script setup>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';


</script>

<template>
  <div>
    <img src="vue-EntryPass/src/assets/LogoUIC.png" alt="uicLogo">
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