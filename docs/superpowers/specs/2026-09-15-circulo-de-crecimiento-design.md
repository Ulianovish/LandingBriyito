# Página del Círculo de Crecimiento

Fecha: 2026-09-15
Estado: aprobado por Briyito

## Objetivo

Publicar una página propia para la comunidad "Círculo de Crecimiento", que capture
nombre, email y WhatsApp, y luego lleve al grupo de WhatsApp.

## Decisiones tomadas

- **Dirección:** `/circulo-de-crecimiento`.
- **Forma de unirse:** formulario visible en la página (no ventana emergente). Al
  enviarse correctamente se guarda el registro y se abre el grupo de WhatsApp.
- **Registros:** hoja "Registros Mamá Que Factura" en la cuenta de Briyito, con un
  Apps Script propio que separa los registros en pestañas según el campo `origen`
  (`circulo` y `masterclass`). La hoja de la masterclass anterior está en otra cuenta.
- **Promesa:** espacio gratuito con clases en vivo de mentalidad y marca personal.
  Sin promesas de ingresos, según los "ajustes pendientes" del guion de la Clase #1.
- **Enlace desde la landing:** sí, un enlace discreto al final.

## Contenido de la página

1. Título y presentación, con la frase "Esto no se basa en la motivación, se basa en
   el compromiso".
2. Qué vas a encontrar: principios para elevar el nivel de conciencia, los 5 pasos de
   la marca personal, la reputación como marca, y tareas entre clases.
3. Cómo funciona: clases en vivo gratuitas, con compromiso de asistir y hacer la tarea.
4. Formulario: nombre, email y WhatsApp.

## Estructura técnica

- `src/utils/registration.ts`: construir el envío y mandarlo al webhook. Con tests.
  Interpreta la respuesta de Apps Script, que siempre responde HTTP 200 incluso al
  fallar, y cae al estado HTTP cuando la respuesta no es JSON (webhook antiguo).
- `src/components/registration-form.astro`: formulario reutilizable. Recibe webhook,
  enlace de WhatsApp, origen y si pide WhatsApp. Se configura con atributos `data-*`
  para que el script pueda ser un módulo y no `define:vars`.
- `src/components/meta-pixel.astro`: código base del pixel, hoy escondido dentro del
  botón de la landing. Lo necesitan las dos páginas.
- `src/layouts/base.astro`: parte invisible compartida (tipografía, tema, pixel, SEO).
- `src/pages/circulo-de-crecimiento.astro`: la página nueva.
- `src/components/modal.astro`: pasa a envolver el formulario compartido.
- `src/config/site.config.ts`: textos, enlaces y webhook del Círculo.

## Verificación

- `bun test src` para la lógica de envío.
- `bun run build` para el sitio completo.
- En el navegador, las dos páginas en computador y celular, simulando envío exitoso y
  fallido con datos falsos, sin mandar nada real a Google ni a WhatsApp.

## Pendiente de decidir más adelante

- Si el formulario de la masterclass se muda a la hoja nueva. Hoy sigue apuntando al
  webhook antiguo, que está en otra cuenta de Google.
