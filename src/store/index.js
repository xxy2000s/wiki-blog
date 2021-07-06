import { createStore } from 'vuex'
import userModule from '@/store/modules/user.js';

const store = createStore({
  // 开启严格模式
  strict: process.env.NODE_ENV !== 'production',
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    userModule,
  },
})
export default store