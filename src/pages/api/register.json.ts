export async function POST({ request }: { request: Request }) {
    try {
        const data = await request.json();

        const response = await fetch('https://hooks.zapier.com/hooks/catch/20686036/25qrkto/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            return new Response(JSON.stringify({ error: 'Error al procesar el registro' }), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Error interno del servidor' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}