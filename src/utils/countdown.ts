const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

export interface Countdown {
  remainingMs: number;
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

function pad(num: number): string {
  return num < 10 ? '0' + num : String(num);
}

export function getCountdown(target: Date, now: Date): Countdown {
  const remainingMs = Math.max(0, target.getTime() - now.getTime());

  return {
    remainingMs,
    days: pad(Math.floor(remainingMs / DAY)),
    hours: pad(Math.floor((remainingMs % DAY) / HOUR)),
    minutes: pad(Math.floor((remainingMs % HOUR) / MINUTE)),
    seconds: pad(Math.floor((remainingMs % MINUTE) / SECOND))
  };
}
