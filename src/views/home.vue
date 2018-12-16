<template>
  <v-container>
    <v-layout wrap>
      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">CDL - Location Services</h1>
        <p
          class="subheading font-weight-regular"
        >The following will display brand details per location.</p>
      </v-flex>

      <v-flex xs12 mb-5>
        <v-card>
          <v-card-title class="headline font-weight-regular blue-grey white--text">Select a Group</v-card-title>
          <v-card-text>
            <v-autocomplete
              v-model="groupInput"
              :items="groups"
              persistent-hint
              item-text="name"
              item-value="id"
              @change="getLocations"
            ></v-autocomplete>

            <v-flex xs12 v-if="loadingLocations">
              <v-progress-linear :indeterminate="true"></v-progress-linear>
            </v-flex>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 mb-5 v-if="locations.length > 0" transition="slide-x-transition">
        <v-card>
          <v-card-title class="headline font-weight-regular blue-grey white--text">
            <span>Select a Location</span>
            <v-spacer/>
            <v-text-field label="Filter" clearable dark color="white" v-model="filterInput"></v-text-field>
          </v-card-title>
          <v-container fluid grid-list-xl>
            <v-layout row wrap>
              <v-flex v-for="location in filteredLocations" :key="location.id" xs4>
                <v-hover>
                  <v-card
                    @click="goToLocation(location.id)"
                    slot-scope="{ hover }"
                    :class="`elevation-${hover ? 12 : 2}`"
                  >
                    <v-card-title
                      class="subheading font-weight-regular blue-grey white--text"
                    >{{location.name}}</v-card-title>
                    <v-card-title>
                      <div v-if="location.address">
                        <div>
                          {{location.address.address}}
                          <br>
                          {{location.address.city}}
                          {{location.address.state}}
                          <br>
                          {{location.address.country}}
                          {{location.address.zip}}
                        </div>
                      </div>
                      <div v-else>No address specified</div>
                    </v-card-title>
                  </v-card>
                </v-hover>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
    <v-dialog v-model="dialog">
      <location :locationInfo="activeDialogLocation"/>
    </v-dialog>
  </v-container>
</template>

<script>
import axios from 'axios'
import location from './location'
export default {
  components: {
    location
  },
  data() {
    return {
      groupInput: "",
      groups: [],
      locationInput: "",
      locations: [],
      dialog: false,
      activeDialogLocation: {},
      filterInput: "",
      loadingLocations: false
    }
  },
  computed: {
    filteredLocations() {
      if (!this.filterInput) {
        return this.locations
      }
      return this.locations.filter(e => JSON.stringify(e).toLowerCase().includes(this.filterInput.toLowerCase()))
    }
  },
  methods: {
    async getGroups() {
      let { data } = await axios.get('https://api.compassdigital.org/staging/location/multigroup')
      this.groups = data.multigroups
    },
    async getLocations() {
      this.loadingLocations = true
      let { data } = await axios.get('https://api.compassdigital.org/staging/location/group/' + this.groupInput)
      this.loadingLocations = false
      this.locations = data.locations
    },
    async goToLocation(id) {
      this.dialog=true
      this.activeDialogLocation = {}
      let { data } = await axios.get('https://api.compassdigital.org/staging/location/' + id)
      this.activeDialogLocation = data
    }
  },
  created() {
   this.getGroups() 
  }

}
</script>

<style>
</style>
