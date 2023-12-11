<script setup>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

</script>

<template>
  <body>
  <div>
    
    <h1>
       Dashboard
    </h1>
    <form class="logos">
    <img src="/src/assets/uic1.png" class="uic1">
    <img src="/src/assets/myuic.png" class="myuic">
    </form>

    <div class="Rectangle"
    style="width: 50%; height: 70%; 
    background: linear-gradient(0deg, #EAC6EB 0%, #EAC6EB 100%), 
    linear-gradient(0deg, rgba(244.37, 162.92, 162.92, 0.20) 0%, 
    rgba(244.37, 162.92, 162.92, 0.20) 100%);
     border: 1px #281313 solid; ">

    <div class="REC"
     style="width: 90%; height: 70%; 
    mix-blend-mode: hard-light; 
    background: rgba(217, 217, 217, 0.50); 
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
    border: 1px #221B1B solid">
   <p class="BookApp">
    <router-link to="/booking"><Button label="Book Appointments" /></router-link>
   </p>
   <p class="ViewApp">
    <router-link to="/viewapps"><Button label="View Appointments" /></router-link>
  </p>
    </div>
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

.Rectangle {
box-sizing: border-box;
position: center;
width: 888px;
height: 644px;
padding: 300px;
margin: auto;
background: linear-gradient(0deg, rgba(244, 163, 163, 0.2), rgba(244, 163, 163, 0.2)), #EAC6EB;
mix-blend-mode: normal;
border: 1px solid #281313;
backdrop-filter: blur(2px);
} 

.REC {
    position: absolute;
    width: 597px;
    height: 522px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: rgba(217, 217, 217, 0.5);
    mix-blend-mode: hard-light;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);                           
}

.BookApp {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding-top: 100px;
  width: 608px; 
  height: 123px; 
}

.ViewApp {
  text-align: center;
  padding-top: 50px;
}

button {
    display: block;
    position: relative;
    margin: auto;
    background-color: rgba(238, 139, 204, 100%);
    border: 1px solid black; 
    border-radius: 20px;
    height: 58px;
    width: 221px;
    color: white; 
}

</style>