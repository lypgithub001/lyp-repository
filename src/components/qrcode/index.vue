<template>
  <div>
    <div v-if="imageUrl" :class="containerClass">
      <img :src="imageUrl" :class="imageClass" @click="downloadImage" crossorigin="anonymous" />
    </div>
  </div>
</template>
<script lang="ts" setup>
// https://www.npmjs.com/package/qrcode-vue3
import QRCodeStyling from 'qrcode-vue3/src/core/QRCodeStyling'
import { onMounted, ref, watch } from 'vue'
import { donwloadBase64Image } from './useDownLoadBase64Image'
//props
const props = defineProps({
  //宽度
  width: {
    type: Number,
    default: 300
  },
  //高度
  height: {
    type: Number,
    default: 300
  },
  //要转换二维码的字符串
  value: {
    type: String,
    required: true
  },
  //图片class
  imageClass: {
    type: String,
    default: ''
  },
  //   盒子class
  containerClass: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  qrOptions: {
    type: Object,
    default: () => ({
      typeNumber: 0,
      mode: 'Byte',
      errorCorrectionLevel: 'Q'
    })
  },
  imageOptions: {
    type: Object,
    default: () => ({
      hideBackgroundDots: true, //隐藏图像覆盖的所有点
      imageSize: 0.4, //图像大小的系数。不建议使用超过 0.5。越低越好
      margin: 0 //以 px 为单位的图像边距
    })
  },
  dotsOptions: {
    type: Object,
    default: () => ({
      // type: 'square',//QR点的样式（'rounded' 'dots' 'classy' 'classy-rounded' 'square' 'extra-rounded'）
      // color: '#6a1a4c'  //QR点颜色
      // gradient: {  //QR点的渐变色
      //   type: 'linear',
      //   rotation: 0,
      //   colorStops: [
      //     { offset: 0, color: '#6a1a4c' },
      //     { offset: 1, color: '#6a1a4c' }
      //   ]
      // }
    })
  },
  backgroundOptions: {
    type: Object,
    default: () => ({ color: '#ffffff' })
  },
  //角落中的方形样式选项
  cornersSquareOptions: {
    type: Object,
    default: () => ({ type: undefined, color: '#000000' })
  },
  //角的点样式选项
  cornersDotOptions: {
    type: Object,
    default: () => ({ type: undefined, color: '#000000' })
  },
  //文件类型
  fileExt: {
    type: String,
    default: 'png'
  },
  //是否可下载
  download: {
    type: Boolean,
    default: false
  },
  //文件名
  fileName: {
    type: String,
    default: '二维码.png'
  },
  //下载选项名称和扩展名
  downloadOptions: {
    type: Object,
    default: () => ({ name: 'vqr', extension: 'png' })
  }
})

const imageUrl = ref<string>('')
const qrCode = ref(
  new QRCodeStyling({
    data: props.value,
    width: props.width,
    height: props.height,
    qrOptions: props.qrOptions,
    imageOptions: props.imageOptions,
    dotsOptions: props.dotsOptions,
    backgroundOptions: props.backgroundOptions,
    image: props.image,
    cornersSquareOptions: props.cornersSquareOptions,
    cornersDotOptions: props.cornersDotOptions
  })
)
watch(
  () => props.value,
  async () => {
    qrCode.value = new QRCodeStyling({
      data: props.value,
      width: props.width,
      height: props.height,
      qrOptions: props.qrOptions,
      imageOptions: props.imageOptions,
      dotsOptions: props.dotsOptions,
      backgroundOptions: props.backgroundOptions,
      image: props.image,
      cornersSquareOptions: props.cornersSquareOptions,
      cornersDotOptions: props.cornersDotOptions
    })

    imageUrl.value = await qrCode.value.getImageUrl(props.fileExt)
  }
)
onMounted(async () => {
  imageUrl.value = await qrCode.value.getImageUrl(props.fileExt)
})
function downloadImage(): void {
  console.log('base64 data =>', imageUrl.value)
  if (props.download) {
    donwloadBase64Image(imageUrl, props.fileName)
  }
}
</script>
