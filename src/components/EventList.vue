<template>
  <div class="action-list-container">
    <h2 style="text-align: center">
      Händelser i {{ monthName }}
    </h2>
    <div
      style="width: 90%"
      class="line"
    />
    <div
      class="box-card-container"
    >
      <el-card
        v-for="(event, index) in events"
        :key="index"
        shadow="hover"
        class="box-card"
        @click.capture="updateCoordinates(index)"
      >
        <template #header>
          <div class="card-header">
            <span>{{ event.name }}</span>
            <el-tag
              class="tag"
              :type="event.type.toString() === 'Skottlossning' ? 'danger' : 'warning'"
            >
              {{ event.type.toString() === 'Skottlossning' ? '🔫' : '❔' }}
            </el-tag>
          </div>
        </template>
        <div class="card-content-container" />
        <p><b>Typ: </b>{{ event.type }}</p>
        <p><b>Tidpunkt: </b>{{ event.datetime.slice(0, event.datetime.indexOf("+")) }}</p>
        <p><b>Summering: </b>{{ event.summary }}</p>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
    name: "ActionList",
    data() {
        return {
            windowWidth: window.innerWidth
        };
    },
    computed: {
        events() {
            return this.$store.state.events;
        },
        monthName() {
            switch (this.$store.state.month) {
            case 0:
                return "January";
            case 1:
                return "Februari";
            case 2:
                return "Mars";
            case 3:
                return "April";
            case 4:
                return "Maj";
            case 5:
                return "Juni";
            case 6:
                return "Juli";
            case 7:
                return "Augusti";
            case 8:
                return "September";
            case 9:
                return "Oktober";
            case 10:
                return "November";
            case 11:
                return "December";
            default:
                return "år";
            }
        }
    },
    methods: {
        updateCoordinates(index) {
            this.$store.commit("selectEvent", this.events[index]);
        },
    }
};
</script>
<style lang="scss" scoped>
.box-card-container {
  overflow: auto;
  height: 45rem;
}

.box-card {
  margin: 2rem;
  max-width: 50rem;
  cursor: pointer;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-content-container {
  display: grid;
}

.line {
  width: 100%;
  height: 0;
  border-top: 1px solid var(--el-border-color-base);
}

.tag {
  margin-left: 0.5rem;
  font-weight: bold;
  font-size: medium;
}

</style>
