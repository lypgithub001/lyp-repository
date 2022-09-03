<template>
  <div class="carousel-container">
    <el-carousel height="520px" trigger="click" :autoplay="true">
      <el-carousel-item>
        <div class="carousel-container-item bg1">
          <div class="carousel-container-item_content">
            <!-- <img src="@/assets/img/login/login-banner-1-2.png" alt="" style="height: 284px; width: 628px" /> -->
            <!-- <div class="register">
              <button @click="toRegister">马上去注册</button>
            </div> -->
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="carousel-container-item bg2">
          <div class="carousel-container-item_content">
            <!-- <img src="@/assets/img/login/login-banner-2-2.png" alt="" style="height: 284px; width: 628px" /> -->
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="carousel-container-item bg3">
          <div class="carousel-container-item_content">
            <!-- <img src="@/assets/img/login/login-banner-3-2.png" alt="" style="height: 284px; width: 628px" /> -->
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import { toRefs, reactive, onMounted, ref } from 'vue'
export default {
  name: '',
  components: {},
  setup(props, { emit }) {
    const state = reactive({
      toRegister() {
        emit('register', 2)
      }
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>
<style lang="scss">
.carousel-container {
  position: relative;
  //   margin-bottom: 40px;
  .el-carousel__button {
    width: 40px !important;
    height: 4px;
    background: rgba(255, 255, 255, 0.5);
  }
  .is-active .el-carousel__button {
    background-color: #fff;
  }
  .bg1 {
    background-image: url('@/assets/img/login/login-banner-1-1.png');
  }
  .bg2 {
    background-image: url('@/assets/img/login/login-banner-2-1.png');
  }
  .bg3 {
    background-image: url('@/assets/img/login/login-banner-3-1.png');
    .purchase-mode {
      margin-bottom: 30px;
    }
  }
  .carousel-container-item {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    display: flex;
    align-items: center;
    .carousel-container-item_content {
      margin: 0 auto;
      width: 1200px;
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      .register {
        margin-left: 35px;
        position: absolute;
        top: 310px;
        left: 30px;
        button {
          padding: 7px 20px;
          border: 1px solid #ffffff;
          border-radius: 2px;
          background: transparent;
          color: #fff;
          cursor: pointer;
        }
      }
      .purchase-mode {
        display: flex;
        margin-left: 35px;
        > div:nth-child(2) {
          margin-left: 120px;
        }
        div {
          font-weight: 600;
          font-size: 24px;
          min-width: 272px;
          position: relative;
        }
        p {
          font-weight: 400;
          font-size: 16px;
          margin-top: 10px;
        }
        .square::before {
          top: 8px;
        }
      }
      .mall {
        font-size: 16px;
        margin-left: 35px;
      }
      .subsidy {
        margin-left: 35px;
        position: relative;
        font-weight: 600;
        font-size: 24px;
        display: flex;
        align-items: center;
        span {
          font-weight: 600;
          font-size: 32px;
          background: #ff4d4f;
          margin-left: 15px;
          padding: 2px 10px;
        }
      }
      .square::before {
        position: absolute;
        content: '';
        width: 16px;
        height: 16px;
        top: 18px;
        background: #ff4d4f;
        transform: rotate(45deg);
        left: -31px;
      }
      .important {
        font-weight: 600;
        font-size: 40px;
        margin-bottom: 40px;
      }
    }
  }
}
</style>
