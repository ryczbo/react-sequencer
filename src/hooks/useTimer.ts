import { useState, useLayoutEffect } from 'react';

export const useTimer = (isRunning: boolean) => {
  const [now, setNow] = useState<DOMHighResTimeStamp | null>(null);

  useLayoutEffect(() => {
    if (!isRunning) {
      return;
    }

    const id = requestAnimationFrame(() => setNow(performance.now()));

    return () => cancelAnimationFrame(id);
  }, [isRunning, now]);

  return isRunning ? now : null;
};
