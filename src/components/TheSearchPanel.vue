<template>
  <div class="search-panel">
    <input
      type="search"
      placeholder="Поиск..."
      v-model="city"
      @keypress.enter="fetchWeather"
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
      this.$emit("fetchWeather", this.city);
    },
  },
};
</script>

<style lang="scss">
.search-panel {
  width: 100%;
  input {
    width: 100%;
    padding: 15px;
    appearance: none;
    border: none;
    outline: none;
    background: none;
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
    border-radius: 16px 0 16px 0;
    font-size: 18px;
    color: #333;
    transition: 0.4s;

    &:focus {
      background-color: rgba(255, 255, 255, 0.8);
      border-radius: 0 16px 0 16px;
      box-shadow: 0 0 14px rgba(0, 0, 0, 0.25);
    }
  }
}
</style>
