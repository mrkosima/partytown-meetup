let iterations = 0;

function fibonacciImpl(n) {
  iterations++;
  if (n < 1) {
    return 0;
  } else if (n < 2) {
    return 1;
  }
  return fibonacciImpl(n - 2) + fibonacciImpl(n - 1);
}

function fibonacciImplFast(n) {
  const res = {
  };
  res[0] = 0;
  res[1] = 1;
  res[2] = 1;
  for (let i = 3; i <= n; i++) {
    iterations++;
    res[i] = res[i - 1] + res[i - 2];
  }
  return res[n];
}

window.fibonacci = function (n, fast) {
  iterations = 0;
  const start = new Date();
  const result = fast ? fibonacciImplFast(n) : fibonacciImpl(n);
  updateFibonacciResult({ n, fast, result, iterations, time: new Date() - start });
}


function getResultEl() {
  let resultEl = document.getElementById('result');
  if (!resultEl) {
    resultEl = document.createElement('code');
    resultEl.id = 'result';
    document.body.append(resultEl);
  }
  return resultEl;
}

function updateFibonacciResult({ n, fast, result, iterations, time }) {
  getResultEl().innerText = `fibonacci(${n}, ${String(fast)}) = ${Intl.NumberFormat().format(result)}`;
  getMetaEl('ops').innerText = `(${Intl.NumberFormat().format(iterations)} ops)`;
  getMetaEl('fbTime').innerText = `(${Intl.NumberFormat().format(time)} ms)`;
}

function getResultEl() {
  const resultEl = document.getElementById('result');
  if (resultEl) {
    return resultEl;
  }
  const newEl = document.createElement('code');
  newEl.id = 'result';
  document.body.append(newEl);
  return newEl;
}

function getMetaEl(id) {
  const opsEl = document.getElementById(id);
  if (opsEl) {
    return opsEl;
  }

  const newEl = document.createElement('code');
  newEl.id = id;
  newEl.className = 'meta';
  document.body.append(newEl);
  return newEl;
}