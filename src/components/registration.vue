<script setup>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

</script>

<template>
<body>
      
<div class="form">
      <div class="frame">
      <form class="logos">
  <img src="/src/assets/uic1.png" class="uic1">
  <img src="/src/assets/myuic.png" class="myuic">
</form>
    <p>Register</p>
    
    <InputText class="uFname" v-model="value1" type="text" size="small" placeholder="First Name" />
    <InputText class="uLname" v-model="value1" type="text" size="small" placeholder="Last Name" />
    <InputText class="uPass" v-model="value1" type="text" size="small" placeholder="Password" />
    <router-link to="/home"><Button label="Submit" /></router-link>
   <p>
     <router-link class="loginl" to="/LogIn">Already have an account?</router-link>
   </p>
</div>
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
.frame{
  width: 786px;
  height: 786px;
  padding: 1% 0 0;
  margin: auto;
}
.form{
  width: 1262px;
  height: 786px;
  padding: 2% 0 0;
  margin: auto;
  background-color:rgba(217, 217, 217, 85%);
}
.myuic{
position: relative;
margin: auto;
height:85px;
width:167px;
display: block;

}
.uic1{
position: relative;
margin:auto;
height:125px;
width:125px;
display: block;
padding-bottom: 8px;
}

button{
display: block;
position: relative;
margin:auto;
background-color: #EE8BCC;
border-radius: 20px;
height: 58px;
width: 221px;
}
.uFname{
  display: block;
  position: relative;
  margin-top: auto;
  margin-right: auto;
  margin-bottom: 20px;
  margin-left: auto;
  background: #FFFDFD;
border-radius: 20px;
height: 71px;
width: 371px;
}
.uLname{
  display: block;
  position: relative;
  margin-top: auto;
  margin-right: auto;
  margin-bottom: 20px;
  margin-left: auto;
  background: #FFFDFD;
border-radius: 20px;
height: 71px;
width: 371px;
}
.uPass{
  display: block;
  position: relative;
  margin-top: auto;
  margin-right: auto;
  margin-bottom: 20px;
  margin-left: auto;
  background: #FFFDFD;
border-radius: 20px;
height: 71px;
width: 371px;
}
p{
text-align: center;
}
::placeholder{
  text-align: center;
}

</style>