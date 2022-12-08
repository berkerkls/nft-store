<template>
  <v-layout>
    <v-app-bar density="compact" elevate-on-scroll color="black" height="75">
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-app-bar-title class="ml-10"
          ><v-icon icon="mdi-fruit-pineapple"></v-icon>NFT.</v-app-bar-title
        >
      </template>

      <v-spacer></v-spacer>
      <v-btn
        class="mr-10"
        variant="flat"
        color="warning"
        :to="{ name: 'LoginPage' }"
        >Login</v-btn
      >
      <v-btn
        class="mr-5"
        variant="flat"
        color="warning"
        :to="{ name: 'SignupPage' }"
        >Sign Up</v-btn
      >
      <v-btn class="ml-10" icon="mdi-image-plus-outline"></v-btn>
    </v-app-bar>
  </v-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
  data() {
    return {};
  },
});
</script>
