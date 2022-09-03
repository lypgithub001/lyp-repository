import { defineConfig, loadEnv } from 'vite' // 帮手函数，这样不用 jsdoc 注解也可以获取类型提示
import { resolve } from 'path' // 主要用于alias文件路径别名
import vue from '@vitejs/plugin-vue'
import { svgBuilder } from './src/plugins/svgBuilder'
import legacy from '@vitejs/plugin-legacy'
import OptimizationPersist from 'vite-plugin-optimize-persist'
import PkgConfig from 'vite-plugin-package-config'

function pathResolve(dir) {
  return resolve(__dirname, '.', dir)
}
export default defineConfig({
  base: '/',
  // 打包配置
  build: {
    target: 'es2015',
    outDir: 'dist', //指定输出路径
    chunkSizeWarningLimit: 1500,
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        //   manualChunks(id) {
        //     if (id.includes('node_modules')) {
        //       return id.toString().split('node_modules/')[1].split('/')[0].toString()
        //     }
        //   },
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/') : []
          const fileName = facadeModuleId[facadeModuleId.length - 2] || '[name]'
          return `js/${fileName}/[name].[hash].js`
        }
      }
    },
    assetsDir: 'assets' // 指定生成静态资源的存放路径
  },
  ssr: false,
  // 配置需要使用的插件列表，组件自动导入
  plugins: [
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    }),
    vue(), // 组件自动导入
    svgBuilder('./src/assets/svg/'), // 这里已经将src/icons/svg/下的svg全部导入，无需再单独导入
    PkgConfig(),
    OptimizationPersist()
  ],
  // 配置文件别名 vite1.0是/@/  2.0改为/@
  // 这里是将src目录配置别名为 /@ 方便在项目中导入src目录下的文件
  resolve: {
    alias: {
      '@': pathResolve('src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/css/_var.scss";@import "@/assets/css/screen-fit.scss";`
      }
    }
  },
  // 强制预构建插件包
  optimizeDeps: {
    include: ['axios']
  },
  // 本地运行配置，及反向代理配置
  server: {
    //  cors: true, // 默认启用并允许任何源
    host: '0.0.0.0',
    open: true, // 在服务器启动时自动在浏览器中打开应用程序
    port: 8088,
    strictPort: false, //如果端口占用，是退出，还是尝试其他端口
    https: false, // 是否开启 https
    //反向代理配置，注意rewrite写法
    proxy: {
      '/api': {
        target: process.env.VITE_VUE_APP_ENV, //代理接口
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/ossDocument': {
        target: 'https://cnpc-document.oss-cn-beijing.aliyuncs.com', //代理接口
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ossDocument/, '')
      },
      '/ossAvatar': {
        target: 'https://cnpc-avatar.oss-cn-beijing.aliyuncs.com', //代理接口
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ossAvatar/, '')
      },
      '/v1': {
        target: 'https://api-aifanfan.baidu.com', //代理接口
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/v1/, '')
      }
    }
  }
})
