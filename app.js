(() => {
  const btn = document.getElementById('btn');
  const timeBtn = document.getElementById('time');
  const reset = document.getElementById('reset');
  const msg = document.getElementById('msg');
  const clock = document.getElementById('clock');

  const greetings = [
    '你好！',
    'Hello!',
    '哈囉～',
    '早安 / 午安 / 晚安！',
    'Welcome to GitHub Pages!',
  ];

  const timeFormatter = new Intl.DateTimeFormat('zh-TW', {
    dateStyle: 'medium',
    timeStyle: 'medium',
    hour12: false,
  });

  function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function updateTime() {
    const now = new Date();
    clock.textContent = `目前時間：${timeFormatter.format(now)}`;
  }

  btn.addEventListener('click', () => {
    msg.textContent = pickRandom(greetings);
  });

  timeBtn.addEventListener('click', () => {
    updateTime();
  });

  reset.addEventListener('click', () => {
    msg.textContent = '';
    clock.textContent = '';
  });
})();
