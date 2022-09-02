import { reqCategoryList } from "@/api/index";

const state = { categoryList: [] };
const actions = {
  async categoryList({ commit }) { 
    let result = await reqCategoryList();
    // console.log(result);
    if (result.status == 200) {
      commit("CATEGORY", result.data);
    }
  },
};
const mutations = {
  CATEGORY(state, categoryList) {
    state.categoryList = categoryList;
  },
};
const getters = {};

export default {
  // namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
