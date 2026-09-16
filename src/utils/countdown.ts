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

// La masterclass se dicta en hora de Colombia, sin importar dónde esté quien la ve.
export function formatMasterclassDate(date: Date): string {
  const parts = new Intl.DateTimeFormat('es-CO', {
    timeZone: 'America/Bogota',
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    hour: 'numeric',
    minute: '2-digit',
    hourCycle: 'h23'
  }).formatToParts(date);

  const part = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((p) => p.type === type)?.value ?? '';

  // El texto de a. m. / p. m. cambia entre versiones de ICU, así que se arma a mano.
  const hour = Number(part('hour'));
  const period = hour >= 12 ? 'p.m.' : 'a.m.';
  const weekday = part('weekday');

  return `${weekday.charAt(0).toUpperCase()}${weekday.slice(1)} ${part('day')} de ${part('month')} · ${hour % 12 || 12}:${part('minute')} ${period} (hora de Colombia)`;
}
