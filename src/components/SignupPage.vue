<template>
  <v-col>
    <v-row>
      <v-card class="login-page" fluid elevation="0">
        <v-col cols="6" sm="5" md="4" lg="3" xl="2" class="delete-pm">
          <v-form class="bg-color pa-10">
            <v-card-title class="text-white">Sing Up</v-card-title>
            <v-col>
              <v-text-field
                label="First name"
                bg-color="white"
                required
                loading
                color="info"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                label="Last name"
                bg-color="white"
                required
                loading
                color="info"
              ></v-text-field>
            </v-col>

            <v-col>
              <v-text-field
                label="Email"
                type="email"
                bg-color="white"
                required
                loading
                color="info"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                label="Password"
                bg-color="white"
                type="password"
                required
                loading
                color="info"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                label="Password again"
                bg-color="white"
                type="password"
                required
                loading
                color="info"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-btn color="info" height="50" width="300">Sign Up</v-btn>
            </v-col>
          </v-form>
        </v-col>
      </v-card>
    </v-row>
  </v-col>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SignupPage",
  data() {
    return {
      states: [
        "Alabama",
        "Alaska",
        "American Samoa",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "District of Columbia",
        "Federated States of Micronesia",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Marshall Islands",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Northern Mariana Islands",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Palau",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virgin Island",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming",
      ],
    };
  },
});
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
}

.delete-pm {
  padding: 0;
  margin: 0;
}

.bg-color {
  background-color: #555;
  width: 400px;
}
</style>
