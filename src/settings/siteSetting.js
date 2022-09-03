import { computed } from 'vue'
/**
 * 销售大脑
 */
const SALE = 'SELL'

/**
 * 采购大脑
 */
const BUY = 'PURCHASE'

export const siteSettings = {
  BUY: {
    logo: '@/assets/img/titleLogo.png',
    solutionVersion: computed(() => JSON.parse(sessionStorage.getItem('vuex')).teamInfo?.solutionVersion) // 0==敏捷；1==标准
  },
  SALE: {
    logo: '@/assets/img/sale-logo.png',
    solutionVersion: computed(() => JSON.parse(sessionStorage.getItem('vuex')).teamInfo?.solutionVersion) // 0==敏捷；1==标准
  }
}
