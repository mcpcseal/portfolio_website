import type { Track } from '../types';

export const tracks: Track[] = [
  {
    id: 'track-1',
    title: 'Current',
    description: 'Drum & Bass',
    embedType: 'soundcloud',
    embedId: 'https://soundcloud.com/psvm_s_a/current', // SoundCloud URL로 교체하세요
    year: 2024,
    tags: ['Producing', 'Electronic'],
  },
  {
    id: 'track-2',
    title: 'Back to the Beat',
    description: 'Boom Bap',
    embedType: 'soundcloud',
    embedId: 'https://soundcloud.com/bin-108999823/backtothebeat', // SoundCloud URL로 교체하세요
    year: 2026,
    tags: ['Producing', 'Hip-hop'],
  }
  // {
  //   id: 'track-1',
  //   title: 'Sample Track 1',
  //   description: '첫 번째 트랙 설명을 여기에 작성하세요.',
  //   embedType: 'youtube',
  //   embedId: 'SmJAdgNKT_Y', // YouTube 동영상 ID로 교체하세요
  //   year: 2024,
  //   tags: ['Electronic', 'Ambient'],
  // },
];
