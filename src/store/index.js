import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        collapse: false,
        tabList: [{name: "首页", path: "/"}],
    },
    mutations: {
        //折叠菜单栏
        trigger(state) {
            state.collapse = !state.collapse
        },
        // 移除历史标签栏
        removeTab(state, tab) {
            let index = state.tabList.findIndex(item => item.name === tab.name)
            state.tabList.splice(index, 1)
        },
        //重置历史标签栏
        resetTab(state) {
            state.tabList = [{name: "首页", path: "/"}]
        }
    },
    actions: {},
    modules: {}
})
