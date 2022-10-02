<template>
  <div id="app" :class="typeof WEATHER.main != 'undefined' && WEATHER.main.temp > 16 ? 'warm' : ''">
    <main>
      <the-search-panel @fetchWeather="fetchWeather"/>

      <div v-if="WEATHER.main">
        <div class="description">
        <p class="location">{{ WEATHER.name }}, {{ WEATHER.sys.country }}</p>
        <p class="date">{{date()}}</p>
      </div>

      <div class="weather-container">
        <div class="temp">{{ Math.round(WEATHER.main.temp) }}°c</div>
        <div class="weather">{{ WEATHER.weather[0].main }}</div>
      </div>
      </div>
    </main>
  </div>
</template>

<script>
import TheSearchPanel from "./components/TheSearchPanel.vue";
import {mapActions, mapGetters} from 'vuex'

export default {
  components: { TheSearchPanel },
  data() {
    return{

    }
  },

  mounted() {
    
    this.GET_WEATHER()
  },

  computed: {
    ...mapGetters([
      'WEATHER'
    ])
  },

  methods: {
    ...mapActions(['GET_WEATHER']),

    fetchWeather(c){
      this.GET_WEATHER(c)
    },

    date() {
      let d = new Date()
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      let day = days[d.getDay()]
      let date = d.getDate()
      let month = months[d.getMonth()]
      let year = d.getFullYear()

      return `${day} ${date} ${month} ${year}`
    }
  }

};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
#app {
  background-image: url("./assets/images/cold-bg.jpg");
  background-size: cover;
  background-position: bottom;
  width: 100%;
  max-width: 420px;
  height: 100vh;
  margin: 0 auto;

  main {
    min-height: 100vh;
    padding: 30px;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.25),
      rgba(0, 0, 0, 0.75)
    );
  }

  .description {
    color: #fff;
    text-align: center;
    margin: 40px;
    .location {
      font-size: 32px;
      font-weight: 500;
      text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
      margin-bottom: 10px;
    }
    .date {
      font-size: 20px;
      font-weight: 300;
      font-style: italic;
    }
  }

  .weather-container {
    color: #fff;
    text-align: center;
    .temp {
      display: inline-block;
      padding: 15px 20px;
      font-size: 100px;
      font-weight: 900;
      text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
      background-color: rgba(255, 255, 255, .25);
      border-radius: 16px;
      box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.25);
      margin-bottom: 30px;
    }
    .weather{
      font-size: 46px;
      font-weight: 700;
      font-style: italic;
      text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
    }
  }
}
#app.warm{
  background-image: url("./assets/images/warm-bg.jpg");
}
</style>
