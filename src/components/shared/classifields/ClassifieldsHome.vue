<template>
  <div
    id="e3"
    style="max-width: 350px; margin: auto;"
    class="grey lighten-2"
  >
    <v-toolbar color="primary" dark>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Clasificados</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon><router-link to="/about" style="color:white;">
        <v-icon large color="write">chat</v-icon></router-link>
      </v-btn>
    </v-toolbar>

    <v-card>
        <v-layout row wrap>
            <list-classifield></list-classifield>        
        </v-layout>
    </v-card>
  </div>
</template>
<script>
import ListClassifield from "./ListClassifield";
  export default {
    name: 'ClassifieldsHome',
    components: {
      ListClassifield
    }
  }
</script>
