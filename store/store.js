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
        assets: [
            {
                type: 'file',
                name: 'Nome del file',
                url: 'https://leonardocitton.com'
            },
            {
                type: 'file',
                name: 'Nome del file',
                url: 'https://leonardocitton.com'
            },
            {
                type: 'link',
                name: 'Nome del link',
                url: 'https://leonardocitton.com'
            },
            {
                type: 'folder',
                name: 'Nome della cartella',
                url: '',
                assets: [
                    {
                        type: 'file',
                        name: 'Nome del file',
                        url: 'https://leonardocitton.com'
                    },
                    {
                        type: 'file',
                        name: 'Nome del file',
                        url: 'https://leonardocitton.com'
                    },
                    {
                        type: 'folder',
                        name: 'Nome della cartella',
                        url: '',
                        assets: [
                            {
                                type: 'file',
                                name: 'Nome del file',
                                url: 'https://leonardocitton.com'
                            },
                            {
                                type: 'file',
                                name: 'Nome del file',
                                url: 'https://leonardocitton.com'
                            },
                        ]
                    }
                ]
            },
            {
                type: 'folder',
                name: 'Nome della cartella',
                url: '',
                assets: [
                    {
                        type: 'link',
                        name: 'Nome del link',
                        url: 'https://leonardocitton.com'
                    },
                ]
            },
        ],
        appointments: [
            {
                title: 'Titolo dell’appuntamento da eseguire su Google Calendar',
                date: '2023/03/01',
                time: '10:00 - 12:00',
                duration: 'Mezzora / Un’ora',
                place: 'Google meet',
                links: [
                    {
                        title: 'Google meet',
                        url: 'https://google.com'
                    }
                ],
            },
            {
                title: 'Titolo dell’appuntamento da eseguire su Google Calendar',
                date: '2023/01/14',
                time: '10:00 - 12:00',
                duration: 'Mezzora / Un’ora',
                place: 'Google meet',
                links: [
                    {
                        title: 'Google meet',
                        url: 'https://google.com'
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