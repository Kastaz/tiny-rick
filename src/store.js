import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import episodes from '@/store/episodes'
import characters from '@/store/characters'

export default new Vuex.Store({
  modules: {
    episodes,
    characters
  }
})
