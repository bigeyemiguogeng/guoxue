<template>
  <div class="guoxue-article-container">
    <article class="article-card">
      <div class="inner-border">
        <header class="article-header">
          <h1 class="article-title">《尚书》简介</h1>
          <div class="article-meta">
            <span class="meta-item">分类：诸子百家</span>
            <span class="meta-item">讲师：平台特邀</span>
            <span class="meta-item">日期：二〇二五</span>
          </div>
          <div class="decorative-divider"></div>
        </header>

        <section class="article-content">
          <p>
            尚书》是中国古代最早的一部历史文献汇编。最早时它被称为《书》，到了汉代被叫做《尚书》，意思是“上古之书”。汉代以后，《尚书》成为儒家的重要经典之一，所以又叫做《书经》。这部书的写作和编辑年代、作者已很难确定，但在汉代以前就已又了定本。据说孔子曾经编纂过《尚书》，而不少人认为这个说法不可靠。
          </p>
          <p>
            尚书》所记载的历史，上起传说中的尧虞舜时代，下至东周(春秋中期)，历史约1500多年。它的基本内容是古代帝王的文告和军臣谈话记录，由此可以推断作者很可能是史官。《尚书》作为我国最早的政事史料汇编，记载了虞、夏商、周的许多重要史实，真实的 反映了 这一历史时期的天文、地理、哲学思想、教育、刑法和典章制度等，对后世产生过重要影响，是我们了解古代社会的珍贵史料。
          </p>
          <p>
            《尚书》用散文写成，按朝代编排，分成《虞书》、《夏书》、《商书》和《周书》。它大致有四种体式：一是“典”，主要记载当时的典章制度；二是“训诰”，包括君臣之间、大臣之间的谈话和祭神的祷告辞；三是“誓”，记录了君王和诸侯的誓众辞；四是“命”，记载了帝王任命官员、赏赐诸侯的册命。《尚书》使用的语言、词汇比较古老，因而较难读懂。
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