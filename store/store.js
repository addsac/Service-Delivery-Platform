const store = {
    password: process.env.password,
    data: {
        timePlanner: [
            {
                title: '1. Strategia',
                description: 'Questa è la descrizione della fase di lavoro, questa è las descrizione della fase di lavoro, questa è las descrizione della fase di lavoro, questa è las descrizione della fase di lavoro, questa è las descrizione della fase di lavoro.',
                active: true,
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
                active: false,
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
                active: false,
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
                place: 'Online',
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
                place: 'Online',
                links: [
                    {
                        title: 'Google meet',
                        url: 'https://google.com'
                    }
                ],
            }
        ],
        contacts: {
            phone: '+39 3478758148',
            email: 'info@pegasodigitalstudio.com',
            whatsapp: { text: '+39 3478758148', url: '393478758148'},
            website: 'https://pegasodigitalstudio.com',
            social: [
                {
                    title: 'instagram',
                    url: 'https://google.com'
                },
                {
                    title: 'twitter',
                    url: 'https://google.com'
                },
                {
                    title: 'linkedin',
                    url: 'https://google.com'
                }
            ]
        },
        notifications: [
            {
                title: 'Titolo della notitifica per segnalare che è successo qualcosa.',
                date: '2023/02/03'
            },
        ],
        messages: [
            {
                text: 'Questo messaggio è per dirti che adesso è disponibile qualcosa',
                date: '2023/02/10'
            },
            {
                text: 'Questo messaggio è per dirti che adesso è disponibile qualcosa',
                date: '2023/02/23'
            }
        ]
    }
}

export default store