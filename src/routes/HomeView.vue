<template>
  <Navbar fixed="true" />
  <v-col class="mt-15">
    <v-row>
      <v-row v-for="(item, index) in 15" :key="index">
        <v-card max-width="344" min-width="250" class="mb-5 mt-5">
          <v-col>
            <v-img
              src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            ></v-img>
          </v-col>
          <v-card-title> NFT Card </v-card-title>
          <div class="text-caption">Public</div>
          <v-card-subtitle
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            adipisci modi voluptas perspiciatis, nulla exercitationem, veritatis
            obcaecati incidunt quibusdam consectetur unde recusandae suscipit ab
            voluptatem, totam voluptatum rerum voluptate
            fugiat?</v-card-subtitle
          >
          <div class="text-caption">45645645</div>
        </v-card>
      </v-row>
    </v-row>
  </v-col>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "../components/Navbar.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    Navbar,
  },
  data() {
    return {};
  },
});
</script>
