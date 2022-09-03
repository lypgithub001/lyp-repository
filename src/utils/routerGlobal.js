//   function getModules() {
//     const components = import.meta.glob('../views/**/*.vue')
//     return components
//   }
//   function getComponents() {
//     const components = import.meta.globEager('../views/**/*.vue')
//     return components
//   }

// 自动注册组件
export const asyncComponent = function (app) {
  if (!(import.meta.env.VITE_VUE_APP_NODE_ENV == 'development' || import.meta.env.VITE_VUE_APP_NODE_ENV == 'test')) {
    const modules = import.meta.glob('../views/**/*.vue')
    const components = import.meta.globEager('../views/**/*.vue')
    Object.keys(modules).forEach((key) => {
      const viewSrc = components[key]
      const file = viewSrc.default
      if (!file.isComponents) return
      const AsyncComponent = defineAsyncComponent(modules[key])
      app.component(letterToUpperCase(file.name), AsyncComponent)
    })
  }

  // console.log(app._component.components)
}
