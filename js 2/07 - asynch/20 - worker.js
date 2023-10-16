// function di dalam workernya
addEventListener("message", function (message) {
  const total = message.data;
  for (let i = 0; i <= total; i++) {
    this.postMessage(i);
  }
});
