<template>
  <div class="error-page">
    <div class="error-code">
      <svg-icon :name="'404img'" width="300px" height="300px"></svg-icon>
      <div class="error-desc">暂无权限或检查网址是否正确，可<span class="error-btn" type="primary" size="large" @click="goBack">返回上一页</span></div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: '404',
  setup() {
    const router = useRouter()
    const goBack = () => {
      router.go(-1)
    }
    return {
      goBack
    }
  }
}
</script>

<style lang="scss" scoped>
.error-page {
  width: 100%;
  height: 100%;
  background: #f2f3f5;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}
.error-code {
  display: inline-block;
  width: 100%;
  height: 550px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  img {
    margin: 78px auto 89px;
    display: block;
  }
}
.svg-icon {
  margin: 0 auto;
  display: block;
}
.error-desc {
  font-size: 18px;
  font-weight: 400;
  color: #718096;
  margin-top: 20px;
  text-align: center;
}
.error-handle {
  margin-top: 30px;
  padding-bottom: 200px;
}
.error-btn {
  color: #1664ff;
  cursor: pointer;
}
</style>
