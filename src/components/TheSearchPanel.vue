<template>
  <div class="search-panel">
    <input
      type="text"
      placeholder="Поиск..."
      v-model="city"
      @keypress="fetchWeather"
    />
  </div>
</template>

<script>
export default {
  name: "search-panel",

  data() {
    return {
      city: "",
    };
  },

  methods: {
    fetchWeather() {
      $this.$emit('fetchWeather', this.city)
    }
  }
};
</script>

<style lang="scss">
.search-panel{
  width: 100%;
  input{
    width: 100%;
    padding: 15px;
    appearance: none;
    border: none;
    outline: none;
    background: none;
    background-color: rgba(255, 255, 255, .5);
    box-shadow: 0 0 8px rgba(0, 0, 0, .25);
    border-radius: 16px 0 16px 0;
    font-size: 18px;
    color: #333;
    transition: .4s;

    &:focus{
      background-color: rgba(255, 255, 255, .8);
      border-radius: 0 16px 0 16px;
      box-shadow: 0 0 14px rgba(0, 0, 0, .25);
    }
  }
}
</style>
