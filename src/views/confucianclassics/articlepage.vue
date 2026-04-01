<template>
  <div class="guoxue-article-container">
    <article class="article-card">
      <div class="inner-border">
        <header class="article-header">
          <h1 class="article-title">读古典书籍，先了解“经、史、子、集”</h1>
          <div class="article-meta">
            <span class="meta-item">分类：经史子集</span>
            <span class="meta-item">讲师：平台特邀</span>
            <span class="meta-item">日期：二〇二五</span>
          </div>
          <div class="decorative-divider"></div>
        </header>

        <section class="article-content">
          <p>
            “经史子集”是中国古籍按内容区分的四大部类。

说起来，我国历代产生的典籍难以数计，留存至今的尚有8万余种之多，对古籍的大规模整理很早就开始了。

西汉时，按六艺、诸子、兵书、数术、方技、诗赋六大类，加上概论性质的辑略，总题《七略》。不过该书早已亡佚，它的基本内容都被保存在《汉书·艺文志》中。

四部体制的最终确立，体现在《隋书·经籍志》中，这部目录实际由唐初名臣魏征所编，里面正式标注经、史、子、集四部的名称，并进一步细分为40个类目。
          </p>
          <p>
            经书，是指儒家经典著作，收录了儒家的“十三经”及相关著作。

分为易类、书类、诗类、礼类、春秋类、孝经类、五经总义类、四书类、乐类、小学类10个大类。

最初为诗、书、礼、易、春秋“五经”。从唐代到宋代，形成十三经，包括：

《诗经》、《尚书》、《周易》

《周礼》、《仪礼》、《礼记》

《论语》、《尔雅》、《孝经》、《孟子》

《左传》、《公羊传》、《谷梁传》
          </p>
          <p>
            史书，指各种体裁的历史著作。

分为正史类、编年类、纪事本末类、杂史类、别史类、诏令奏议类、传记类、史钞类、载记类、时令类、地理类、职官类、政书类、目录类、史评类15个大类。

其中仅正史就有《二十六史》。

从司马迁的《史纪》开始，以后几乎每朝一史，清乾隆年间诏定二十四史为正史。

1921年北洋军阀政府又增《新元史》，合称《二十五史》，不久，又将《清史稿》合编其中，合称《二十六史》，包含：

《史记》、《汉书》、《后汉书》

《三国志》、《晋书》、《宋书》

《南齐书》、《梁书》、《陈书》

《魏书》、《北齐书》、《周书》

《隋书》、《南史》、《北史》

《旧唐书》、《新唐书》、《旧五代史》

《新五代史》、《宋史》、《辽史》

《金史》、《元史》、《明史》

《新元史》、《清史稿》
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