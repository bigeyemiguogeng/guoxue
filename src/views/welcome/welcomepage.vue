<template>
  <div class="welcome-container">
    <header class="platform-header">
      <h1 class="platform-name">国学新声</h1>
      <p class="welcome-message">弘扬中华优秀传统文化，共筑精神家园</p>
    </header>

    <section class="carousel-section">
      <div class="carousel-wrapper">
        <transition name="fade" mode="out-in">
          <div 
            :key="currentIndex"
            class="carousel-item"
          >
            <img :src="currentImage.url" :alt="currentImage.alt">
          </div>
        </transition>
      </div>
      
      <div class="carousel-dots">
        <span
          v-for="(image, index) in carouselImages"
          :key="'dot-' + index"
          :class="['dot', { active: index === currentIndex }]"
          @click="goToSlide(index)"
        ></span>
      </div>
    </section>

    <section class="modules-section">
      <h2 class="section-title">✨ 核心内容</h2>
      <div class="module-list">
        <div class="module-card primary-module" @click="navigateTo('/recitation')">
          <div class="icon">📖</div>
          <h3>经典诵读</h3>
          <p>学习四书五经，感受先贤智慧。</p>
        </div>

        <div class="module-card secondary-module" @click="navigateTo('/lecture')">
          <div class="icon">🏛️</div>
          <h3>文化讲堂</h3>
          <p>名师解读历史文化、礼仪哲学。</p>
        </div>
      </div>
    </section>

    <footer class="platform-footer">
        <p>© 2025 国学新声 版权所有</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const carouselImages = ref([
  { url: 'https://q0.itc.cn/q_70/images01/20240410/f6060609b0e745ab8adf82cbc3f4cf76.jpeg', alt: '书法1' } ,
  { url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage109.360doc.com%2FDownloadImg%2F2022%2F07%2F0813%2F248198085_3_20220708010949300.jpeg&refer=http%3A%2F%2Fimage109.360doc.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1767708436&t=b4cf783ba1170115facc829763d49fbb', alt: '书法2' } ,
  { url: 'https://img0.baidu.com/it/u=680640759,3050208901&fm=253&app=120&f=JPEG?w=1422&h=800', alt: '水墨画1' }, 
  { url: 'https://img1.baidu.com/it/u=760180362,2299495793&fm=253&app=138&f=JPEG?w=889&h=500', alt: '水墨画2' }    
  
]);

const currentIndex = ref(0);
const timer = ref(null);
const intervalTime = 5000;

// 计算当前显示的图片
const currentImage = computed(() => {
  return carouselImages.value[currentIndex.value] || carouselImages.value[0];
}); 

const goToSlide = (index) => {
  if (index >= 0 && index < carouselImages.value.length) {
    currentIndex.value = index;
    resetTimer();
  }
};

const startAutoPlay = () => {
  if (timer.value) {
    clearInterval(timer.value);
  }
  timer.value = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % carouselImages.value.length;
  }, intervalTime);
};

const resetTimer = () => {
  if (timer.value) {
    clearInterval(timer.value);
    timer.value = null;
  }
  startAutoPlay();
};

const navigateTo = (path) => {
  // 使用 window.location 进行导航
  if (path) {
    window.location.hash = path;
  }
};

onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  if (timer.value) {
    clearInterval(timer.value);
    timer.value = null;
  }
});
</script>

<style scoped>
.welcome-container {
  color: #333;
  padding: 20px;
}

.platform-header {
  text-align: center;
}

.platform-name {
  color: #8b4513;
  margin-bottom: 5px;
}

.welcome-message {
  color: #5d4037;
  margin: 0;
}

.carousel-section {
  position: relative;
  width: 95%;
  max-width: 1000px;
  margin: 0 auto 30px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  border-radius: 4px;
}

.carousel-wrapper {
  width: 100%;
  height: 500px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-item {
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.carousel-dots {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
}

.dot {
  width: 8px;
  height: 8px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;
}

.dot.active {
  background-color: #8b4513;
  transform: scale(1.2);
}

.modules-section {
  width: 95%;
  max-width: 1000px;
  margin: 30px auto;
  text-align: center;
}

.section-title {
  color: #8b4513;
  margin-bottom: 25px;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 8px;
  display: inline-block;
}

.module-list {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.module-card {
  background-color: #fff;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  padding: 25px;
  width: 250px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  text-align: center;
}

.module-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.icon {
  margin-bottom: 10px;
}

.module-card h3 {
  color: #333;
  margin-bottom: 8px;
}

.module-card p {
  color: #666;
}

.primary-module {
  border-top: 4px solid #a0522d;
}

.secondary-module {
  border-top: 4px solid #38761d;
}

.platform-footer {
  text-align: center;
  padding: 10px;
  margin-top: 20px;
  border-top: 1px solid #f0f0f0;
  color: #aaa;
}
</style>