<template>
  <div class="container-sm bg-rice-white px-0">
    <!-- Banner -->
    <div class="container px-0 mb-20 py-24 px-0 mb-24" style="background: #171426">
      <img src="/pics/ye-jian-dong-wu-yuan.jpg" alt="夜間動物園" class="w-100" />
    </div>

    <div class="container mb-40">
      <h3 class="noto-serif-tc fs-24 text-center mb-24">為什麼想約你？</h3>
      <!-- todo: T1: 文字要縮排 -->
      <p class="px-24">
        我們在七月八號認識了彼此，之後聊了很多。我很喜歡動物園，希望能跟你一起去夜間動物園二十週年！
      </p>
    </div>

    <div class="container mb-32">
      <h3 class="noto-serif-tc fs-24 text-center mb-24">今晚行程</h3>
      <!-- todo: T1: icon、文字要置中 -->
      <!-- todo: T1: 第一個長度比較長 -->
      <div
        class="d-flex justify-content-center align-items-center border border-1 rounded-2 py-24 mb-24"
      >
        <i class="bi bi-fork-knife border rounded-5 p-8 me-16"></i>
        <div>
          <p class="fw-bold mb-0">17:30 下午茶時光</p>
          <p>喝無糖抹茶、配上你最喜歡的鹹酥雞</p>
        </div>
      </div>

      <!-- todo: T1: icon、文字要置中 -->
      <div
        class="d-flex justify-content-center align-items-center border border-1 rounded-2 py-24 mb-24"
      >
        <i class="bi bi-arrow-up-square-fill border rounded-5 p-8 me-16 fw-bold"></i>
        <div>
          <p class="fw-bold mb-0">18:00 入園</p>
          <p>看各種動物，雖然沒有像百變怪的動物</p>
        </div>
      </div>

      <!-- todo: T1: icon、文字要置中 -->
      <div
        class="d-flex justify-content-center align-items-center border border-1 rounded-2 py-24 mb-24"
      >
        <i class="bi bi-apple-music border rounded-5 p-8 me-16"></i>
        <div>
          <p class="fw-bold mb-0">21:00 回家</p>
          <p>一起戴耳機聽音樂邊回家</p>
        </div>
      </div>
    </div>

    <div class="container text-center">
      <p class="noto-serif-tc fs-32 mb-24">Molly，你願意嗎?</p>
      <button @click="showAlert()" class="btn btn-rose-red d-block text-white w-100 rounded-4 mb-16">天啊！好讚</button>
      <button @click="showAlert()" class="btn btn-rose-red d-block text-white w-100 rounded-4 mb-16">夢寐以求！</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showAlert() {
      window.alert('恭喜獲得快樂動物園之旅');
    }
  },
}
</script>