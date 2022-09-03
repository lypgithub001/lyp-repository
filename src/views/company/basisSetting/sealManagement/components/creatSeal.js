export class createSeal {
  constructor(id, mdtext, dw, edw) {
    this.id = id
    this.mdtext = mdtext
    this.dw = dw
    this.edw = edw
  }
  createSealEx() {
    //创建圆五角英文章
    this.createEnglishSeal(this.id, this.dw, this.edw, this.mdtext)
  }
  createSealCx() {
    //创建圆五角中文章
    this.createChineseSeal(this.id, this.dw, this.mdtext)
  }
  createEllipseSealEx() {
    //创建椭圆英文章
    this.createEnglishEllipse(this.id, this.dw, this.edw, this.mdtext)
  }
  createEllipseSealCx() {
    //创建椭圆中文章
    this.createChineseEllipse(this.id, this.dw, this.mdtext)
  }

  createChineseSeal(id, company, name) {
    var canvas = document.getElementById(id)
    var context = canvas.getContext('2d')
    // 绘制印章边框
    var width = canvas.width / 2
    var height = canvas.height / 2
    context.lineWidth = 2
    context.strokeStyle = '#FF4D4F'
    context.beginPath()
    context.arc(width, height, 78, 0, Math.PI * 2)
    context.stroke()
    context.save()

    context.lineWidth = 1
    context.strokeStyle = '#FF4D4F'
    context.beginPath()
    context.arc(width, height, 75, 0, Math.PI * 2)
    context.stroke()
    context.save()
    //画五角星
    this.create5star(context, width, height, 25, '#FF4D4F', 0)
    // 绘制印章名称
    context.font = '16px Helvetica'
    context.textBaseline = 'middle' //设置文本的垂直对齐方式
    context.textAlign = 'center' //设置文本的水平对对齐方式
    context.lineWidth = 1
    context.fillStyle = '#FF4D4F'
    context.fillText(name, width, height + 53)
    // 绘制印章单位
    context.translate(width, height) // 平移到此位置,
    context.font = '18px Helvetica'
    var count = company.length // 字数
    var angle = (4 * Math.PI) / (3 * (count - 1)) // 字间角度
    var chars = company.split('')
    var c
    for (var i = 0; i < count; i++) {
      c = chars[i] // 须要绘制的字符
      if (i == 0) context.rotate((5 * Math.PI) / 6)
      else context.rotate(angle)
      context.save()
      context.translate(64, 0) // 平移到此位置,此时字和x轴垂直
      context.rotate(Math.PI / 2) // 旋转90度,让字平行于x轴
      context.fillText(c, 0, 5) // 此点为字的中心点
      context.restore()
    }
  }
  createEnglishSeal(id, company, ecompany, name) {
    var canvas = document.getElementById(id)
    var context = canvas.getContext('2d')
    context.translate(0, 0) //移动坐标原点
    // 绘制印章边框
    var width = canvas.width / 2
    var height = canvas.height / 2
    //边框1
    context.lineWidth = 2
    context.strokeStyle = '#FF4D4F'
    context.beginPath()
    context.arc(width, height, 78, 0, Math.PI * 2)
    context.stroke()
    context.save()

    //边框2
    context.lineWidth = 1
    context.strokeStyle = '#FF4D4F'
    context.beginPath()
    context.arc(width, height, 63, 0, Math.PI * 2)
    context.stroke()
    context.save()
    //画五角星
    this.create5star(context, width, height, 20, '#FF4D4F', 0)

    // 绘制印章类型
    context.font = 'bolder 15px SimSun'
    context.textBaseline = 'middle' //设置文本的垂直对齐方式
    context.textAlign = 'center' //设置文本的水平对对齐方式
    context.lineWidth = 1
    context.fillStyle = '#FF4D4F'
    context.fillText(name, width, height + 50)
    // 绘制印章中文单位
    context.translate(width, height) // 平移到此位置,
    context.font = 'bolder 16px SimSun'
    var count = company.length // 字数
    var angle = (4 * Math.PI) / (3 * (count - 1)) // 字间角度
    var chars = company.split('')
    var c
    for (var i = 0; i < count; i++) {
      c = chars[i] // 须要绘制的字符
      if (i == 0) context.rotate((5 * Math.PI) / 6)
      else context.rotate(angle)
      context.save()
      // 平移到此位置,此时字和x轴垂直，第一个参数是与圆外边的距离，越大距离越近
      context.translate(52, 0)
      context.rotate(Math.PI / 2) // 旋转90度,让字平行于x轴
      context.fillText(c, 0, 5) // 此点为字的中心点
      context.restore()
    }
    //绘制印章英文单位
    context.translate(width - 80, height - 80) // 平移到此位置,
    context.font = 'bolder 10px SimSun'
    var ecount = ecompany.length // 字数
    var eangle = (5 * Math.PI) / (3 * ecount) // 字间角度
    var echars = ecompany.split('')
    var ec
    for (var j = 0; j < ecount; j++) {
      ec = echars[j] // 须要绘制的字符
      if (j == 0) context.rotate((6 * Math.PI) / 7 - 1)
      else context.rotate(eangle)
      context.save()
      // 平移到此位置,此时字和x轴垂直，第一个参数是与圆外边的距离，越大距离越近
      context.translate(74, 0)
      context.rotate(Math.PI / 2) // 旋转90度,让字平行于x轴
      context.fillText(ec, 0, 4.8) // 此点为字的中心点
      context.restore()
    }
  }
  //绘制五角星
  create5star(context, sx, sy, radius, color, rotato) {
    context.save()
    context.fillStyle = color
    context.translate(sx, sy) //移动坐标原点
    context.rotate(Math.PI + rotato) //旋转
    context.beginPath() //建立路径
    var x = Math.sin(0)
    var y = Math.cos(0)
    var dig = (Math.PI / 5) * 4
    for (var i = 0; i < 5; i++) {
      //画五角星的五条边
      var x = Math.sin(i * dig)
      var y = Math.cos(i * dig)
      context.lineTo(x * radius, y * radius)
    }
    context.closePath()
    context.stroke()
    context.fill()
    context.restore()
  }

  createEnglishEllipse(id, company, ecompany, name) {
    var canvas = document.getElementById(id)
    var context = canvas.getContext('2d')
    context.strokeStyle = '#FF4D4F' //设置边框颜色
    context.textBaseline = 'middle' //设置文本的垂直对齐方式
    context.textAlign = 'center' //设置文本的水平对对齐方式
    context.lineWidth = 2 //椭圆1宽度
    //3个参数： 左边距 上边据 宽度 椭圆扁度
    this.BezierEllipse4(context, 85, 79, 79, 55) //椭圆1
    context.lineWidth = 1
    this.BezierEllipse4(context, 85, 79, 76, 52) //椭圆2
    context.lineWidth = 2
    this.BezierEllipse4(context, 85, 79, 63, 39) //椭圆3
    // 绘制印章类型
    context.font = 'bolder 10px SimSun' //设置字体大小 样式
    context.fillStyle = '#FF4D4F' //设置字体颜色
    context.fillText(name, canvas.width / 2 + 3, canvas.height / 2 + 25)
    context.save() //保存上述操做
    //绘制英文
    var circle = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      radius: 58
    }
    var startAngle = 220 //控制字符起始位置度数
    var endAngle = -40 //首位字符相隔度数
    var radius = circle.radius //圆的半径
    var angleDecrement = (startAngle - endAngle) / (ecompany.length - 1) //每一个字母占的弧度
    context.font = 'bolder 10px SimSun'
    context.lineWidth = 1 //设置字体胖瘦
    var ratioX = 70 / circle.radius //横轴缩放比率
    var ratioY = 45 / circle.radius //纵轴缩放比率
    //进行缩放（均匀压缩） 重点
    context.scale(ratioX, ratioY)
    var index = 0
    for (var index = 0; index < ecompany.length; index++) {
      //保存以前的设置开始绘画
      context.save()
      context.beginPath()
      context.translate(circle.x + Math.cos((Math.PI / 180) * startAngle) * radius - 12, circle.y - Math.sin((Math.PI / 180) * startAngle) * radius + 19) //绘制点 +-微调
      context.rotate(Math.PI / 2 - (Math.PI / 180) * startAngle) //Math.PI/2为旋转90度  Math.PI/180*X为旋转多少度
      context.fillText(ecompany.charAt(index), 0, 0)
      context.strokeText(ecompany.charAt(index), 0, 0)
      startAngle -= angleDecrement
      context.restore()
    }

    // 绘制印章类型
    context.font = 'bolder 14px SimSun'
    context.lineWidth = 1
    context.fillStyle = '#FF4D4F'
    context.fillText(company.substring(0, 6), canvas.width / 2 - 11, canvas.height / 2 + 6)
    context.save()
    context.font = 'bolder 14px SimSun'
    context.lineWidth = 1
    context.fillStyle = '#FF4D4F'
    context.fillText(company.substring(6, 12), canvas.width / 2 - 12, canvas.height / 2 + 25)
    context.save()
    context.font = 'bolder 14px SimSun'
    context.lineWidth = 1
    context.fillStyle = '#FF4D4F'
    context.fillText(company.substring(12, company.length), canvas.width / 2 - 12, canvas.height / 2 + 40)
    context.save()
  }
  createChineseEllipse(id, company, name) {
    var canvas = document.getElementById(id)
    var context = canvas.getContext('2d')
    context.strokeStyle = '#FF4D4F' //设置文本颜色
    context.textBaseline = 'middle' //设置文本的垂直对齐方式
    context.textAlign = 'center' //设置文本的水平对对齐方式
    context.lineWidth = 2 //椭圆1宽度
    //3个参数： 左边距 上边据 宽度 椭圆扁度
    this.BezierEllipse4(context, 85, 79, 79, 55) //椭圆1
    context.lineWidth = 1
    this.BezierEllipse4(context, 85, 79, 76, 52) //椭圆2

    // 绘制印章类型
    context.font = 'bolder 15px SimSun'
    context.lineWidth = 1
    context.fillStyle = '#FF4D4F'
    context.fillText(name, canvas.width / 2 + 3, canvas.height / 2 + 10)
    context.save()

    //绘制中文
    var ccircle = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      radius: 59
    }
    var cstartAngle = 170 //控制字符起始位置度数
    var cendAngle = 15 //首位字符相隔度数
    var cradius = ccircle.radius //圆的半径
    var cangleDecrement = (cstartAngle - cendAngle) / (company.length - 1) //每一个字母占的弧度
    context.font = '12px SimSun'
    var cratioX = 66 / ccircle.radius //横轴缩放比率
    var cratioY = 57 / ccircle.radius //纵轴缩放比率
    //进行缩放（均匀压缩）
    context.scale(cratioX, cratioY)
    var cindex = 0
    for (var cindex = 0; cindex < company.length; cindex++) {
      context.save()
      context.beginPath()
      //绘制点
      context.translate(ccircle.x + Math.cos((Math.PI / 180) * cstartAngle) * cradius - 6, ccircle.y - Math.sin((Math.PI / 180) * cstartAngle) * cradius + 14)
      context.rotate(Math.PI / 2 - (Math.PI / 180) * cstartAngle) //Math.PI/2为旋转90度  Math.PI/180*X为旋转多少度
      context.fillText(company.charAt(cindex), 0, 0)
      context.strokeText(company.charAt(cindex), 0, 0)
      cstartAngle -= cangleDecrement
      context.restore()
    }
  }
  BezierEllipse4(ctx, x, y, a, b) {
    var k = 0.5522848,
      ox = a * k, // 水平控制点偏移量
      oy = b * k // 垂直控制点偏移量</p> <p>
    ctx.beginPath()
    //从椭圆的左端点开始顺时针绘制四条三次贝塞尔曲线
    ctx.moveTo(x - a, y)
    ctx.bezierCurveTo(x - a, y - oy, x - ox, y - b, x, y - b)
    ctx.bezierCurveTo(x + ox, y - b, x + a, y - oy, x + a, y)
    ctx.bezierCurveTo(x + a, y + oy, x + ox, y + b, x, y + b)
    ctx.bezierCurveTo(x - ox, y + b, x - a, y + oy, x - a, y)
    ctx.closePath()
    ctx.stroke()
  }
}
