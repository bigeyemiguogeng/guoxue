<template>
  <div class="guoxue-article-container">
    <article class="article-card">
      <div class="inner-border">
        <header class="article-header">
          <h1 class="article-title">从陶到瓷——中国传统陶瓷的发展史</h1>
          <div class="article-meta">
            <span class="meta-item">分类：陶瓷</span>
            <span class="meta-item">讲师：平台特邀</span>
            <span class="meta-item">日期：二〇二五</span>
          </div>
          <div class="decorative-divider"></div>
        </header>

        <section class="article-content">
          <p>
            中国是世界上著名的文明古国之一，为世界文化和科技繁荣谱写了绚丽的篇章，陶瓷的制作工艺及发展，更是其中闪耀的一颗明珠。可以说，一部陶瓷历史，就是一部人类的文明史，它记录了人类科技的进步和文化的发展，从石器时代的土陶到当今的高科技陶瓷，无一不是人类智慧的结晶。
          </p>
          <p>
            “陶瓷”一般是分为陶和瓷两大类，“陶瓷”实际上是陶器和瓷器两种器类的合称，瓷器由陶器脱胎而来。陶器和瓷器在原料、烧造温度、施釉等方面有很大的不同：胎体没有致密烧结的粘土和瓷石制品，统称为陶器；其中把烧造温度较高，烧结程度较好的那一部分分称为“硬陶”；把施釉的一种称为“釉陶”；而经高温烧成、胎体烧结程度较为致密、釉色品质优良的粘土或瓷石制品称为“瓷器”。中国传统陶瓷的发展，经历过一个相当漫长的历史时期，种类繁杂，工艺特殊。
          </p>
          <p>
            我们的祖先早在一万多年前就发明了陶器，距今约5000～7000年的仰韶文化时期，彩陶的制作已经非常繁荣，年代稍晚一些的马家窑文化，陶瓷表面光滑匀称，以黑色单彩加以装饰，陶器在满足最基本的用途之外，开始展现人们对美的追求。在西安半坡史前遗址出土了大量制作精美的彩陶器，令人叹为观止。这千数百年间，除日用餐饮器皿之外，祭祀礼仪所用之物也大为发展。
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