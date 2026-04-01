<template>
  <div class="guoxue-container">
    <div class="content-card">
      <div class="inner-border">
        <h2 class="title">{{ isPlaying ? '名师讲堂 · 正在播放' : '名师讲堂 · 视频教学' }}</h2>
        <div class="divider"></div>

        <div v-if="!isPlaying" class="video-list-wrapper">
          <div 
            v-for="item in videoList" 
            :key="item.id" 
            class="bili-item"
            @click="handlePlay(item)"
          >
            <div class="cover-container">
              <img :src="item.coverUrl" class="cover-img" />
              <span class="duration-tag">视频教学</span>
            </div>
            
            <div class="info-container">
              <h3 class="v-title">{{ item.title }}</h3>
              <div class="v-meta">
                <span class="v-author">UP {{ item.author }}</span>
                <span class="v-date">{{ item.publishtime }}</span>
              </div>
            </div>
          </div>
          
          <div v-if="videoList.length === 0" class="empty-state">
            暂无视频数据，请检查数据库条件 (type='视频' 且 classify_id=3)
          </div>
        </div>

        <div v-else class="player-wrapper">
          <div class="player-header">
            <button class="back-btn" @click="isPlaying = false"> ⬅ 返回列表 </button>
          </div>
          <div class="iframe-container">
            <iframe 
              :src="currentVideoUrl" 
              scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"
              class="bili-iframe"
            ></iframe>
          </div>
        </div>

        <div class="footer-decoration">
          <span>—— 传道 · 授业 · 解惑 ——</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getVideoList } from '@/services/videoService';

const videoList = ref([]);
const isPlaying = ref(false);
const currentVideoUrl = ref('');

/**
 * 从 URL 中提取 B站 BV 号
 * 支持格式：https://www.bilibili.com/video/BV1xxxx/
 */
const extractBvid = (url) => {
  if (!url) return '';
  const match = url.match(/BV[a-zA-Z0-9]+/);
  return match ? match[0] : '';
};

onMounted(async () => {
  const res = await getVideoList();
  console.log("前端收到数据:", res);

  // 确保处理的是数组
  const data = Array.isArray(res) ? res : (res.data || []);

  videoList.value = data.map(item => ({
    ...item,
    // 匹配后端 SQL 别名
    id: item.id,
    videoUrl: item.videourl, 
    author: item.author || '名师',
    title: `课程：视频 ID ${item.id}`, // 若数据库无标题字段则生成默认标题
    publishtime: item.publishtime || '',
    // 使用占位图作为封面
    coverUrl: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=300' 
  }));
});

const handlePlay = (item) => {
  const bvid = extractBvid(item.videoUrl);
  if (bvid) {
    currentVideoUrl.value = `//player.bilibili.com/player.html?bvid=${bvid}&high_quality=1&danmaku=0`;
    isPlaying.value = true;
  } else {
    alert('该条目的 url 字段中未检测到有效的 B站 BV 号');
  }
};
</script>

<style scoped>
/* 容器及边框 (还原图一) */
.guoxue-container { display: flex; justify-content: center; padding: 40px 20px; background-color: #fdfaf5; min-height: 100vh; }
.content-card { background-color: #fff; border: 2px solid #8b4513; padding: 12px; max-width: 900px; width: 100%; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
.inner-border { border: 1px solid #d2b48c; padding: 30px; text-align: center; }
.title { color: #a52a2a; letter-spacing: 4px; font-weight: bold; margin: 0; }
.divider { height: 2px; background: linear-gradient(to right, transparent, #8b4513, transparent); margin: 15px auto 25px; width: 50%; }

/* 列表条目 (还原图二) */
.video-list-wrapper { display: flex; flex-direction: column; gap: 16px; text-align: left; }
.bili-item { display: flex; gap: 16px; padding: 12px; cursor: pointer; border-radius: 8px; transition: background 0.3s; }
.bili-item:hover { background-color: #f8f8f8; }
.cover-container { position: relative; width: 180px; height: 110px; flex-shrink: 0; }
.cover-img { width: 100%; height: 100%; border-radius: 6px; object-fit: cover; border: 1px solid #eee; }
.duration-tag { position: absolute; bottom: 6px; right: 6px; background: rgba(0,0,0,0.7); color: #fff; font-size: 12px; padding: 2px 6px; border-radius: 4px; }
.info-container { display: flex; flex-direction: column; justify-content: flex-start; padding-top: 4px; }
.v-title { font-size: 16px; color: #222; margin: 0 0 8px 0; line-height: 1.4; }
.v-meta { font-size: 13px; color: #9499a0; display: flex; gap: 15px; }

/* 播放器 */
.player-header { text-align: left; margin-bottom: 15px; }
.back-btn { background: none; border: 1px solid #a52a2a; color: #a52a2a; padding: 6px 16px; cursor: pointer; border-radius: 4px; }
.iframe-container { position: relative; width: 100%; padding-bottom: 56.25%; height: 0; }
.bili-iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 8px; }

.footer-decoration { margin-top: 30px; color: #999; font-size: 0.85em; letter-spacing: 2px; }
.empty-state { padding: 50px; color: #ccc; }
</style>