import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import infiniteScroll from 'vue-infinite-scroll'
import formatDistance from 'date-fns/distance_in_words_to_now'

Vue.use(infiniteScroll)

Vue.filter('time-ago', function (value){
  return formatDistance(new Date(value), {addSuffix:true});
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
