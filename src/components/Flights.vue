<template>
  <v-container>
    <div id="show-flights">
      <h1 class="display-2 font-weight-bold mb-3">Flights</h1>
      <v-data-iterator
        :items="flights"
        :items-per-page.sync="itemsPerPage"
        :search="search"
      >
        <template v-slot:header>
          <v-toolbar class="mb-2" color="lightgreen darken-5" dark flat>
            <v-toolbar-title>Flights</v-toolbar-title>
            <v-text-field
              class="pa-6"
              v-model="search"
              clearable
              flat
              solo-inverted
              hide-details
              prepend-inner-icon="mdi-magnify"
              label="Search"
            ></v-text-field>
          </v-toolbar>
        </template>

        <template v-slot:default="props">
          <v-row>
            <v-col
              v-for="item in props.items"
              :key="item.name"
              cols="12"
              sm="6"
              md="4"
              lg="3"
            >
              <v-card>
                <v-card-title class="subheading font-weight-bold">
                  {{ item.airline }}
                </v-card-title>

                <v-divider></v-divider>

                <v-list dense>
                  <v-list-item>
                    <v-list-item-content>Id:</v-list-item-content>
                    <v-list-item-content class="align-end">
                      {{ item.flightId }}
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-content>Airport name:</v-list-item-content>
                    <v-list-item-content class="align-end">
                      {{ item.airportName }}
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-content
                      >Free badgage weight:
                    </v-list-item-content>
                    <v-list-item-content class="align-end">
                      {{ item.maxFreeWeight }}
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-content>Departure Time:</v-list-item-content>
                    <v-list-item-content class="align-end">
                      {{ item.departureTime }}
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-content>Arrival Date:</v-list-item-content>
                    <v-list-item-content class="align-end">
                      {{ item.arrivalTime }}
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </template>
      </v-data-iterator>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Flights",

  data: () => ({
    search: "",
    filter: {},
    itemsPerPage: 4,
    flights: [],
  }),
  computed: {},
  methods: {},
  created() {
    this.$http
      .get("https://localhost:5001/Flights")
      .then((result) => {
        this.flights = result.data;
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
