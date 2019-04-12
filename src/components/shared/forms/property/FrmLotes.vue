<template>
  <v-layout wrap>
    <v-card
    color="blue-grey "
    dark
  >
    <v-img
      height="200"
      src="https://http2.mlstatic.com/venta-lotes-en-giron-proyecto-villa-horizonte-D_NQ_NP_954285-MCO27723928407_072018-F.jpg"
    >
      <v-layout wrap>
        <v-flex xs12>
          <v-progress-linear
            :active="isUpdating"
            class="ma-0"
            color="green lighten-3"
            height="4"
            indeterminate
          ></v-progress-linear>
        </v-flex>
        <v-flex
          text-xs-right
          xs12
        >
          <v-menu
            bottom
            left
            transition="slide-y-transition"
          >
            <template v-slot:activator="{ on }">
              <v-btn
                icon
                v-on="on"
              >
                <v-icon>more_vert</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-tile @click="isUpdating = true">
                <v-list-tile-action>
                  <v-icon>mdi-settings</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Update</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-flex>
        <v-layout
          align-start
          column
          justify-end
          pa-3
        >
          <h3 class="headline">{{ slogan }}</h3>
          <span class="grey--text text--lighten-1">Slogan</span>
        </v-layout>
      </v-layout>
    </v-img>
    <v-form>
      <v-container>
        <v-layout wrap>
          <v-flex md1>
            <v-text-field
              v-model="area[0]"
              class="mt-1"
              type="number"
              label="Area Min"
            ></v-text-field>
          </v-flex>
          <v-flex md4>
            <v-range-slider
              v-model="area"
              :max="600"
              :min="50"
              :step="10"
            ></v-range-slider>
          </v-flex>
          <v-flex md1>
            <v-text-field
              v-model="area[1]"
              class="mt-1"
              type="number"
              label="Area Max"
            ></v-text-field>
          </v-flex>

          <v-flex md1>
            <v-text-field
              v-model="price[0]"
              class="mt-1"
              type="number"
              label="Costo Min"
            ></v-text-field>
          </v-flex>
          <v-flex md4>
            <v-range-slider
              v-model="price"
              :max="10000000"
              :min="500000"
              :step="10"
            ></v-range-slider>
          </v-flex>
          <v-flex md1>
            <v-text-field
              v-model="price[1]"
              class="mt-1"
              type="number"
              label="Costo Max"
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
    <v-divider></v-divider>
    <v-card-actions>
      <v-switch
        v-model="autoUpdate"
        :disabled="isUpdating"
        class="mt-0"
        color="green lighten-2"
        hide-details
        label="Auto Update"
      ></v-switch>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="autoUpdate"
        :loading="isUpdating"
        color="blue-grey darken-3"
        depressed
        @click="isUpdating = true"
      >
        <v-icon left>mdi-update</v-icon>
        Buscar
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-layout>
</template>
<script>
  export default {
    data () {
      return {
        price: [600000, 4000000],
        area: [70,400],
        autoUpdate: true,
        isUpdating: false,
        slogan: 'El lote que buscas con la mejor ubicación',
        title: 'Inversiones & proyectos'
      }
    },

    watch: {
      isUpdating (val) {
        if (val) {
          setTimeout(() => (this.isUpdating = false), 3000)
        }
      }
    },

    methods: {
      
    }
  }
</script>
<style lang="scss" scoped>
.headline{
}
</style>
