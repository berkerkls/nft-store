<template>
  <v-col>
    <v-row>
      <v-card class="login-page" fluid elevation="0">
        <v-col cols="6" sm="5" md="4" lg="3" xl="2" class="delete-pm">
          <v-card-title class="text-white">Login</v-card-title>
          <v-form>
            <v-text-field
              label="Username"
              bg-color="white"
              required
              loading
              color="info"
            ></v-text-field>

            <v-text-field
              label="Password"
              bg-color="white"
              required
              loading
              color="info"
            ></v-text-field>

            <v-col>
              <v-list-item
                link
                :to="{ name: 'HomeView' }"
                color="white"
                class="text-caption"
                >Continue without sign in</v-list-item
              >
            </v-col>
            <v-row justify="center">
              <v-dialog v-model="dialog" persistent max-width="800">
                <template v-slot:activator="{ props }">
                  <v-list-item v-bind="props" color="white" class="text-caption"
                    >Or create a new account</v-list-item
                  >
                </template>
                <v-card color="#333">
                  <v-card-title>
                    <span class="text-h5 text-white">Create an account</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-col>
                        <v-row>
                          <v-col>
                            <v-text-field
                              label="First name*"
                              required
                              bg-color="white"
                            ></v-text-field>
                          </v-col>
                          <v-col>
                            <v-text-field
                              label="Last name*"
                              persistent-hint
                              required
                              bg-color="white"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col>
                            <v-text-field
                              label="Password*"
                              type="password"
                              required
                              bg-color="white"
                            ></v-text-field>
                          </v-col>
                          <v-col>
                            <v-text-field
                              label="Password again*"
                              type="password"
                              required
                              bg-color="white"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col>
                            <v-text-field
                              label="Email*"
                              required
                              bg-color="white"
                            ></v-text-field>
                          </v-col>
                          <v-col>
                            <v-select
                              :items="['0-17', '18-29', '30-54', '54+']"
                              label="Age*"
                              required
                              bg-color="white"
                            ></v-select>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-container>
                    <small class="text-white">*indicates required field</small>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      bg-color="blue-darken-1"
                      color="blue-darken-1"
                      variant="text"
                      @click="dialog = false"
                    >
                      Close
                    </v-btn>
                    <v-btn
                      color="blue-darken-1"
                      variant="text"
                      @click="dialog = false"
                    >
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
            <v-col>
              <v-btn color="info" height="50" width="300">Login</v-btn>
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
  name: "LoginPage",
  data() {
    return {
      dialog: false,
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
</style>
