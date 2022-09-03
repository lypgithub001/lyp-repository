export default function getEveryTime(endTime, newDate, pageData, callback) {
  let the = new Date(endTime)
  let date = the - newDate //当前服务器时间戳
  if (the < newDate) return
  let days = Math.floor(date / 1000 / 60 / 60 / 24) // 从这里开始
  let daysmod = date - days * 24 * 60 * 60 * 1000
  let hours = Math.floor(daysmod / 1000 / 60 / 60)
  let hoursmod = date - days * 24 * 60 * 60 * 1000 - hours * 1000 * 60 * 60
  let minutes = Math.floor(hoursmod / 1000 / 60)
  let minutesmod = date - days * 24 * 60 * 60 * 1000 - hours * 1000 * 60 * 60 - minutes * 1000 * 60
  let seconds = Math.floor(minutesmod / 1000) // 到这里结束，是将总毫秒转化成对应天数+小时数+分钟数+秒数的转换方法
  pageData.showDate = {
    days: days < 1 ? 0 : days,
    hours: hours < 1 ? 0 : hours,
    minutes: minutes < 1 ? 0 : minutes,
    seconds: seconds < 1 ? 0 : seconds
  }
  if (pageData.showDate.days == 0 && pageData.showDate.hours == 0 && pageData.showDate.minutes == 0 && pageData.showDate.seconds == 0 && callback) {
    callback()
  }
}
