<template>
  <div id="app">
    <main>
      <the-search-panel />

      <div class="description">
        <p class="location">Moscow, RU</p>
        <p class="date">Saturday 1 October 2022</p>
      </div>

      <div class="weather-container">
        <div class="temp">20°c</div>
        <div class="weather">Rain</div>
      </div>
    </main>
  </div>
</template>

<script>
import TheSearchPanel from "./components/TheSearchPanel.vue";
export default {
  components: { TheSearchPanel },
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
</style>
