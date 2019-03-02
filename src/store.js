import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    pots: [],
  },
  mutations: {
    SET_POTS(state, pots) {
      state.pots = pots;
    }
  },
  actions: {
    loadPotions({ commit }) {
      axios
        .get(
          "https://cdn.rawgit.com/LucasRuy/1d4a5d45e2ea204d712d0b324af28bab/raw/342e0e9277be486102543c7f50ef5fcf193234b6/potions.json"
        )
        .then(response => response.data.potions)
        .then(pots => {
          commit("SET_POTS", pots);
        });
    }
  }
});
