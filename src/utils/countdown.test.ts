import { describe, expect, test } from 'bun:test';
import { siteConfig } from '../config/site.config';
import { getCountdown } from './countdown';

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
