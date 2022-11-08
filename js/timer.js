const TIMEOUT = 100;

const start = Date.now();
const updateTime = () => {
  document.getElementById('time').innerHTML = (Math.round((Date.now() - start) / 100) / 10).toFixed(1) + ' sec';
}
setInterval(updateTime, TIMEOUT);