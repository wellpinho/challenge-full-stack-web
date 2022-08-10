import Vue from "vue";
import Vuex from "vuex";

import Students from "@/features/people";

Vue.use(Vuex);

const modules = {
  Students,
};

export default new Vuex.Store({
  modules,
});
