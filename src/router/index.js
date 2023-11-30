import { createRouter, createWebHistory } from "vue-router";

import admin from "../components/admin.vue";
import booking from "../components/booking.vue";
import LogIn from "../components/LogIn.vue";
import guard from "../components/guard.vue";
import home from "../components/home.vue";
import viewapps from "../components/viewapps.vue";
import cashierOffice from "../components/cashierOffice.vue";
import registration from "../components/registration.vue";

const routes = [
{      path: "/",
      name: "LogIn",
      component: LogIn,
    },
    {
      path: "/admin",
      name: "Admin",
      component: admin,
    },
    {
      path: "/booking",
      name: "Booking",
      component: booking,
    },
    {
        path: "/guard",
        name: "Guard",
        component: guard,
      },
      {
        path: "/registration",
        name: "Registration",
        component: registration,
      },
      {
        path: "/home",
        name: "Home",
        component: home,
      },
      {
        path: "/viewapps",
        name: "View Appointments",
        component: viewapps,
      },
      {
        path: "/home",
        name: "Home",
        component:home,
      },
      {
        path: "/cashierOffice",
        name: "Cashier Office",
        component:cashierOffice,
      },
   
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  export default router;