import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/icon.scss'
import './assets/fonts/custom.css'
import router from './permission'
import installElementPlus from './plugins/element'
import store from './store'
import './utils/flexible.js'
//引入字体图标样式库
import '@/assets/iconfont/iconfont.css'
import '@/assets/iconfont/iconfont.js'
import mitt from 'mitt'; //引入mitt
import './assets/css/element-plus.scss'
import './assets/css/element-variables.scss'
import wholeComponent from './components/index'; //组件注册
import directives from './utils/directives.js'; //自定义指令
// import { asyncComponent } from './utils/routerGlobal.js'
import { fitChartSize } from '@/utils/common.js'
const app = createApp(App)
// asyncComponent(app)
directives(app)
wholeComponent(app)
app.config.globalProperties.$bus = new mitt() //绑定事件总线
app.config.globalProperties.fitChartSize = fitChartSize
installElementPlus(app)
app.use(store).use(router).mount('#app')
