import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Album Title',
    role: 'Composer / Arranger',
    artist: 'Artist Name',
    year: 2024,
    description: '앨범 또는 프로젝트 설명을 작성하세요.',
    link: 'https://example.com',
    tags: ['Album', 'Full Production'],
  },
  {
    id: 'project-2',
    title: 'Single Title',
    role: 'Producer',
    artist: 'Artist Name',
    year: 2024,
    description: '싱글 작업 설명을 여기에 작성하세요.',
    tags: ['Single'],
  },
  {
    id: 'project-3',
    title: 'OST Project',
    role: 'Sound Designer',
    year: 2023,
    description: 'OST 또는 사운드 디자인 프로젝트 설명.',
    tags: ['OST', 'Sound Design'],
  },
  {
    id: 'project-4',
    title: 'Collaboration Track',
    role: 'Beat Maker',
    artist: 'Featured Artist',
    year: 2023,
    tags: ['Collaboration'],
  },
];
