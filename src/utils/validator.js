// 检验 number 不为 0
export const checkNum = (rule, value, callback) => {
  if (!value) {
    callback(new Error(' '))
  } else {
    callback()
  }
}
