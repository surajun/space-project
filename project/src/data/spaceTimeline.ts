export interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  description: string;
  category: 'mission' | 'discovery' | 'achievement';
}

export const spaceTimeline: TimelineEvent[] = [
  {
    id: 1,
    date: '1957-10-04',
    title: 'Sputnik 1 Launch',
    description: 'First artificial satellite to orbit Earth, marking the beginning of the Space Age.',
    category: 'mission'
  },
  {
    id: 2,
    date: '1961-04-12',
    title: 'First Human in Space',
    description: 'Yuri Gagarin becomes the first human to journey into outer space.',
    category: 'achievement'
  },
  {
    id: 3,
    date: '1969-07-20',
    title: 'Apollo 11 Moon Landing',
    description: 'Neil Armstrong and Buzz Aldrin become the first humans to walk on the Moon.',
    category: 'mission'
  },
  {
    id: 4,
    date: '1990-04-24',
    title: 'Hubble Space Telescope',
    description: 'Launch of the Hubble Space Telescope, revolutionizing our view of the universe.',
    category: 'mission'
  },
  {
    id: 5,
    date: '2012-08-06',
    title: 'Curiosity Mars Landing',
    description: 'NASA\'s Curiosity rover successfully lands on Mars to study the planet\'s climate and geology.',
    category: 'mission'
  },
  {
    id: 6,
    date: '2019-04-10',
    title: 'First Black Hole Image',
    description: 'First-ever image of a black hole revealed by the Event Horizon Telescope collaboration.',
    category: 'discovery'
  }
];