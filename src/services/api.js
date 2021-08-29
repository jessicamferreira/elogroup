export function loadLists() {
    return [
      { 
        title: 'Cliente em Potencial', 
        creatable: true,
        cards: [
          {
            id: 1,
            content: 'AAS Org.',
            labels: ['#E83C37'],
            user: 'https://avatars.dicebear.com/api/gridy/aas.svg'
          },
          {
            id: 2,
            content: 'JEL Corporation',
            labels: ['#E83C37'],
            user: 'https://avatars.dicebear.com/api/gridy/jel.svg'
          },
          {
            id: 3,
            content: 'Lais Ribeiro New',
            labels: ['#E83C37'],
            user: 'https://avatars.dicebear.com/api/gridy/lais.svg'
          },
        ]
      },
      { 
        title: 'Dados confirmados', 
        creatable: false,
        cards: [
          {
            id: 6,
            content: 'SD LTDA',
            labels: [],
            user: 'https://avatars.dicebear.com/api/gridy/sd.svg'
          }
        ]
      },
      { 
        title: 'Reunião Agendada', 
        creatable: false,
        cards: [
          {
            id: 7,
            content: 'SAAS',
            labels: ['#E83C37'],
            user: 'https://avatars.dicebear.com/api/gridy/aas.svg'
          },
          {
            id: 8,
            content: 'Jel Ferreira',
            labels: ['#54e1f7'],
            user: 'https://avatars.dicebear.com/api/gridy/aas.svg'
          },
          {
            id: 9,
            content: 'Reunião Interna',
            labels: [],
          }
        ]
      },
      { 
        title: 'Concluído', 
        creatable: false,
        done: true,
        cards: [
          {
            id: 10,
            content: 'Interna',
            labels: [],
          },
          {
            id: 12,
            content: 'New Tech',
            labels: ['#54e1f7'],
          },
          {
            id: 13,
            content: 'React JS',
            labels: ['#E83C37'],
          }
        ]
      },
    ];
  }