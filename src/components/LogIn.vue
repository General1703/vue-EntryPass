<script setup>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

</script>

<template>
 <body>
 <div>
    <p>Username:</p>
    <InputText v-model="value1" type="text" size="small" placeholder="UserName" />
    <p calss="password">Password:</p>
    <InputText v-model="value1" type="text" size="small" placeholder="Password" />
    <router-link to="/home"><Button label="Login"/></router-link>
    <p>
      <router-link to="/registration" class="registerbttn">Register here</router-link>
    </p>

    
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
.registerbttn{
  border-radius: 5px;
}
.password{
  position: absolute;
width: 176px;
height: 46px;
left: 662px;
top: 566px;

font-family: 'Mulish';
font-style: normal;
font-weight: 400;
font-size: 35px;
line-height: 44px;

color: #000000;

mix-blend-mode: color-burn;
}

</style>