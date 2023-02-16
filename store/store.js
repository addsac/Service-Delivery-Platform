const store = {
    password: process.env.password,
    data: {
        timePlanner: [
            {
                title: '1. Strategia',
                description: 'Questa è la descrizione della fase di lavoro, questa è las descrizione della fase di lavoro, questa è las descrizione della fase di lavoro, questa è las descrizione della fase di lavoro, questa è las descrizione della fase di lavoro.',
                data: [
                    {
                        title: 'Obiettivo',
                        body: 'Questa è la descrizione della fase di lavoro, questa è la descrizione della fase di lavoro, questa è la descrizione della fase di lavoro.'
                    },
                    {
                        title: 'Inizio dei lavori',
                        body: '10/04/2023'
                    },
                    {
                        title: 'Durata prevista',
                        body: '2 settimane'
                    }
                ],
            },
            {
                title: '2. Design',
                description: 'Questa è la descrizione della fase di lavoro, questa è las descrizione della fase di lavoro, questa è las descrizione della fase di lavoro, questa è las descrizione della fase di lavoro, questa è las descrizione della fase di lavoro.',
                data: [
                    {
                        title: 'Obiettivo',
                        body: 'Questa è la descrizione della fase di lavoro, questa è la descrizione della fase di lavoro, questa è la descrizione della fase di lavoro.'
                    },
                    {
                        title: 'Inizio dei lavori',
                        body: '10/04/2023'
                    },
                    {
                        title: 'Durata prevista',
                        body: '2 settimane'
                    }
                ],
            },
            {
                title: '3. Sviluppo',
                description: 'Questa è la descrizione della fase di lavoro, questa è las descrizione della fase di lavoro, questa è las descrizione della fase di lavoro, questa è las descrizione della fase di lavoro, questa è las descrizione della fase di lavoro.',
                data: [
                    {
                        title: 'Obiettivo',
                        body: 'Questa è la descrizione della fase di lavoro, questa è la descrizione della fase di lavoro, questa è la descrizione della fase di lavoro.'
                    },
                    {
                        title: 'Inizio dei lavori',
                        body: '10/04/2023'
                    },
                    {
                        title: 'Durata prevista',
                        body: '2 settimane'
                    }
                ],
            }
        ],
        assets: {
            link: [
                {
                    name: '',
                    url: ''
                }
            ],
            photo: [
                {
                    name: '',
                    url: ''
                }
            ],
            folders: [
                {
                    name: '',
                    assets: ''
                }
            ]
        },
        appointments: [
            {
                title: '',
                data: '',
                hour: '',
                duration: '',
                place: '',
                links: [
                    {
                        title: '',
                        url: ''
                    }
                ],
            }
        ],
        contacts: {
            phone: '',
            email: '',
            website: '',
            slack: '',
            social: [
                {
                    title: '',
                    url: ''
                }
            ]
        },
        notifications: [
            {
                state: '',
                title: '',
                data: '',
                body: '',
            }
        ]
    }
}

export default store