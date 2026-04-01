<template>
  <div class="guoxue-article-container">
    <article class="article-card">
      <div class="inner-border">
        <header class="article-header">
          <h1 class="article-title">什么是茶道？</h1>
          <div class="article-meta">
            <span class="meta-item">分类：茶道</span>
            <span class="meta-item">讲师：平台特邀</span>
            <span class="meta-item">日期：二〇二五</span>
          </div>
          <div class="decorative-divider"></div>
        </header>

        <section class="article-content">
          <p>
            “中国茶道”，包括茶艺和茶道精神两部分。茶艺，是指制茶、煮茶、品茶三方面的艺术，而茶道精神，是指通过茶艺，对人们施以礼法教育、提高人的道德修养。“中国茶道精神”，是指从有礼节的茶道中，体现中国人追求心性与自然和谐合一，以及儒家积极入世的思想。
          </p>
          <p>
            茶与儒释道

中国茶道精神是融汇中华文化精萃而成的产物，包含儒释道三家思想，亦是中国茶文化的精华。儒家精神在中国茶文化中主要发挥政治功能，通过茗饮贯彻儒家“修身、齐家、治国、平天下”的大道理，建立“茶礼”。道家思想亦为中国茶文化作出了重要贡献，特别是茶文化中的艺术境界、哲学观、自然观，以及对人的养生作用方面。佛家思想的茶文化则令人真正了解茶道的真谛，从茶中了解人生的苦难，得悟正道。
          </p>
          <p>
            儒家茶礼

中国茶道文化吸收了儒家所提倡“礼”的精神，于是便有“茶礼”的出现。自唐宋年间开始，上至宫廷，下至民间的重要活动，如皇室祭祀、大婚、殿试，以及平民家庭的婚丧、祭祀、待客等，都有指定的茶仪制度，以示尊重。此外，儒家中庸之道亦同时植根于茶道之中，主张人在饮茶过程中可作思想沟通，从而创造出和谐的气氛，达到互爱、互敬、互相帮助的友好境界。
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