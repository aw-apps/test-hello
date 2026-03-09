(() => {
  const btn = document.getElementById('btn');
  const reset = document.getElementById('reset');
  const msg = document.getElementById('msg');

  const greetings = [
    '你好！',
    'Hello!',
    '哈囉～',
    '早安 / 午安 / 晚安！',
    'Welcome to GitHub Pages!',
  ];

  function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  btn.addEventListener('click', () => {
    msg.textContent = pickRandom(greetings);
  });

  reset.addEventListener('click', () => {
    msg.textContent = '';
  });
})();
