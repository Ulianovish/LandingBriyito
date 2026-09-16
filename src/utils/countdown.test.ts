import { describe, expect, test } from 'bun:test';
import { siteConfig } from '../config/site.config';
import { formatMasterclassDate, getCountdown } from './countdown';

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

describe('getCountdown', () => {
  const now = new Date('2026-09-15T12:00:00Z');

  test('breaks the remaining time into zero-padded days, hours, minutes and seconds', () => {
    const remainingMs = 1 * DAY + 2 * HOUR + 3 * MINUTE + 4 * SECOND;
    const target = new Date(now.getTime() + remainingMs);

    expect(getCountdown(target, now)).toEqual({
      remainingMs,
      days: '01',
      hours: '02',
      minutes: '03',
      seconds: '04'
    });
  });

  test('shows zeros instead of negative numbers once the masterclass has started', () => {
    const target = new Date(now.getTime() - (659 * DAY + 18 * HOUR + 39 * MINUTE + 16 * SECOND));

    expect(getCountdown(target, now)).toEqual({
      remainingMs: 0,
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00'
    });
  });
});

describe('siteConfig.dates.masterclass', () => {
  test('includes a UTC offset so every visitor counts down to the same instant', () => {
    expect(siteConfig.dates.masterclass).toMatch(/(Z|[+-]\d{2}:\d{2})$/);
    expect(Number.isNaN(new Date(siteConfig.dates.masterclass).getTime())).toBe(false);
  });
});

describe('formatMasterclassDate', () => {
  test('writes the evening start date in Colombia time', () => {
    expect(formatMasterclassDate(new Date('2026-10-01T20:00:00-05:00'))).toBe(
      'Jueves 1 de octubre · 8:00 p.m. (hora de Colombia)'
    );
  });

  test('uses a.m. for morning classes', () => {
    expect(formatMasterclassDate(new Date('2026-10-03T09:30:00-05:00'))).toBe(
      'Sábado 3 de octubre · 9:30 a.m. (hora de Colombia)'
    );
  });

  test('writes noon as 12:00 p.m.', () => {
    expect(formatMasterclassDate(new Date('2026-10-01T12:00:00-05:00'))).toBe(
      'Jueves 1 de octubre · 12:00 p.m. (hora de Colombia)'
    );
  });

  test('keeps the Colombian date when the instant is already the next day in UTC', () => {
    // 8:00 p.m. en Colombia es la 1:00 a.m. del día siguiente en UTC
    expect(formatMasterclassDate(new Date('2026-10-02T01:00:00Z'))).toBe(
      'Jueves 1 de octubre · 8:00 p.m. (hora de Colombia)'
    );
  });
});
