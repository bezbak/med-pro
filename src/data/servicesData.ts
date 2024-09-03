interface ServiceDetails {
    title: any;
    image: any;
    description: any;
  }
  
  export const serviceDetails: { [key: number]: ServiceDetails } = {
    1: { title: 'Косметолог', image: '/services/cosmetology.png', description: 'Описание для косметолога.' },
    2: { title: 'Стоматолог', image: '/services/dantist.png', description: 'Описание для стоматолога.' },
    3: { title: 'Кардиолог', image: '/services/cardiologist.png', description: 'Описание для кардиолога.' },
    4: { title: 'Гинеколог', image: '/services/gynecologist.png', description: 'Описание для гинеколога.' },
    5: { title: 'Психолог', image: '/services/psy.png', description: 'Описание для психолога.' },
    6: { title: 'Невролог', image: '/services/neurology.png', description: 'Описание для невролога.' },
    7: { title: 'Педиатр', image: '/services/pediatrician.png', description: 'Описание для педиатра.' },
    8: { title: 'Репродуктолог', image: '/services/reproductive.png', description: 'Описание для репродуктолога.' },
    9: { title: 'Терапевт', image: '/services/therapist.png', description: 'Описание для терапевта.' },
  };
  