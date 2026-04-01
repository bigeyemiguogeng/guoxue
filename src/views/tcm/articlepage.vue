<template>
  <div class="guoxue-article-container">
    <article class="article-card">
      <div class="inner-border">
        <header class="article-header">
          <h1 class="article-title">论语 · 学而篇</h1>
          <div class="article-meta">
            <span class="meta-item">分类：中医四大基础理论</span>
            <span class="meta-item">讲师：平台特邀</span>
            <span class="meta-item">日期：二〇二五 · 仲春</span>
          </div>
          <div class="decorative-divider"></div>
        </header>

        <section class="article-content">
          <p>
            1、中医学有两个主要特点：一是整体观念，二是辨证论治。
          </p>
          <p>
  2、证，也叫证候，是机体在疾病过程中的某一阶段的病理概括。
          </p>
          <p>
3、辨证，就是将四诊所收集的症状和体征等资料，通过分析、综合，辨清疾病的原因、性质、部位，以及邪正之间的关系，概括、判断为某种性质的证候的过程。          </p>
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
