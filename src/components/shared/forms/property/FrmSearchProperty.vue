<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 md3>
          <v-select
            v-model="selectDepartament"
            :items="ItemsDepartament"
            :rules="[v => !!v || 'Departamento es requerido']"
            label="Departamento"
            required
            ></v-select>
        </v-flex>
        <v-flex xs12 md3>
          <v-select
            v-model="selectCountry"
            :items="ItemsCountry"
            :rules="[v => !!v || 'Ciudad es Requerido']"
            label="Ciudad"
            required
            ></v-select>
        </v-flex>
        <v-flex xs12 md3>
          <v-select
            v-model="propertyType"
            :items="ItemsPropertyType"
            :rules="[v => !!v || 'Tipo de propiedad Requerido']"
            label="Tipo de Propiedad"
            required
            ></v-select>
        </v-flex>
        <v-flex xs12 md3>
            <v-btn small color="primary" :disabled="!valid" @click="validate">Buscar</v-btn>
            <v-btn small :color="color" :disabled="!valid" @click="criterion(propertyType)">Otros Criterios</v-btn>
        </v-flex>

        <template v-if="custom">
          <template v-if="propertyType === 'Oficinas'">
              <v-container>
                <frm-office></frm-office>
              </v-container>
          </template>
          <template v-if="propertyType === 'Lotes'">
              <v-container>
                <frm-lotes></frm-lotes>
              </v-container>
          </template>
          <template v-if="propertyType === 'Locales Comerciales'">
              <v-container>
                <frm-locales-comerciales></frm-locales-comerciales>
              </v-container>
          </template>
        </template>
      </v-layout>
    </v-container>
  </v-form>
</template>
<script>
import FrmOffice from './frmOffice';
import FrmLotes from "./FrmLotes";
import FrmLocalesComerciales from "./FrmLocalesComerciales";
  export default {
    name:'FrmSearchProperty',
    components: {
      FrmOffice,
      FrmLotes,
      FrmLocalesComerciales
    },
    data: () => ({
      valid: true,
      color: 'primary',
      price: [30, 440],
      custom: false,
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      max: 0,
      propertyType: null,
      ItemsDepartament: [
        'Atlantico'
      ],
      ItemsCountry: [
        'Barranquilla'
      ],
      ItemsPropertyType: [
        'Oficinas',
        'Lotes',
        'Locales Comerciales'
      ],
    }),
    computed: {
      rules () {
        const rules = []

        if (this.max) {
          const rule =
            v => (v || '').length <= this.max ||
              `A maximum of ${this.max} characters is allowed`

          rules.push(rule)
        }

        if (!this.allowSpaces) {
          const rule =
            v => (v || '').indexOf(' ') < 0 ||
              'No spaces are allowed'

          rules.push(rule)
        }

        return rules
      }
    },
    watch: {
      max: 'validateField',
      model: 'validateField'
    },
    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      criterion (propertyType) {
        //validar que los campos esten llenos
          this.custom = !this.custom;
          (this.custom ? this.color='success': this.color='primary');
          //this.formType(propertyType);

        
      },
      formType(propertyType){
        switch (propertyType) {
          case 'Oficinas':
            //Sentencias ejecutadas cuando el resultado de expresion coincide con valor1
            alert('form oficinas')
            break;
          case 'Lotes':
            //Sentencias ejecutadas cuando el resultado de expresion coincide con valor2
            alert('form Lotes')
            break;
          
          case 'Locales Comerciales':
            //Sentencias ejecutadas cuando el resultado de expresion coincide con valorN
            alert('form Locales Comerciales')
            break;
          default:
            //Sentencias_def ejecutadas cuando no ocurre una coincidencia con los anteriores casos
            alert('No recibo un tipo de propiedad')
            break;
        }
      }
    }
  }
</script>
<style lang="scss" scoped>

</style>
