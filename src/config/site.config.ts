import type { SiteConfig } from "./config";

export const siteConfig: SiteConfig = {
    // Información básica del sitio
    name: 'Mamá Que Factura',
    description: 'Aprende a generar ingresos extras desde casa en 2026 con tiendas en línea + IA',
    url: 'https://mamaquefactura.com/',
    author: 'Briyito Barrero',
    authorSubtitle: 'Mamá Emprendedora',

    // Meta tags y SEO
    seo: {
        title: 'Mamá Que Factura | Genera Ingresos Extras Desde Casa en 2026',
        description: 'Aprende a facturar desde casa en 2026 con tiendas en línea, marketing digital e IA. Para mamás profesionales que quieren ser presentes sin renunciar a sus ingresos.',
        openGraph: {
            title: 'Mamá Que Factura',
            description: 'Aprende a generar ingresos extras desde casa en 2026 con tiendas en línea + IA',
            image: '/og-image.jpg'
        },
        facebookVerification: '6ka7t2u3jg6z23trqaveqgr7inykz6'
    },

    // Identificador del Meta Pixel
    analytics: {
        metaPixelId: '7974826735928388'
    },

    // Enlaces importantes
    links: {
        whatsapp: 'https://chat.whatsapp.com/GqFsB2bbQOnBDCPrdIG8h0?mode=gi_t',
        registerWebhook: 'https://script.google.com/macros/s/AKfycbxYNKt7CLeck5Ln6VXdVRNe1go4JT788qKJmrgQNcspXP-y2iKljdxSSLMtehDcxnysGw/exec',
        circleWhatsapp: 'https://chat.whatsapp.com/DrgkquIABsyGpIb5qOJlHd',
        circleWebhook: 'https://script.google.com/macros/s/AKfycbyg5-E_I71ndxrjyNxc0d7WLTRvW4w_Xe6bKz3eMnIDnHzxAq43PqeEsvsv0AE9t2so/exec'
    },

    // Textos de las clases
    classes: [
        {
            number: 1,
            title: 'CLASE #1',
            subtitle: 'Tu Mapa al Negocio Digital',
            description: 'Te cuento mi historia real. Descubrirás los modelos de negocio digital que están funcionando en 2026, sus diferencias, y cómo encajan con TU vida y tu tiempo.',
            icon: 'learn'
        },
        {
            number: 2,
            title: 'CLASE #2',
            subtitle: 'El Modelo Que Funciona en 2026',
            description: 'Descubrirás cómo funciona el modelo de negocio y por qué será efectivo para ti en este 2026.',
            icon: 'store'
        },
        {
            number: 3,
            title: 'CLASE #3',
            subtitle: 'La Industria, La Plataforma y El Plan',
            description: 'Te muestro la industria, la plataforma exacta que uso para operar desde mi celular, el plan de pagos, y los principios para construir un negocio sostenible.',
            icon: 'rocket'
        },
        {
            number: 4,
            title: 'CLASE #4',
            subtitle: 'Tu Plan de Acción 2026',
            description: 'Resolvemos tus dudas, defines tu próximo paso concreto, y decides si quieres acompañamiento para implementarlo. Sin presión: solo claridad y dirección.',
            icon: 'trophy'
        }
    ],

    // Textos de secciones
    sections: {
        hero: {
            title: 'Deja De Elegir Entre Tu Trabajo <br /> y Tus Hijos.',
            description: `<strong>Aprende a Facturar Desde Casa en 2026.</strong><br /><br />
                El Método <em>Mamá Que Factura</em> te enseña a construir ingresos extras desde tu celular,
                apalancándote de <strong>tiendas en línea, marketing digital e Inteligencia Artificial</strong>.
                Sin experiencia previa. Sin renunciar a tu empleo.`
        },
        about: {
            title: '¿Quién Soy y por qué puedo apoyarte?',
            content: `Soy una mamá empoderada. Soy emprendedora. Soy una guerrera. Soy muy amorosa y una gran líder. Mi profesión es la ingeniería y mi especialidad es la gerencia de proyectos. Pero mi profesión más importante es ser <strong>mamá de dos hijas</strong> y coach de mamás. Me llamo <strong>Briyito Barrero</strong>.<br /><br />
                Mi dedicación como mamá me llevó a buscar nuevas formas de generar ingresos desde casa para ser una mamá más presente en la vida de mis hijas. Después de varios desafíos y experiencias descubrí las claves para una vida exitosa, y ahora quiero compartir contigo la estrategia y las herramientas para que tú también logres resultados en el mundo digital.<br /><br />
                Por eso creé <strong>El Método Mamá Que Factura</strong>, especialmente para mamás profesionales que desean generar ingresos desde casa y ser mamás presentes en la vida de sus hijos.<br /><br />
                Puedo ayudarte porque comprendo las exigencias de ser profesional y mamá al mismo tiempo. Te acompañaré paso a paso para que comprendas el mundo digital y puedas romper las barreras que te están limitando.`
        },
        intro: {
            description: 'En este entrenamiento gratuito aprenderás de negocios digitales y cómo puedes comprar una tienda virtual exitosa y vivir de ello. No necesitas experiencia previa.'
        },
        targetAudience: {
            title: '¿Es este entrenamiento para ti?',
            forYou: [
                'Eres mamá profesional entre 30 y 45 años',
                'Quieres generar ingresos extras desde casa sin renunciar a tu empleo',
                'Sientes que te estás perdiendo momentos importantes con tus hijos',
                'Estás dispuesta a aprender negocios digitales, marketing e IA',
                'Buscas un sistema probado, no fórmulas mágicas'
            ],
            notForYou: [
                'Buscas riqueza fácil de la noche a la mañana',
                'No estás dispuesta a invertir 1-2 horas diarias en aprender',
                'No quieres salir de tu zona de confort',
                'Esperas ganar sin tomar acción'
            ]
        },
        testimonials: {
            title: 'Lo que dicen las mamás de la comunidad',
            items: [
                {
                    // TODO: REEMPLAZAR CON TESTIMONIO REAL antes de lanzar campaña
                    name: 'María C.',
                    role: 'Mamá de 2, Bogotá',
                    quote: 'Llevaba años trabajando 10 horas al día y sintiendo que no avanzaba. Con el método de Briyito armé mi primera tienda en línea y ya genero ingresos extras desde casa.',
                    isPlaceholder: true
                },
                {
                    // TODO: REEMPLAZAR CON TESTIMONIO REAL antes de lanzar campaña
                    name: 'Laura P.',
                    role: 'Mamá profesional, Medellín',
                    quote: 'Lo mejor no es el dinero extra: es poder llevar a mis hijas al colegio sin afán y trabajar desde mi celular. El método me dio claridad y herramientas.',
                    isPlaceholder: true
                },
                {
                    // TODO: REEMPLAZAR CON TESTIMONIO REAL antes de lanzar campaña
                    name: 'Andrea G.',
                    role: 'Mamá profesional, Cali',
                    quote: 'Pensé que necesitaba ser experta en tecnología. Con la IA y el paso a paso de Briyito armé mi tienda en menos de una semana. Hoy entiendo de negocios digitales.',
                    isPlaceholder: true
                }
            ]
        },
        faq: {
            title: 'Preguntas frecuentes',
            items: [
                {
                    question: '¿Necesito tener experiencia en negocios o tecnología?',
                    answer: 'No. El método está diseñado desde cero. Si sabes usar WhatsApp, puedes aprender. Te acompaño paso a paso, sin asumir conocimientos previos.'
                },
                {
                    question: '¿Cuánto tiempo necesito al día?',
                    answer: 'Entre 1 y 2 horas diarias son suficientes para arrancar. La idea es que esto SE ADAPTE a tu vida, no al revés. Muchas mamás de la comunidad trabajan en sus horarios de almuerzo o cuando los hijos duermen.'
                },
                {
                    question: '¿Necesito invertir dinero al inicio?',
                    answer: 'Todo negocio requiere inversión de tiempo y dinero. En la masterclass te explico cuánto vale la inversión inicial, según el modelo que elijas. ¡Son 4 días y no tienen ningún costo!'
                },
                {
                    question: '¿Qué pasa si no puedo asistir en vivo a la masterclass?',
                    answer: 'Si te registras al grupo de WhatsApp recibirás recordatorios y, si confirmas, te coloco en una lista para la siguiente clase.'
                }
            ]
        }
    },

    // Configuración de fechas
    dates: {
        title: 'La Masterclass comienza en',
        // Hora de Colombia (UTC-5): mantén el offset para que todas vean la misma cuenta regresiva
        masterclass: '2026-10-01T20:00:00-05:00'
    },

    // Textos de botones y formularios
    ui: {
        ctaButton: 'QUIERO MI CUPO GRATIS',
        ctaSubtext: '🔒 100% Gratis · Solo 100 cupos disponibles · Sin spam',
        formTitle: 'Reserva tu cupo ahora',
        formLabels: {
            name: 'Nombre',
            email: 'Email',
            whatsapp: 'WhatsApp (con indicativo país)',
            submit: 'Unirme al Grupo Privado'
        },
        placeholders: {
            name: 'Tu nombre completo',
            email: 'tu@email.com',
            whatsapp: '+57 300 000 0000'
        },
        errorMessage: 'No pudimos guardar tu registro. Inténtalo otra vez en un momento.'
    },

    // Página del Círculo de Crecimiento
    circle: {
        seo: {
            title: 'Círculo de Crecimiento | Mamá Que Factura',
            description: 'Un espacio gratuito de mentalidad y marca personal para emprender por internet, con clases en vivo.'
        },
        hero: {
            title: 'Círculo de <br /> Crecimiento.',
            quote: 'No te preguntes si tienes motivación. Pregúntate si tiene sentido crecer internamente para poder emprender.',
            description: `Un espacio gratuito para crecer por dentro y poder emprender por internet.<br /><br />
                Nos vemos en clases en vivo, trabajamos tu mentalidad y tu marca personal, y cada clase
                deja una tarea. Acá no se trata de motivación, se trata de compromiso.`
        },
        blocksTitle: 'Qué vas a encontrar',
        blocks: [
            {
                title: 'PRINCIPIOS',
                description: 'Principios para elevar tu nivel de conciencia, empezando por el más poderoso: todo es percepción.',
                icon: 'learn'
            },
            {
                title: 'MARCA PERSONAL',
                description: 'Los 5 pasos de la marca personal, desde tus dones y talentos hasta el apalancamiento.',
                icon: 'store'
            },
            {
                title: 'REPUTACIÓN',
                description: 'Tu reputación es tu marca. Qué flores quieres en tu ramo y con quién te asocias.',
                icon: 'trophy'
            },
            {
                title: 'COMPROMISO',
                description: 'Tareas entre clases y un contexto de personas que van por el mismo camino.',
                icon: 'rocket'
            }
        ],
        howItWorksTitle: 'Cómo funciona',
        howItWorks: [
            'Las clases son en vivo y gratuitas.',
            'Te comprometes a asistir y a hacer la tarea.',
            'La fecha y la hora se avisan en el grupo de WhatsApp.'
        ],
        ui: {
            formTitle: 'Únete al Círculo',
            formIntro: 'Déjame tus datos y te llevo al grupo de WhatsApp.',
            formLabels: {
                name: 'Nombre',
                email: 'Email',
                whatsapp: 'WhatsApp (con indicativo país)',
                submit: 'QUIERO ENTRAR AL CÍRCULO'
            },
            placeholders: {
                name: 'Tu nombre completo',
                email: 'tu@email.com',
                whatsapp: '+57 300 000 0000'
            },
            errorMessage: 'No pudimos guardar tu registro. Inténtalo otra vez en un momento.',
            landingLink: '¿Quieres trabajar tu mentalidad? Entra al Círculo de Crecimiento',
            heroCta: 'Quiero entrar',
            backLink: 'Volver a la masterclass Mamá Que Factura'
        }
    }
};
