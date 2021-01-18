<template>
  <v-app>
    <v-app-bar app color="lightgreen" dark>
      <!-- route outlet -->
      <!-- component matched by the route will render here -->
      <router-link to="/">
        <div class="d-flex align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://i.pinimg.com/originals/e9/5a/ca/e95aca64384ef4a99fc1818d0a92947c.png"
            transition="scale-transition"
            width="80"
          />

          <v-app-bar-title>ReservationApp</v-app-bar-title>
        </div>
      </router-link>
      <router-link to="/Users">
        <h1 class="display-2 font-weight-bold mb-3">Users</h1>
      </router-link>
      <router-link to="/Flights">
        <h1 class="display-2 font-weight-bold mb-3">Flights</h1>
      </router-link>
      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    //HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
