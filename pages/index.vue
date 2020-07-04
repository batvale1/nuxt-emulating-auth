<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          Welcome to your profile page
        </v-card-title>
        <v-card-text>
          <p class="body-1"><span class="body-2">Your login: </span>{{ name }}</p>
          <p class="body-1"><span class="body-2">Your email: </span>{{ email }}</p>
          <v-img :src="avatar" max-height="300" contain></v-img>
          <hr class="my-3">
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            @click="logoutUser"
          >
            Logout
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  computed: {
    name() {
      return this.$store.getters['auth/getName'];
    },
    email() {
      return this.$store.getters['auth/getEmail'];
    },
    avatar() {
      return this.$store.getters['auth/getAvatar'];
    }
  },
  components: {
    Logo,
    VuetifyLogo
  },
  middleware: ["auth"],
  methods: {
    logoutUser() {
      this.$store.dispatch('auth/logoutUser');
      this.$router.push('/auth');
    }
  }
}
</script>
