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
    links: {
        whatsapp: string;
        zapierWebhook: string;
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
    };
}