import { createStore } from 'vuex'
import user from "./modules/user.js"

const state = createStore({
  modules: {
    user,
  }
})

export default state