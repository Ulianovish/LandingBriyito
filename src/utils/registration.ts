export interface RegistrationInput {
  name: string;
  email: string;
  whatsapp?: string;
}

export interface RegistrationPayload {
  name: string;
  email: string;
  whatsapp?: string;
  origen: string;
  timestamp: string;
}

export interface RegistrationResult {
  ok: boolean;
  error?: string;
}

export interface SubmitRegistrationOptions {
  webhook: string;
  payload: RegistrationPayload;
  fetchImpl?: typeof fetch;
}

export function buildRegistrationPayload(
  input: RegistrationInput,
  origen: string,
  now: Date
): RegistrationPayload {
  const payload: RegistrationPayload = {
    name: input.name.trim(),
    email: input.email.trim(),
    origen,
    timestamp: now.toISOString()
  };

  if (input.whatsapp !== undefined) {
    payload.whatsapp = input.whatsapp.trim();
  }

  return payload;
}

export async function submitRegistration({
  webhook,
  payload,
  fetchImpl = fetch
}: SubmitRegistrationOptions): Promise<RegistrationResult> {
  // Sin cabecera 'Content-Type' a propósito: Apps Script rechaza application/json
  // en peticiones POST de otro dominio, pero acepta el text/plain que pone el navegador.
  const response = await fetchImpl(webhook, {
    method: 'POST',
    body: JSON.stringify(payload)
  });

  // Apps Script responde 200 incluso cuando falla, así que hay que mirar el cuerpo.
  const body = await leerRespuesta(response);

  if (body && typeof body.ok === 'boolean') {
    return body.ok ? { ok: true } : { ok: false, error: body.error };
  }

  return { ok: response.ok };
}

async function leerRespuesta(
  response: Response
): Promise<{ ok?: boolean; error?: string } | undefined> {
  try {
    return JSON.parse(await response.text());
  } catch {
    // El webhook antiguo de la masterclass no responde JSON.
    return undefined;
  }
}
