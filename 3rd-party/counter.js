console.log(`[counter.js] 👋 Hello from counter.js`);
const BUSY_TIME = 3000;
const START_DELAY = 1200;
const SEC = BUSY_TIME / 1000;

setTimeout(() => {
  console.log(`[counter.js] 🖥️ Now I'll be busy for ${SEC} seconds...`);
  const resultEl = document.createElement('h4');
  resultEl.textContent = `Processing...`;
  document.body.append(resultEl);

  const startTime = new Date();
  let i = 0;
  while (new Date() - startTime < BUSY_TIME) {
    i++;
  }

  console.log(`[counter.js] 😅 Just finished`);
  resultEl.textContent = `Counter (${SEC}sec): ${new Intl.NumberFormat().format(i)}`;

}, START_DELAY)