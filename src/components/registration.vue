<script setup>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

</script>

<template>
  <body>
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
    <router-link to="/home"><Button label="Submit" /></router-link>
    

    
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