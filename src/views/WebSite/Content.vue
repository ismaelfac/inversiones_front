<template>
    <v-flex class="content">
        <v-flex class="slider-home" v-if="isSlider">
            <slider></slider>
        </v-flex>
        <v-layout row wrap>
            <v-flex xs12 v-if="isSearchProperty">
                <v-card color="white">
                    <search-property></search-property>
                </v-card>
            </v-flex>
            <v-container>
                <v-layout align-center justify-center row fill-height>
                    <v-flex xs6>
                        <div class="section-title mb-30">
                            <h3>INVERSIONES &</h3>
                            <h2>PROYECTOS</h2>
                        </div>
                        <div class="about-sheltek-info">
                            <p></p>
                        </div>
                    </v-flex>
                    <v-flex xs6>
                        <div class="about-image">
                            <a href="/"><img src="https://ar.habcdn.com/photos/project/medium/proyecto-de-oficinas-locales-comerciales_25737.jpg" alt=""></a>
                        </div>
                    </v-flex>
                </v-layout>
            </v-container>
            <v-flex xs6 offset-xs1>
                <properties-home></properties-home>
            </v-flex>
            <v-flex xs4>
                <classifield-home></classifield-home>
            </v-flex>
            <v-flex xs10 offset-xs1>
                
                
            </v-flex>
        </v-layout>  
    </v-flex>
</template>
<script>
import Slider from '../../components/shared/slider/Slider'
import SearchProperty from '../../components/shared/forms/property/FrmSearchProperty'
import PropertiesHome from '../../components/shared/properties/PropertiesHome'
import ClassifieldHome from '../../components/shared/classifields/ClassifieldsHome'
export default {
    name: 'Content',
    components: {
        Slider,
        PropertiesHome,
        ClassifieldHome,
        SearchProperty
    },
    data: () => ({
        isSlider: false,
        isSearchProperty: true,
        lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    })
}
</script>
<style lang="scss" scoped>

</style>

