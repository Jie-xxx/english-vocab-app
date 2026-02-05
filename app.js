let currentIndex = 0;

// 快取 DOM
const wordEl = document.getElementById("word");
const posEl = document.getElementById("pos");
const meaningEl = document.getElementById("meaning");
const sentenceEl = document.getElementById("sentence");
const sentenceCnEl = document.getElementById("sentencecn");
const wordIndexEl = document.getElementById("word-index");

// 顯示單字
function showWord() {
  const w = words[currentIndex];

  // 單字編號
  wordIndexEl.textContent = `單字 ${currentIndex + 1} / ${words.length}`;

  // 單字與詞性
  wordEl.textContent = w.word;
  posEl.textContent = w.pos || "";

  // 中文意思
  meaningEl.textContent = w.meaning;
  meaningEl.classList.add("hidden");

  // 例句
  sentenceEl.textContent = w.sentence;
  sentenceCnEl.textContent = w.sentencecn;
  sentenceCnEl.classList.add("hidden");
}

// 上一題
function prevWord() {
  if (currentIndex > 0) {
    currentIndex--;
    showWord();
  }
}

// 下一題
function nextWord() {
  if (currentIndex < words.length - 1) {
    currentIndex++;
    showWord();
  }
}

// 顯示/隱藏中文
function toggleMeaning() {
  meaningEl.classList.toggle("hidden");
}

// 顯示/隱藏例句翻譯
function toggleSentence() {
  sentenceCnEl.classList.toggle("hidden");
}

// 語音播放
function speak(type) {
  const text = type === "word" ? wordEl.textContent : sentenceEl.textContent;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US";
  u.rate = 0.7;

  speechSynthesis.cancel();
  speechSynthesis.speak(u);
}

// 手機左右滑動換單字
let startX = 0;
document.addEventListener("touchstart", e => startX = e.touches[0].clientX);
document.addEventListener("touchend", e => {
  const diff = e.changedTouches[0].clientX - startX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) prevWord(); else nextWord();
  }
});

// 長按單字播放
let pressTimer;
wordEl.addEventListener("touchstart", () => {
  pressTimer = setTimeout(() => speak("word"), 500);
});
wordEl.addEventListener("touchend", () => clearTimeout(pressTimer));

// 初始載入
showWord();
