export function throttle<Args extends unknown[]>(fn: (...args: Args) => void, cooldown: number) {
  let lastArgs: Args | undefined;

  const run = () => {
    if (lastArgs) {
      fn(...lastArgs);
      // resetting arguments
      lastArgs = undefined;
    }
  };

  const throttled = (...args: Args) => {
    const isOnCooldown = !!lastArgs;

    lastArgs = args;

    if (isOnCooldown) {
      return;
    }

    window.setTimeout(run, cooldown);
  };

  return throttled;
}

export function getStorageParse(key: string) {
  return JSON.parse(localStorage.getItem(key));
}

export function setStorageString(key: string, object: unknown) {
  localStorage.setItem(key, JSON.stringify(object));
}