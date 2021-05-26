<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <template>
        <v-card
          height="400"
          width="256"
          class="mx-auto"
        >        
          <v-list
              dense
              nav
            >
              <v-list-item
                v-for="item in items"
                :key="item.title"
                :to="item.route"
                link
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
        </v-card>
      </template>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

  export default {
    data () {
      return {
        items: [
          { title: 'Home', icon: 'mdi-view-dashboard',route: '/' },
          { title: 'Patients', icon: 'mdi-image', route: '/patients' },
          { title: 'Storage', icon: 'mdi-help-box', route: '/storage' },
        ],
        right: null,
        drawer: null
      }
    },
  }
</script>
