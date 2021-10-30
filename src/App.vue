<template>
  <div>
    <h1 style="text-align: center">
      Månadens skottlossningar i Sverige 🇸🇪
    </h1>
    <div class="event-container">
      <ActionList />
      <Map />
    </div>
  </div>
</template>

<script>
import Map from "./components/Map.vue";
import ActionList from "./components/EventList.vue";
export default {
    components: {
        Map,
        ActionList
    },
    data() {
        return {
            coordinates: [],
        };
    },
    computed: {
        position() {
            if (this.coordinates.length === 2) {
                return {lat: this.coordinates[0], lng: this.coordinates[1]};
            }
            return null;
        }
    },
    created() {
        this.$store.dispatch("fetchEvents");
    }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 2rem;
  margin-left: 5%;
  margin-right: 5%;
}

.event-container {
  display: flex;
  justify-content: center;
}

@media screen and (min-device-width: 1200px) {
  #app {
    margin-left: 5%;
    margin-right: 5%;
  }
}
</style>
