/**
 * Runs count-up animation off the main thread to reduce TBT.
 * Receives: { end, duration (ms) }
 * Posts: { value (number), done (boolean) }
 */
self.onmessage = function (e) {
  const { end, duration = 1500 } = e.data;
  const startTime = Date.now();
  const interval = 16; // ~60fps

  const tick = () => {
    const elapsed = Date.now() - startTime;
    const t = Math.min(1, elapsed / duration);
    const value = Math.floor(t * end);
    const done = t >= 1;
    self.postMessage({ value: done ? end : value, done });
    if (!done) setTimeout(tick, interval);
  };

  tick();
};
