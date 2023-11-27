<script setup>
import LogIn from './components/LogIn.vue'

const items = [
        {
          label: "Login",
          icon: "pi pi-fw pi-home",
          to: "/",
        },
        {
          label: "registration",
          icon: "pi pi-fw pi-home",
          to: "/registration",
        },
        {
          label: "Guard",
          icon: "pi pi-fw pi-list",
          to: "/guard",
        },
        {
          label: "Admin",
          icon: "pi pi-fw pi-user",
          to: "/admin",
        },
        {
          label: "Booking",
          icon: "pi pi-fw pi-user",
          to: "/booking",
        },
        {
          label: "Home",
          icon: "pi pi-fw pi-user",
          to: "/home",
        },
      ];
</script>

<template>
  <div>
  <Menubar :model="items" />
  <router-view></router-view>
</div>
</template>

<style scoped></style>