<script setup>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

</script>

<template>
 <body>
 <div class="frame">
  <div class="flogos">
    <img src="/src/assets/uic1.png" class="uic1">
  <img src="/src/assets/myuic.png" class="myuic">
</div>
  
    <p class="username">Username:</p>
    <InputText v-model="value1" type="text" size="small" placeholder="UserName" class="user"/>
    <p class="password">Password:</p>
    <InputText v-model="value2" type="text" size="small" placeholder="Password" class="pass"/>
    <router-link to="/home" class="login"><Button label="Login"/></router-link>
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
.flogos{
  align-self: center;
}
.myuic{
  position: absolute;
width: 167px;
height: 85px;
left: 878px;
top: 239px;

}
.uic1{
  position: absolute;
width: 215px;
height: 215px;
left: 850px;
top: 16px;
}
.registerbttn{
  border-radius: 5px;
}
.frame{
  align-self: center;
width: 786px;
height: 786px;
left: 567px;
top: 173px;

background: rgba(217, 217, 217, 0.85);
mix-blend-mode: hard-light;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

}
.frame .username{

width: 218px;
height: 46px;
left: 662px;
top: 461px;

font-family: 'Mulish';
font-style: normal;
font-weight: 400;
font-size: 35px;
line-height: 44px;

color: #000000;

mix-blend-mode: color-burn;

}
.frame .password{
 
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
.user{

width: 358px;
height: 71px;
left: 878px;
top: 449px;

background: #FFFDFD;
border-radius: 20px;
}
.pass{

width: 358px;
height: 71px;
left: 878px;
top: 449px;

background: #FFFDFD;
border-radius: 20px;
}
.login{

width: 221px;
height: 58px;
left: 855px;
top: 859px;

font-family: 'Mulish';
font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 50px;
text-align: center;

color: #FFFFFF;
}

</style>