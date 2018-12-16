<template>
  <v-card>
    <v-card-title class="headline font-weight-regular blue-grey white--text">{{locationInfo.name}}</v-card-title>
    <div class="text-xs-center" v-if="!locationInfo.name">
      <v-progress-linear :indeterminate="true"></v-progress-linear>
    </div>
    <v-card-text>
      <v-layout wrap>
        <v-flex xs12 mb-10>
          <v-card v-if="locationInfo.address" transition="slide-x-transition">
            <v-card-title class="subheading font-weight-regular blue-grey white--text">Address</v-card-title>
            <v-card-text>
              <div>
                {{locationInfo.address.address}}
                <br>
                {{locationInfo.address.city}}
                {{locationInfo.address.state}}
                <br>
                {{locationInfo.address.country}}
                {{locationInfo.address.zip}}
              </div>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12>
          <v-card v-if="locationInfo.brands">
            <v-card-title class="subheading font-weight-regular blue-grey white--text">Brands</v-card-title>
            <v-container fluid grid-list-xl>
              <v-layout row wrap>
                <v-flex v-for="brand in locationInfo.brands" :key="brand.id" xs6 md4>
                  <v-card>
                    <v-img v-if="checkImage(brand)" :src="brand.style.logo" aspect-ratio="2.75"></v-img>
                    <v-img
                      v-else
                      src="http://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image.jpg"
                      aspect-ratio="2.75"
                    ></v-img>
                    <v-card-title primary-title>
                      <div>
                        <h3 class="headline mb-0">{{brand.name}}</h3>
                      </div>
                    </v-card-title>
                    <v-card-text>
                      <span>Delivery Supported
                        <v-icon v-if="brand.is.delivery_supported">check</v-icon>
                        <v-icon v-else>close</v-icon>
                      </span>
                      <br>
                      <span>Pickup Supported
                        <v-icon v-if="brand.is.pickup_supported">check</v-icon>
                        <v-icon v-else>close</v-icon>
                      </span>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props:[
    'locationInfo'
  ],
  methods: {
    checkImage(brand) {
      if (!brand.style.logo) {
        return false
      }

      // check if logo is a proper image
      return brand.style.logo.match(/^https?:\/\/(.*)/)
    }
  }
}
</script>

<style>
</style>
