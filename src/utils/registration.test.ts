import { describe, expect, test } from 'bun:test';
import { buildRegistrationPayload, submitRegistration } from './registration';

const WEBHOOK = 'https://script.google.com/macros/s/TEST/exec';

function fakeFetch(response: Response) {
  const calls: Array<{ url: string; init: RequestInit }> = [];
  const impl = (async (url: string, init: RequestInit) => {
    calls.push({ url, init });
    return response;
  }) as unknown as typeof fetch;

  return { calls, impl };
}

describe('buildRegistrationPayload', () => {
  const now = new Date('2026-09-15T18:30:00Z');

  test('includes the origin so each registration lands on its own sheet tab', () => {
    const payload = buildRegistrationPayload(
      { name: 'Ana', email: 'ana@example.com', whatsapp: '+57 300 1234567' },
      'circulo',
      now
    );

    expect(payload).toEqual({
      name: 'Ana',
      email: 'ana@example.com',
      whatsapp: '+57 300 1234567',
      origen: 'circulo',
      timestamp: '2026-09-15T18:30:00.000Z'
    });
  });

  test('trims the spaces the visitor typed', () => {
    const payload = buildRegistrationPayload(
      { name: '  Ana  ', email: ' ana@example.com ', whatsapp: ' +57 300 1234567 ' },
      'masterclass',
      now
    );

    expect(payload.name).toBe('Ana');
    expect(payload.email).toBe('ana@example.com');
    expect(payload.whatsapp).toBe('+57 300 1234567');
  });

  test('leaves out the whatsapp field when the form does not ask for it', () => {
    const payload = buildRegistrationPayload(
      { name: 'Ana', email: 'ana@example.com' },
      'masterclass',
      now
    );

    expect(payload.whatsapp).toBeUndefined();
  });
});

describe('submitRegistration', () => {
  const payload = {
    name: 'Ana',
    email: 'ana@example.com',
    origen: 'circulo',
    timestamp: '2026-09-15T18:30:00.000Z'
  };

  test('posts without a Content-Type header, which is what Apps Script accepts cross-origin', async () => {
    const { calls, impl } = fakeFetch(new Response('{"ok":true}', { status: 200 }));

    await submitRegistration({ webhook: WEBHOOK, payload, fetchImpl: impl });

    expect(calls).toHaveLength(1);
    expect(calls[0].url).toBe(WEBHOOK);
    expect(calls[0].init.method).toBe('POST');
    expect(calls[0].init.headers).toBeUndefined();
    expect(JSON.parse(String(calls[0].init.body))).toEqual(payload);
  });

  test('reports failure when Apps Script answers ok:false with an HTTP 200', async () => {
    const { impl } = fakeFetch(
      new Response('{"ok":false,"error":"No llegaron datos"}', { status: 200 })
    );

    expect(await submitRegistration({ webhook: WEBHOOK, payload, fetchImpl: impl })).toEqual({
      ok: false,
      error: 'No llegaron datos'
    });
  });

  test('reports success when Apps Script answers ok:true', async () => {
    const { impl } = fakeFetch(new Response('{"ok":true}', { status: 200 }));

    expect(await submitRegistration({ webhook: WEBHOOK, payload, fetchImpl: impl })).toEqual({
      ok: true
    });
  });

  test('falls back to the HTTP status when the answer is not JSON, like the older masterclass webhook', async () => {
    const plainOk = fakeFetch(new Response('Registro guardado', { status: 200 }));
    expect(
      await submitRegistration({ webhook: WEBHOOK, payload, fetchImpl: plainOk.impl })
    ).toEqual({ ok: true });

    const serverError = fakeFetch(new Response('Boom', { status: 500 }));
    expect(
      (await submitRegistration({ webhook: WEBHOOK, payload, fetchImpl: serverError.impl })).ok
    ).toBe(false);
  });
});
