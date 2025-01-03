interface ServiceDetails {
    title: any;
    image: any;
    description: any;
  }
  
  export const serviceDetails: { [key: number]: ServiceDetails } = {
    1: { title: 'Косметолог', image: '/services/cosmet.png', description: 'Описание для косметолога.' },
    2: { title: 'Стоматолог', image: '/services/stomatolog.png', description: 'Описание для стоматолога.' },
    3: { title: 'Кардиолог', image: '/services/cardiolog.png', description: 'Описание для кардиолога.' },
    4: { title: 'Гинеколог', image: '/services/gin.png', description: 'Описание для гинеколога.' },
    5: { title: 'Психолог', image: '/services/psy.png', description: 'Описание для психолога.' },
    6: { title: 'Невролог', image: '/services/nevr.png', description: 'Описание для невролога.' },
    7: { title: 'Педиатр', image: '/services/pediatr.png', description: 'Описание для педиатра.' },
    8: { title: 'Репродуктолог', image: '/services/repro.png', description: 'Описание для репродуктолога.' },

  };
  