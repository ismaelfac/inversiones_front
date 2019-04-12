<template>
  <v-flex>
      <v-toolbar class="menu_home" color="write">
        <v-toolbar-side-icon></v-toolbar-side-icon>

        <v-toolbar-title class="white--text"><img src="https://devitems.com/html/sheltek-preview/sheltek/images/logo/logo.png" alt=""></v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>apps</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>refresh</v-icon>
        </v-btn>
        <router-link to="/login"><h4>Inicio de Sessión |</h4></router-link>
        <router-link to="/register"><h4> Registrarme</h4></router-link>
        <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x>        
          <template  v-slot:activator="{ on }">
            <v-btn color="indigo" dark v-on="on" v-if="user">
              {{ fullname }}
            </v-btn>
            
          </template>
          <v-card>
            <v-list>
              <v-list-tile avatar>
                <v-list-tile-avatar>
                  <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title>Ismael E. Lastre Alvarez</v-list-tile-title>
                  <v-list-tile-sub-title>Administrador</v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-action>
                  <v-btn
                    :class="fav ? 'red--text' : ''"
                    icon
                    @click="fav = !fav"
                  >
                    <v-icon>favorite</v-icon>
                  </v-btn>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>

            <v-divider></v-divider>

            <v-list>
              <v-list-tile>
                <v-list-tile-action>
                  <v-switch v-model="roles" color="purple"></v-switch>
                </v-list-tile-action>
                <v-list-tile-title>Roles</v-list-tile-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-action>
                  <v-switch v-model="message" color="purple"></v-switch>
                </v-list-tile-action>
                <v-list-tile-title>Habilitar Mensajes</v-list-tile-title>
              </v-list-tile>

              <v-list-tile>
                <v-list-tile-action>
                  <v-switch v-model="hints" color="purple"></v-switch>
                </v-list-tile-action>
                <v-list-tile-title>Habilitar Reportes</v-list-tile-title>
              </v-list-tile>
            </v-list>

            <v-card-actions>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-toolbar>
      <v-toolbar dark color="primary">
        <v-layout
        justify-center
        row
        wrap
      >
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          flat
          round
          :to="link.link"
        >
          {{ link.title }}
        </v-btn>
        
      </v-layout>
      </v-toolbar>
      <v-layout>
        <router-view></router-view>       
      </v-layout>
      <v-footer height="auto" color="primary">
        <v-layout
          justify-center
          row
          wrap
        >
          <v-btn
            v-for="link in links"
            :key="link.id"
            color="white"
            flat
            round
            :to="link.link"
          >
            {{ link.title }}
          </v-btn>
          <v-flex
            primary
            lighten-2
            py-3
            text-xs-center
            white--text
            xs12
          >
            &copy;2018 — <strong>xyz</strong>
          </v-flex>
        </v-layout>
      </v-footer>
  </v-flex>
</template>

<script>
  export default {
    data: () => ({
      fav: true,
      user: false,
      fullname: null,
      menu: false,
      message: false,
      roles: false,
      hints: true,
      links: [
        {'id': 1, 'title': 'Inicio', 'link':'/'},
        {'id': 2, 'title': 'Quienes Somos', 'link':'about'},
        {'id': 3, 'title': 'Marca', 'link':'brands'},
        {'id': 4, 'title': 'Blog', 'link':'blog'},
        {'id': 5, 'title': 'Inmobiliaria', 'link':'properties'},
        {'id': 6, 'title': 'Contactenos', 'link':'contact'}
      ]
    })
  }
</script>
