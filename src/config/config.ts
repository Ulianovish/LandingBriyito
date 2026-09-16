export interface SiteConfig {
    name: string;
    description: string;
    url: string;
    author: string;
    authorSubtitle: string;
    seo: {
        title: string;
        description: string;
        openGraph: {
            title: string;
            description: string;
            image: string;
        };
        facebookVerification: string;
    };
    analytics: {
        metaPixelId: string;
    };
    links: {
        whatsapp: string;
        registerWebhook: string;
        circleWhatsapp: string;
        circleWebhook: string;
    };
    classes: Array<{
        number: number;
        title: string;
        description: string;
        icon: string;
    }>;
    sections: {
        hero: {
            title: string;
            description: string;
        };
        about: {
            title: string;
            content: string;
        };
        intro: {
            description: string;
        };
    };
    dates: {
        title: string;
        masterclass: string;
    };
    ui: {
        ctaButton: string;
        formTitle: string;
        formLabels: {
            name: string;
            email: string;
            submit: string;
        };
        placeholders: {
            name: string;
            email: string;
        };
        errorMessage: string;
    };
    circle: {
        seo: {
            title: string;
            description: string;
        };
        hero: {
            title: string;
            quote: string;
            description: string;
        };
        blocks: Array<{
            title: string;
            description: string;
            icon: string;
        }>;
        howItWorksTitle: string;
        howItWorks: string[];
        blocksTitle: string;
        ui: {
            formTitle: string;
            formIntro: string;
            formLabels: {
                name: string;
                email: string;
                whatsapp: string;
                submit: string;
            };
            placeholders: {
                name: string;
                email: string;
                whatsapp: string;
            };
            errorMessage: string;
            landingLink: string;
            heroCta: string;
            backLink: string;
        };
    };
}
