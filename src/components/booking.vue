<script setup>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';


</script>

<template>
  <body>
  <div>
   
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
</body>
</template>

<style scoped>
body {
background-image: url('/src/assets/bg.png');
position: relative;
width: 1920px;
height: 1080px;
left: 0px;
top: 0px;
}
</style>