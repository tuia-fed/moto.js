import './assets/less/public.less'
import pages from './pages'
import {less} from './store'

Vue.use(Router).use(Vuex)

new Vue({
  store: new Vuex.Store({
    modules: {
      less
    }
  }),
  router: new Router({routes: pages})
}).$mount('.app')