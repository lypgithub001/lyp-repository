import JsEncrypt from 'jsencrypt'
import { upLoadDownload } from '@/api/common/index.js'
/**
 * 将url上的参数拆分
 * @returns
 */
export const GetRequest = (path) => {
  let url = path ? path : location.search //获取url中"?"符后的字串
  let theRequest = new Object()
  if (url.indexOf('?') != -1) {
    let str = url.substr(1)
    let strs
    strs = str.split('&')
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1])
    }
  }
  return theRequest
}
/**
 * 将url上的参数拼接
 * @returns
 */
export const splitQueryParams = (params) => {
  let tempParams = []
  if (Object.keys(params).length <= 0) return tempParams

  for (let key in params) {
    tempParams.push(`${key}=${params[key]}`)
  }

  return tempParams.join('&')
}
//过滤字典数据
export const getLabel = (val, list) => {
  let arr = list?.filter((e) => {
    return val === e.id
  })
  if (arr?.length === 0) return '-'
  if (arr?.length) {
    return arr[0].name || '-'
  }
}
// 过滤数组字典数据
export const getArrLabel = (val, list) => {
  if (!(val && val.length)) return
  return list
    .filter((e) => {
      return val.some((j) => {
        return j == e.id
      })
    })
    .map((x) => {
      return x.name
    })
    .join(',')
}
//过滤树字典数据
export const getTreeLabel = (val, list) => {
  //   console.log('list', list)
  //   console.log('val', val)
  let name = ''
  let recursionData = (list) => {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id == val) {
        return (name = list[i].name)
      } else {
        if (list[i].child) {
          recursionData(list[i].child)
        }
      }
    }
  }
  recursionData(list)
  return name
}
/**
 * rsa密码加密
 * @param {*} time
 * @param {*} cFormat
 * @returns
 */
export function setRsaEncrpty(str, key) {
  // 注册方法
  let pubKey = key // rsa 公钥
  let encryptStr = new JsEncrypt()
  console.log(encryptStr)
  encryptStr.setPublicKey(pubKey) // 设置 加密公钥
  let data = null
  if (typeof str === 'string') data = encryptStr.encrypt(str.toString())
  // 进行加密
  else data = encryptStr.encrypt(JSON.stringify(str)) // 进行加密

  return data
}
// 解密
export function decrypt(txt, key) {
  let privateKey = key
  const encryptor = new JsEncrypt()
  encryptor.setPublicKey(privateKey) // 设置私钥
  return encryptor.decrypt(txt) // 对数据进行解密
}
/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (typeof time === 'string' && /^[0-9]+$/.test(time)) {
      time = parseInt(time)
    }
    if (typeof time === 'number' && time.toString().length === 10) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return d.getMonth() + 1 + '月' + d.getDate() + '日' + d.getHours() + '时' + d.getMinutes() + '分'
  }
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"').replace(/\+/g, ' ') + '"}')
}

/**
 * 格式化时间
 */
export const formatDate = function (date, format) {
  if (!date) {
    return ''
  }

  let d = new Date(date)

  // 年
  if (/YYYY/.test(format)) {
    format = format.replace(/YYYY/, d.getFullYear())
  }
  // 月份
  let month = d.getMonth() + 1
  if (/MM/.test(format)) {
    let monthStr = month < 10 ? '0' + month : month
    format = format.replace(/MM/, monthStr)
  } else if (/M/.test(format)) {
    format = format.replace(/M/, month)
  }
  // 日期
  let dates = d.getDate()
  if (/DD/.test(format)) {
    let dateStr = dates < 10 ? '0' + dates : dates
    format = format.replace(/DD/, dateStr)
  } else if (/D/.test(format)) {
    format = format.replace(/D/, dates)
  }
  // 小时
  let hours = d.getHours()
  if (/HH/.test(format)) {
    let hoursStr = hours < 10 ? '0' + hours : hours
    format = format.replace(/HH/, hoursStr)
  } else if (/H/.test(format)) {
    format = format.replace(/H/, hours)
  } else if (/hh/.test(format)) {
    let hoursMin = hours > 12 ? hours - 12 : hours
    let hoursStr = hoursMin < 10 ? '0' + hoursMin : hoursMin
    format = format.replace(/hh/, hoursStr)
  } else if (/h/.test(format)) {
    let hoursMin = hours > 12 ? hours - 12 : hours
    format = format.replace(/h/, hoursMin)
  }
  // 分
  let minutes = d.getMinutes()
  if (/mm/.test(format)) {
    let minutesStr = minutes < 10 ? '0' + minutes : minutes
    format = format.replace(/mm/, minutesStr)
  } else if (/m/.test(format)) {
    format = format.replace(/m/, minutes)
  }
  // 秒
  let seconds = d.getSeconds()
  if (/ss/.test(format)) {
    let secondsStr = seconds < 10 ? '0' + seconds : seconds
    format = format.replace(/ss/, secondsStr)
  } else if (/s/.test(format)) {
    format = format.replace(/s/, seconds)
  }
  return format
}

/**
 * 验证电子邮箱格式
 */
export function email(value) {
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value)
}
/**
 深度克隆/拷贝
 */
export function deepClone(source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'deepClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach((keys) => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}
/**
 * 验证手机格式
 */
export function mobile(value) {
  return /^1[23456789]\d{9}$/.test(value)
}

/**
 * 验证URL格式
 */
export function url(value) {
  return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(
    value
  )
}

/**
 * 验证日期格式
 */
export function date(value) {
  return !/Invalid|NaN/.test(new Date(value).toString())
}

/**
 * 验证ISO类型的日期格式
 */
export function dateISO(value) {
  return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value)
}

/**
 * 验证十进制数字
 */
export function number(value) {
  return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value)
}

/**
 * 验证整数
 */
export function digits(value) {
  return /^\d+$/.test(value)
}

/**
 * 验证身份证号码
 */
export function idCard(value) {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value)
}

/**
 * 金额,只允许2位小数
 */
export function amount(value) {
  //金额，只允许保留两位小数
  return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value)
}

/**
 * 中文
 */
export function chinese(value) {
  let reg = /^[\u4e00-\u9fa5]+$/gi
  return reg.test(value)
}

/**
 * 只能输入字母
 */
export function letter(value) {
  return /^[a-zA-Z]*$/.test(value)
}

/**
 * 只能是字母或者数字
 */
export function enOrNum(value) {
  //英文或者数字
  let reg = /^[0-9a-zA-Z]*$/g
  return reg.test(value)
}

/**
 * 验证是否包含某个值
 */
export function contains(value, param) {
  return value.indexOf(param) >= 0
}

/**
 * 验证一个值范围[min, max]
 */
export function range(value, param) {
  return value >= param[0] && value <= param[1]
}

/**
 * 验证一个长度范围[min, max]
 */
export function rangeLength(value, param) {
  return value.length >= param[0] && value.length <= param[1]
}

/**
 * 判断是否为空
 */
export function empty(value) {
  switch (typeof value) {
    case 'undefined':
      return true
    case 'string':
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true
      break
    case 'boolean':
      if (!value) return true
      break
    case 'number':
      if (0 === value || isNaN(value)) return true
      break
    case 'object':
      if (null === value || value.length === 0) return true
      for (var i in value) {
        return false
      }
      return true
  }
  return false
}

/**
 * 是否json字符串
 */
export function jsonString(value) {
  if (typeof value == 'string') {
    try {
      var obj = JSON.parse(value)
      if (typeof obj == 'object' && obj) {
        return true
      } else {
        return false
      }
    } catch (e) {
      return false
    }
  }
  return false
}

/**
 * 是否数组
 */
export function array(value) {
  if (typeof Array.isArray === 'function') {
    return Array.isArray(value)
  } else {
    return Object.prototype.toString.call(value) === '[object Array]'
  }
}

/**
 * 是否对象
 */
export function object(value) {
  return Object.prototype.toString.call(value) === '[object Object]'
}

/* element-ui级联单选回显 */

export function changeDetSelect(key, treeData) {
  let arr = [] // 在递归时操作的数组
  let returnArr = [] // 存放结果的数组
  let depth = 0 // 定义全局层级
  // 定义递归函数
  function childrenEach(childrenData, depthN) {
    for (var j = 0; j < childrenData.length; j++) {
      depth = depthN // 将执行的层级赋值 到 全局层级
      arr[depthN] = childrenData[j].id
      if (childrenData[j].id == key) {
        returnArr = arr.slice(0, depthN + 1) //将目前匹配的数组，截断并保存到结果数组，
        break
      } else {
        if (childrenData[j].child) {
          depth++
          childrenEach(childrenData[j].child, depth)
        }
      }
    }
    return returnArr
  }
  return childrenEach(treeData, depth)
}
/* element-ui级联多选选回显 */
export function changeDetSelectMore(keys, treeData) {
  let echoTreeArr = []
  let eachAry = JSON.parse(JSON.stringify(keys))
  let itemAry = [] //分类树组件，每一项的id数组
  // 递归分类数据
  let recursionCategory = (data) => {
    let len = data.length
    for (let i = 0; i < len; i++) {
      //循环data参数，匹配回显的id
      itemAry.push(data[i].id) //构建分类树数组项,入栈
      for (let j = 0; j < eachAry.length; j++) {
        //遍历子节点分类id，拼凑成数组项id，并终止循环
        if (eachAry[j] == data[i].id) {
          //匹配到子节点id
          echoTreeArr.push(JSON.parse(JSON.stringify(itemAry))) //push进树分类数据
          eachAry.splice(j, 1) //删除以匹配到的id
          break
        }
      }
      if (eachAry.length <= 0) {
        //所有回显id匹配完成后，跳出循环
        break
      } else if (data[i].child && data[i].child.length > 0) {
        // 如果存在子分类，递归继续
        recursionCategory(data[i].child)
      }
      itemAry.pop() //出栈
    }
  }
  recursionCategory(treeData) //调用递归
  return echoTreeArr
}

//js根据对象数组中某一属性值，合并相同项，并对某一属性累加处理
/* arr原数据   key并字段集合  num 累加字段集合 */
export function mergeSomeCumulativeDifferent(arr, key, num) {
  let list = arr.reduce(function (total, cur, index) {
    let hasValue = total.findIndex((current) => {
      return !key.some((x) => {
        return current[x] != cur[x]
      })
    })
    hasValue === -1 && total.push(cur)
    num.forEach((item) => {
      hasValue !== -1 &&
        (total[hasValue][item] = !isNaN(total[hasValue][item] + cur[item]) ? total[hasValue][item] + cur[item] : total[hasValue][item] || cur[item])
    })
    return total
  }, [])
  return list
}

export function keepTwoDecimalFull(num, type, bit = 2) {
  // num值  type 输出int类型  bit 保留多少位小数
  //保留两位小数
  var result = parseFloat(num)
  if (isNaN(result)) {
    //  console.log('传递参数错误，请检查！')
    return
  }
  let pow = Math.pow(10, bit)
  result = Math.round(num * pow) / pow
  var s_x = result.toString()
  var pos_decimal = s_x.indexOf('.')
  if (pos_decimal < 0) {
    pos_decimal = s_x.length
    s_x += '.'
  }
  //   默认保留2位
  while (s_x.length <= pos_decimal + (bit ? bit : 2)) {
    s_x += '0'
  }
  if (type === 'number') {
    s_x = Number(s_x)
  }
  return s_x
}

//{ fileName:'xxxx.xlsx' , fileStream:'文件流' , className:'class类名（可传可不传）'}
export const exportFile = function ({ fileName, fileStream, className }) {
  let blob = new Blob([fileStream])
  let href = URL.createObjectURL(blob)
  const link = document.createElement('a') //生成a标签用于模拟下载
  let biddingName = sessionStorage.getItem('biddingProjectName') || '' //招标项目名称
  let projectName = sessionStorage.getItem('projectName') || '' //工程项目名称
  projectName = projectName ? projectName + '-' : ''
  biddingName = biddingName ? biddingName + '-' : ''
  link.download = projectName + biddingName + fileName //自定义下载文件名称
  link.href = href //把生成的href赋值到a标签上，在这里我遇到一个问题，
  link.className = className ? className : 'export-file-class'
  document.body.appendChild(link)
  link.click()
  //释放空间
  setTimeout(() => {
    let son = document.getElementsByClassName(link.className)
    for (let i = 0; i < son.length; i++) {
      document.body.removeChild(son[i])
    }
  }, 100)
}

//截取文件类型  默认带.
export const getExt = function (filePath) {
  var index = filePath.lastIndexOf('.')
  //获取后缀
  var ext = filePath.substr(index)
  return ext
}

/**
 * @deprecated 下载文件
 * @param {string} url
 * @param {string} filename
 */
export async function handleFileDownload(url, filename, className) {
  let name = filename
  if (filename) {
    if (filename.indexOf('.') === -1) {
      name = filename + getExt(url)
    }
  }
  if (!name) {
    name = formatDate(new Date(), 'YYYYMMDD') + getExt(url)
  }
  await upLoadDownload({ name: name, absolutePath: url }).then((res) => {
    if (res) {
      exportFile({ fileName: name, fileStream: res, className: className })
    }
  })
  return false

  //   // 创建 a 标签
  //   let a = document.createElement('a')
  //  let name = filename
  //  if (filename.indexOf('.') === -1) {
  //    name = filename + getExt(url)
  //  }
  //   a.href = url
  //   a.download = name
  //   //   a.target = '_blank'
  //   a.className = className ? className : 'downLoad-file-class'
  //   document.body.appendChild(a)
  //   a.click()
  //   //释放空间
  //   setTimeout(() => {
  //     let son = document.getElementsByClassName(a.className)
  //     for (let i = 0; i < son.length; i++) {
  //       document.body.removeChild(son[i])
  //     }
  //   }, 100)
}

/**
 * @deprecated 处理 pdf url，使其不在浏览器打开
 * @param {string} url
 */
export function handlePdfLink(url, filename) {
  fetch(url, {
    method: 'get',
    responseType: 'arraybuffer'
  })
    .then(function (res) {
      if (res.status !== 200) {
        return res.json()
      }
      return res.arrayBuffer()
    })
    .then((blobRes) => {
      // 生成 Blob 对象，设置 type 等信息
      const e = new Blob([blobRes], {
        type: 'application/octet-stream',
        'Content-Disposition': 'attachment'
      })
      // 将 Blob 对象转为 url
      const link = window.URL.createObjectURL(e)
      handleFileDownload(link, filename)
    })
    .catch((err) => {
      console.error(err)
    })
}

/**
 * @deprecated 字符串循环拼接
 * @param {Array,String} arr key
 */
export function getTextByJs(arr, key) {
  var str = ''
  for (var i = 0; i < arr.length; i++) {
    str += arr[i][key] + ','
  }
  //去掉最后一个逗号(如果不需要去掉，就不用写)
  if (str.length > 0) {
    str = str.substr(0, str.length - 1)
  }
  return str
}

// 正则验证
export const regulars = {
  //条形码号码
  barCodeReg: /\d{6}$/,
  //发票号码
  invoiceReg: /\d{8}$/,
  //座机电话
  contactPhoneReg: /\d{3}-\d{8}|\d{4}-\d{7}|\d{3}\d{8}|\d{4}\d{7}|\d{12}/,
  //手机号码
  phoneReg: /^(13[0-9]|14[145679]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-2,5-9])\d{8}$/,
  //传真
  faxReg: /\d{3}-\d{8}|\d{4}-\d{7}|\d{3}\d{8}|\d{4}\d{7}/,
  //银行卡号
  bankNoReg: /^\d{8,36}$/,
  //身份证号正则
  IDNumberReg:
    /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,
  //邮箱正则
  EmalReg: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
  //联行号
  bankNumberReg: /^\d{12}$/,
  //邮政编码正则
  postalCodeReg: /^[1-9][0-9]{5}$/,
  //密码正则
  passwordReg: /^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z~!@#$%^&*]{8,16}$/,
  //密码正则2
  password2Reg: /^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z~!@#$%^&*]{6,18}$/,
  //用户名正则不能输入中文与特殊字符
  userNameReg: /^[a-zA-Z0-9_]{0,}$/,
  //纳税人识别号
  taxpayerNumber: /[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}/,
  //正则验证不能输入中文
  suppilerUserNameReg: /^[a-zA-Z0-9_-]{1,16}$/,
  //正则验证只能输入汉字或者括号
  chineseNameReg: /^[\u4e00-\u9fa5 \(\)（）]+$/,
  //正则验证只能输入汉字
  chineseUserName: /^[\u4e00-\u9fa5]+$/,
  contactNum: /^\d{11,16}$/,
  idCardPay: /^\d{15,18}$/,
  //社会信用代码
  creditReg: /^([0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}|[1-9]\d{14})$/
}

//获取截止日期
export function getDeadLine(startTime, endTime, type) {
  let date3 = new Date(endTime).getTime() - new Date(startTime).getTime()
  if (date3 < 0) return ''
  let days = Math.floor(date3 / (24 * 3600 * 1000))
  let leave1 = date3 % (24 * 3600 * 1000)
  let hours = Math.floor(leave1 / (3600 * 1000))
  let leave2 = leave1 % (3600 * 1000)
  let minutes = Math.floor(leave2 / (60 * 1000))
  if (type == 1) {
    return [days, hours, minutes]
  } else {
    return days + '天 ' + hours + '小时 ' + minutes + ' 分钟'
  }
}
//根据出生日期获取年龄
/**
 * @param strBirthday：指的是出生日期，格式为"1990-01-01"
 */
export function GetAge(strBirthday) {
  var returnAge,
    strBirthdayArr = strBirthday.split('-'),
    birthYear = strBirthdayArr[0],
    birthMonth = strBirthdayArr[1],
    birthDay = strBirthdayArr[2],
    d = new Date(),
    nowYear = d.getFullYear(),
    nowMonth = d.getMonth() + 1,
    nowDay = d.getDate()
  if (nowYear == birthYear) {
    returnAge = 0 //同年 则为0周岁
  } else {
    var ageDiff = nowYear - birthYear //年之差
    if (ageDiff > 0) {
      if (nowMonth == birthMonth) {
        var dayDiff = nowDay - birthDay //日之差
        if (dayDiff < 0) {
          returnAge = ageDiff - 1
        } else {
          returnAge = ageDiff
        }
      } else {
        var monthDiff = nowMonth - birthMonth //月之差
        if (monthDiff < 0) {
          returnAge = ageDiff - 1
        } else {
          returnAge = ageDiff
        }
      }
    } else {
      returnAge = -1 //返回-1 表示出生日期输入错误 晚于今天
    }
  }
  return returnAge //返回周岁年龄
}
//处理表格宽度
export const calWidth = (list, title) => {
  let widths = 0
  list.forEach((x) => {
    if (getTextWidth(x[title]) > widths) {
      widths = getTextWidth(x[title])
    }
  })
  return widths
}

function getTextWidth(str = '') {
  const dom = document.createElement('span')
  dom.style.display = 'inline-block'
  dom.textContent = str
  document.body.appendChild(dom)
  const width = dom.clientWidth
  document.body.removeChild(dom)
  return width
}

//数组分段排序
/**
 * @param arr"排序的数组"
 * @param spanArr"
 * @param field"根据*排序"
 */
export const arrSegmentSort = function (arr, spanArr, field) {
  let newArr = [],
    oldArr = JSON.parse(JSON.stringify(arr))
  for (let i = 0; i < oldArr.length; i++) {
    for (let j = 0; j < spanArr.length; j++) {
      if (spanArr[j] != 0) {
        let mg = oldArr.splice(0, spanArr[i]).sort(function (a, b) {
          return a[field] - b[field]
        })
        newArr.push(mg)
      }
    }
  }
  return newArr.flat()
}

//多条件排序
/**
 * @param tableData"排序的数组"
 * @param fields"按序排序key值"
 * @param scortType"true正序 false 倒序"
 */
export const moreConditionScort = function (tableData = [], fields = [], scortType) {
  var arrScort = [],
    result = []
  function getSort(fn) {
    return function (a, b) {
      var ret = 0
      if (fn.call(this, a, b)) {
        ret = -1
      } else if (fn.call(this, b, a)) {
        ret = 1
      }
      return ret
    }
  }
  function getMutipSort(arr) {
    return function (a, b) {
      var tmp,
        i = 0
      do {
        tmp = arr[i++](a, b)
      } while (tmp == 0 && i < arr.length)
      return tmp
    }
  }
  for (let i = 0; i < fields.length; i++) {
    arrScort.push(
      getSort(function (a, b) {
        return scortType ? a[fields[i]] > b[fields[i]] : a[fields[i]] < b[fields[i]]
      })
    )
  }

  result = tableData.sort(getMutipSort(arrScort))
  return result
}

export const toChinesNum = function (num) {
  let changeNum = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  let unit = ['', '十', '百', '千', '万']
  num = parseInt(num)
  let getWan = (temp) => {
    let strArr = temp.toString().split('').reverse()
    let newNum = ''
    for (var i = 0; i < strArr.length; i++) {
      newNum =
        (i == 0 && strArr[i] == 0 ? '' : i > 0 && strArr[i] == 0 && strArr[i - 1] == 0 ? '' : changeNum[strArr[i]] + (strArr[i] == 0 ? unit[0] : unit[i])) +
        newNum
    }
    return newNum
  }
  let overWan = Math.floor(num / 10000)
  let noWan = num % 10000
  if (noWan.toString().length < 4) {
    noWan = '0' + noWan
  }
  return overWan ? getWan(overWan) + '万' + getWan(noWan) : getWan(num)
}
//精度浮点乘法
export function accMultiply(arg1, arg2) {
  var m = 0,
    s1 = arg1?.toString(),
    s2 = arg2?.toString()
  try {
    m += s1.split('.')[1].length
  } catch (e) {}
  try {
    m += s2.split('.')[1].length
  } catch (e) {}
  return (Number(s1?.replace('.', '')) * Number(s2?.replace('.', ''))) / Math.pow(10, m)
}
//根据提供的属性去重
export const removeRepetList = (arr, prop) => {
  let obj = {}
  return arr.reduce(function (preValue, item) {
    obj[item[prop]] ? '' : (obj[item[prop]] = true && preValue.push(item))
    return preValue
  }, [])
}
//取出两个数组的不同元素
export const getArrDifference = (arr1, arr2) => {
  return arr1.concat(arr2).filter(function (v, i, arr) {
    return arr.indexOf(v) === arr.lastIndexOf(v)
  })
}
//取出两个数组的相同元素
export const getArrEqual = (arr1, arr2) => {
  let newArr = []
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[j] === arr2[i]) {
        newArr.push(arr1[j])
      }
    }
  }
  return newArr
}
/*
模拟: 原始数组：[1,2,8,9,5,8,4,0,4]
索引值：0,1,2,3,4,5,6,7,8
伪新数组：[1,2,8,9,5,8,4,0,4]
使用indexOf方法找到数组中的元素在元素在中第一次出现的索引值
索引值：0,1,2,3,4,2,6,7,6
返回前后索引值相同的元素：
新数组：[1,2,8,9,5,4,0]    
数组去重    
*/
export const unique = (arr) => {
  // 如果新数组的当前元素的索引值 == 该元素在原始数组中的第一个索引，则返回当前元素
  return arr.filter(function (item, index) {
    return arr.indexOf(item, 0) === index
  })
}
//兼容Safari,是否是safari
export const isSafariFun = () => {
  let isisSafari = false
  if (/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)) {
    isisSafari = true
  } else {
    isisSafari = false
  }
  console.log(isisSafari)
  return isisSafari
}
// 对象A与对象B具有相同属性的情况下，把对象B的属性值赋值到对象A中，且不影响对象A的其他属性。(数组对象中如果嵌套了其他数组对象，则该方法不适用)
export const objAssign = (objA, objB, value) => {
  return objA.map((itemA) => {
    return Object.assign(
      itemA,
      objB.find((itemB) => {
        return itemB && itemA[value] === itemB[value] // 指定属性名name
      })
    )
  })
}
//判断对象是否相等
export const equals = (a, b) => {
  if (a === b) return true
  if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime()
  if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b
  if (a.prototype !== b.prototype) return false
  let keys = Object.keys(a)
  if (keys.length !== Object.keys(b).length) return false
  return keys.every((k) => equals(a[k], b[k]))
}
/**
 * 客户端检测
 */
export const BrowserInfo = function () {
  var json = {
    userAgent: navigator.userAgent.toLowerCase(),
    isAndroid: Boolean(navigator.userAgent.match(/android/gi)),
    isIphone: Boolean(navigator.userAgent.match(/iphone|ipod/gi)),
    isIpad: Boolean(navigator.userAgent.match(/ipad/gi)),
    isWeixin: Boolean(navigator.userAgent.match(/MicroMessenger/gi))
  }

  return json
}
//为兼容safari,将时间格式转化xxxx/xx/xx的格式
export function GetDateDiff(DiffTime) {
  //将xxxx-xx-xx的时间格式，转换为 xxxx/xx/xx的格式
  let time
  time = DiffTime.replace(/\-/g, '/')
  return time
}
//js获取多少天后的日期
export function getBeforeDate(dataTime, n) {
  var date = new Date(dataTime)
  console.log(date)
  var year, month, day, s
  date.setDate(date.getDate() + n)
  year = date.getFullYear()
  month = date.getMonth() + 1
  day = date.getDate()
  s = year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day)
  console.log(s)
  return s
}

/**
 * js转换金钱为中文单位元、万元、亿元、万亿
 * @param {*} num
 * @returns
 */
export function unitConvert(num, fixed = true, toFixedNum = 2, isYuan = true) {
  let moneyUnits = ['元', '万', '亿', '万亿']
  let dividend = 10000
  let curentNum = num
  //转换数字
  let curentUnit = moneyUnits[0]
  //转换单位
  for (let i = 0; i < 4; i++) {
    curentUnit = moneyUnits[i]
    if (strNumSize(curentNum) < 5) {
      break
    }
    curentNum = curentNum / dividend
  }
  let m = { num: 0, unit: '' }
  if (fixed) {
    m.num = curentNum.toFixed(toFixedNum)
  } else {
    m.num = Math.floor(curentNum)
  }
  m.unit = curentUnit
  if (curentUnit === '元') {
    if (!isYuan) {
      m.unit = ''
    }
  }

  return m
}

function strNumSize(tempNum) {
  let stringNum = tempNum.toString()
  let index = stringNum.indexOf('.')
  let newNum = stringNum
  if (index != -1) {
    newNum = stringNum.substring(0, index)
  }
  return newNum.length
}

export function getUnitNumber(unit, value, fixed = true, toFixedNum = 2) {
  let num = 0
  if (unit === '万') {
    num = value / 10000
  } else if (unit === '亿') {
    num = value / 100000000
  } else if (unit === '万亿') {
    num = value / 1000000000000
  } else {
    num = value
  }
  if (fixed) {
    num = num.toFixed(toFixedNum)
  } else {
    num = Math.floor(num)
  }
  return num
}

/**
 * 手机号分割
 * @param {*} phone
 * @returns
 */
export function phoneSplit(phone) {
  return phone.replace(/(?=(\d{4})+$)/g, '-')
}

/**
 * 防抖
 * @param {*} fn
 * @param {*} time
 * @returns
 */
export function debounce(fn, time) {
  // 定时器
  let timer = null
  return () => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(fn, time)
  }
}

/* Echarts图表字体、间距自适应 */
export const fitChartSize = (size, defalteWidth = 1920) => {
  let clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  if (!clientWidth) return size
  let scale = clientWidth / defalteWidth
  return Number((size * scale).toFixed(3))
}
