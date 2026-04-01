<template>
  <div class="guoxue-container">
    <div class="content-card">
      <div class="inner-border">
        <h2 class="title">名师讲堂 · 视频教学</h2>
        <div class="divider"></div>
        
        <div class="video-frame-container">
          <iframe 
            src="//player.bilibili.com/player.html?bvid=BV1oy4y1i7uv&page=1&high_quality=1&danmaku=0" 
            scrolling="no" 
            border="0" 
            frameborder="no" 
            framespacing="0" 
            allowfullscreen="true"
            class="bili-player"
          >
          </iframe>
        </div>

        <div class="footer-decoration">
          <span>—— 传道 · 授业 · 解惑 ——</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 容器背景：淡雅宣纸色 */
.guoxue-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  background-color: #fdfaf5;
}

/* 主卡片：古籍装帧质感 */
.content-card {
  background-color: #fff;
  border: 2px solid #8b4513; /* 赭石 */
  padding: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  max-width: 800px;
  width: 100%;
}

/* 内边框装饰 */
.inner-border {
  border: 1px solid #d2b48c; /* 浅褐 */
  padding: 30px;
  text-align: center;
}

/* 标题：朱砂红 */
.title {
  color: #a52a2a;
  margin-top: 0;
  letter-spacing: 4px;
  font-weight: bold;
}

/* 分隔线：水墨渐变 */
.divider {
  height: 2px;
  background: linear-gradient(to right, transparent, #8b4513, transparent);
  margin: 15px auto 25px;
  width: 50%;
}

/* 视频响应式容器 (16:9 比例) */
.video-frame-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
  border: 1px solid #eee;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.bili-player {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* 页脚装饰 */
.footer-decoration {
  margin-top: 30px;
  color: #999;
  font-size: 0.85em;
  letter-spacing: 2px;
}
</style>