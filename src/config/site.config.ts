import type { SiteConfig } from "./config";

export const siteConfig: SiteConfig = {
    // Información básica del sitio
    name: 'Mamá Que Factura',
    description: 'Aprende El Método Mamá Que Factura',
    url: 'https://mamaquefactura.com/',
    author: 'Briyito Barrero',
    authorSubtitle: 'Mamá Emprendedora',

    // Meta tags y SEO
    seo: {
        title: 'El Método Mamá Que Factura',
        description: 'Aprende El Método Mamá Que Factura',
        openGraph: {
            title: 'Mama Que Factura',
            description: 'Aprende El Método Mamá Que Factura',
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
            description: 'Aprenderás el mismo método que yo utilizo y cientos de mamás para crear un negocio solido en internet con tiendas en línea',
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
            description: 'La forma más fácil de comprar TÚ PROPIA TIENDA en internet en menos de 5 días',
            icon: 'rocket'
        },
        {
            number: 4,
            title: 'CLASE #4',
            description: 'Como convertirte en una MAMÁ PRESENTE que factura desde casa y como vivir 100 % de tu negocio online',
            icon: 'trophy'
        }
    ],

    // Textos de secciones
    sections: {
        hero: {
            title: 'El Método, <br /> Mamá que Factura.',
            description: `Así fue como logré entrar en los negocios digitales, creando tiendas por internet que me
                permitieron ser una mamá presente en la vida de mis hijas.<br /><br /> En este entrenamiento
                gratuito, aprenderás cómo comprar una tienda virtual exitosa y vivir de ello, sin necesidad
                de experiencia previa.`
        },
        about: {
            title: '¿Quién Soy y por qué puedo apoyarte?',
            content: ` Soy Briyito Barrero, profesional en ingeniería civil, gerente de proyectos, enfocados en finanzas, emprendedora y mi trabajo mas importante mama de dos hijas, mi dedicación como mama me llevo a buscar nuevas formas de generar ingresos desde casa para poder ser una mama mas presente y tener tiempo con mis hijas, después de varias desafíos y experiencias descubrí las claves para una vida exitosa, y ahora quiero compartir contigo la estrategia y las herramientas para que tú también logres resultados en el mundo virtual, por eso cree el método mama que factura especialmente para mamas que desean generar ingresos desde casa y ser mamas presentes en la vida de los niños. 
                Puedo ayudarte porque comprendo las exigencias de ser una profesional y mama al mismo tiempo compartiré contigo mi experiencia y te ayudare a alcanzar tus metas más rápidamente con soluciones prácticas te acompañare paso a paso para que comprendas el mundo digital y puedas romper barreras que te están limitando a que puedas generar ingresos desde la comodidad del hogar, estoy aquí para brindarte el apoyo necesario para construir una vida plena y exitosa como mama y emprendedora.`
        },
        intro: {
            description: 'En este entrenamiento gratuito aprenderás de negocios digitales y cómo puedes comprar una tienda virtual exitosa y vivir de ello. No necesitas experiencia previa.'
        }
    },

    // Configuración de fechas
    dates: {
        title: 'La Masterclass comienza en',
        masterclass: '2024-11-25T21:00:00'
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