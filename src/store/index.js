import { createStore } from "vuex";

export default createStore({
  state: {
    weather: {},
  },
  getters: {
    WEATHER(state) {
      return state.weather;
    },
  },
  mutations: {
    SET_WEATHER(state, result) {
      if (result.main) {
        state.weather = result;
      }
    },
  },
  actions: {
    async GET_WEATHER({ commit }, city) {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=9724a5ea5a1ca4607b597bbc80c41a24`
      );
      const result = await response.json();

      commit("SET_WEATHER", result);
    },
  },
});
