import ElementPlus from 'element-plus'
import localeZH from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/lib/theme-chalk/index.css'
export default (app) => {
  app.use(ElementPlus, { locale: localeZH, size: 'small' })
}
