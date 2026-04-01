<template>
  <div class="guoxue-article-container">
    <article class="article-card">
      <div class="inner-border">
        <header class="article-header">
          <h1 class="article-title">论语 · 学而篇</h1>
          <div class="article-meta">
            <span class="meta-item">分类：毛笔的历史与文化：从起源到现代的探索之旅</span>
            <span class="meta-item">讲师：平台特邀</span>
            <span class="meta-item">日期：二〇二五 · 仲春</span>
          </div>
          <div class="decorative-divider"></div>
        </header>

        <section class="article-content">
          <p>
            新石器时代的毛笔雏形
在中国仰韶文化时期（约公元前2500年）的陶器上，发现了似乎由纤维状工具绘制的纹饰。这些装饰很可能是用捣碎的植物枝条制成的早期刷具所画，被认为是毛笔的原型。
          </p>
          <p>
   殷代（公元前17世纪至前11世纪）
殷代出现了甲骨文，虽为以刀刻在龟甲与兽骨上的文字，但有研究推测刻字之前可能已用毛笔起稿，说明毛笔当时已初现雏形。
          </p>
          <p>
周代（公元前11世纪至前256年）
青铜器上的铭文线条流畅优美，显示出毛笔的书写意趣。此时期，“笔”字的形体也逐渐形成，由“⺮”（竹字头）与“聿”（毛笔的象形）组成，象征以竹制笔杆与书写工具的结合。
          </p>
           </section>

        <footer class="article-footer">
          <div class="footer-seal">国学精粹</div>
        </footer>
      </div>
    </article>
  </div>
</template>

<style scoped>
/* 全局背景：带有淡淡纹理感的色调 */
.guoxue-article-container {
  background-color: #f4f0e6;
  min-height: 100vh;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
}

/* 文章主卡片 */
.article-card {
  background-color: #fff;
  max-width: 800px;
  width: 100%;
  border: 2px solid #5c4033; /* 深棕色边框 */
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  position: relative;
}

/* 内边框设计 */
.inner-border {
  margin: 10px;
  border: 1px solid #d2b48c;
  padding: 50px 60px;
}

/* 标题样式 */
.article-title {
  color: #8b0000; /* 深红 */
  font-size: 2.2em;
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
}

/* 文章元信息 */
.article-meta {
  text-align: center;
  color: #777;
  font-size: 0.9em;
  margin-bottom: 20px;
}

.meta-item {
  margin: 0 15px;
}

/* 装饰性分割线 */
.decorative-divider {
  height: 3px;
  border-top: 1px solid #8b4513;
  border-bottom: 1px solid #8b4513;
  margin: 0 auto 40px;
  width: 80%;
}

/* 正文样式 */
.article-content {
  color: #333;
  line-height: 2; /* 较宽的行间距，适合阅读 */
  text-align: justify;
}

.article-content p {
  margin-bottom: 25px;
  text-indent: 2em; /* 首行缩进 */
  font-size: 1.15em;
}

/* 来源引用样式 */
.source-reference {
  margin-top: 50px;
  padding: 15px;
  background-color: #f9f9f9;
  border-left: 4px solid #a52a2a;
  font-size: 0.85em;
  word-break: break-all;
}

.source-reference a {
  color: #8b4513;
  text-decoration: none;
}

/* 底部印章感装饰 */
.article-footer {
  margin-top: 60px;
  display: flex;
  justify-content: center;
}

.footer-seal {
  border: 2px solid #a52a2a;
  color: #a52a2a;
  padding: 5px 10px;
  font-weight: bold;
  opacity: 0.8;
  transform: rotate(-5deg); /* 模拟印章歪斜感 */
}

/* 移动端适配 */
@media (max-width: 600px) {
  .inner-border {
    padding: 30px 20px;
  }
  .article-title {
    font-size: 1.6em;
  }
}
</style>
