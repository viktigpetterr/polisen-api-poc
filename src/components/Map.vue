<template>
  <GMapMap
    v-if="windowWidth > 700"
    :center="center"
    :zoom="5"
    map-type-id="terrain"
    :options="{
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false,
      disableDefaultUi: false
    }"
  >
    <GMapCluster>
      <GMapMarker
        v-if="event"
        :position="position"
        :clickable="true"
        :draggable="false"
        :label="event.type.toString() === 'Skottlossning' ? '🔫' : '❔'"
        @click="center = position"
      >
        <GMapInfoWindow>
          <div>
            {{ event.name }}
          </div>
        </GMapInfoWindow>
      </GMapMarker>
    </GMapCluster>
  </GMapMap>
</template>
<script>
export default {
    name: "Map",
    data() {
        return {
            center: {lat: 63.1792, lng: 14.63566},
            windowWidth: window.innerWidth,
        };
    },
    computed: {
        event() {
            return this.$store.state.event;
        },
        position() {
            let coordinates = this.event.location.gps.split(",");
            return  {lat: parseFloat(coordinates[0]), lng: parseFloat(coordinates[1])};
        }
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener("resize", this.onResize);
        });
    },
    methods: {
        onResize() {
            this.windowWidth = window.innerWidth;
        },
    }
};
</script>
<style lang="scss" scoped>
.vue-map-container {
  width: 40%;
  height: 50rem;
  min-width: 25rem;
  margin-left: 2rem;
}

</style>
