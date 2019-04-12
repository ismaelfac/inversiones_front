<template>
  <v-container>
    <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-date-picker v-model="dateNow" full-width locale="es-co" :min="min" :max="max" @change="getDolar(dateNow)"></v-date-picker>
        </v-card>
        <v-card dark color="error" >
          <v-card-text class="display-1 text-xs-center">{{valor}}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout> 
    </v-parallax>
  </v-container>
</template>

<script>
import axios from 'axios'
  export default {
    data () {
      return {
        dateNow: new Date().toISOString().substr(0, 10),
        min: '1984',
        max: new Date().toISOString().substr(0, 10),
        valor: '0'
      }
    },
    methods: {
      async getDolar(day) {
        let arrayDay = day.split(['-'])
        let ddmmyy = arrayDay['2']+'-'+arrayDay['1']+'-'+arrayDay['0']
        try {
          let datos = await axios.get(`https://mindicador.cl/api/dolar/${ddmmyy}`)
          if(datos.data.serie.length > 0){
            this.valor = await datos.data.serie[0].valor
          }else{
            this.valor = 'Sin Resultados'
          }
          
        } catch (error) {
          console.log(error)
        }
      }
    },
    created() {
      this.getDolar(this.dateNow)
    }
  }
</script>
