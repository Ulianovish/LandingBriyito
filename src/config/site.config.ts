import type { SiteConfig } from "./config";

export const siteConfig: SiteConfig = {
    // Información básica del sitio
    name: 'Mamá Que Factura',
    description: 'Aprende El Increíble Método Mamá Que Factura',
    url: 'https://mamaquefactura.com/',
    author: 'Briyito Barrero',
    authorSubtitle: 'Mamá Emprendedora',

    // Meta tags y SEO
    seo: {
        title: 'El Increíble Método Mamá Que Factura',
        description: 'Aprende El Increíble Método Mamá Que Factura',
        openGraph: {
            title: 'Mama Que Factura',
            description: 'Aprende El Increíble Método Mamá Que Factura',
            image: '/og-image.jpg'
        },
        facebookVerification: '6ka7t2u3jg6z23trqaveqgr7inykz6'
    },

    // Enlaces importantes
    links: {
        whatsapp: 'https://chat.whatsapp.com/HgnvveWfduzKfNepLLxB01',
        zapierWebhook: 'https://hooks.zapier.com/hooks/catch/20686036/25qrkto/'
    },

    // Textos de las clases
    classes: [
        {
            number: 1,
            title: 'CLASE #1',
            description: 'Aprenderás el mismo método que están usando cientos de mamás para crear un negocio solido en internet con tiendas en línea',
            icon: 'learn'
        },
        {
            number: 2,
            title: 'CLASE #2',
            description: 'Los 3 modelos de negocio que te permitirá comprar TÚ PROPIA TIENDA en internet que renta todos los meses',
            icon: 'store'
        },
        {
            number: 3,
            title: 'CLASE #3',
            description: 'La forma más fácil de comprar TÚ PROPIA TIENDA en internet en menos de 15 días',
            icon: 'rocket'
        },
        {
            number: 4,
            title: 'CLASE #4',
            description: 'Como convertirte en una mamá que factura exitosa creando TIENDAS EN LÍNEA, y recibir una renta',
            icon: 'trophy'
        }
    ],

    // Textos de secciones
    sections: {
        hero: {
            title: 'El Increíble Método, <br /> Mamá que Factura.',
            description: `Así fue como logré entrar en los negocios digitales, creando tiendas por internet que me
                permitieron ser una mamá presente en la vida de mis hijas.<br /><br /> En este entrenamiento
                gratuito, aprenderás cómo comprar una tienda virtual exitosa y vivir de ello, sin necesidad
                de experiencia previa.`
        },
        about: {
            title: '¿Quién Soy y por qué puedo apoyarte?',
            content: ` ¡Hola! Soy Briyito Barrero, mamá y emprendedora apasionada. Aunque estudié ingeniería civil
                y gerencia de proyectos, mi dedicación como mamá y ama de casa me llevó a buscar nuevas
                formas de generar ingresos desde el hogar a través de negocios en línea. Tras muchas
                experiencias, descubrí las claves para una vida abundante y ahora quiero compartir contigo
                estrategias y herramientas para que tú también logres resultados en el mundo virtual. Por
                eso, creé "Mamá que Factura", un método diseñado para mamás como tú que desean generar
                ingresos desde casa y ser mamás presentes en la vida de sus niños.<br /><br />

                Puedo ser tu guía en este viaje porque comprendo las exigencias de ser una mamá ama de casa,
                profesional y emprendedora. He transitado por ese camino y entiendo los desafíos que
                conlleva. Mi experiencia me ha enseñado valiosas lecciones que compartiré contigo,
                ayudándote a sortear obstáculos y alcanzar tus metas más rápidamente. Con soluciones
                prácticas, te acompañaré paso a paso para que puedas generar ingresos desde la comodidad de
                tu hogar. Estoy aquí para brindarte el apoyo necesario y ayudarte a construir una vida plena
                y exitosa como mamá emprendedora.`
        },
        intro: {
            description: 'En este entrenamiento gratuito aprenderás cómo puedes comprar una tienda virtual exitosa y vivir de ello. No necesitas experiencia previa.'
        }
    },

    // Configuración de fechas
    dates: {
        title: 'La Masterclass comienza en',
        masterclass: '2024-10-26T21:00:00'
    },

    // Textos de botones y formularios
    ui: {
        ctaButton: 'INSCRIBETE GRATIS AQUI',
        formTitle: 'Regístrate Ahora',
        formLabels: {
            name: 'Nombre',
            email: 'Email',
            submit: 'Unirme al Grupo'
        },
        placeholders: {
            name: 'Tu nombre completo',
            email: 'tu@email.com'
        }
    }
};