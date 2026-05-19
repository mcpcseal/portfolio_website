import type { Track } from '../types';

export const tracks: Track[] = [
  {
    id: 'track-1',
    title: 'Sample Track 1',
    description: '첫 번째 트랙 설명을 여기에 작성하세요.',
    embedType: 'youtube',
    embedId: 'dQw4w9WgXcQ', // YouTube 동영상 ID로 교체하세요
    year: 2024,
    tags: ['Electronic', 'Ambient'],
  },
  {
    id: 'track-2',
    title: 'Sample Track 2',
    description: '두 번째 트랙 설명을 여기에 작성하세요.',
    embedType: 'soundcloud',
    embedId: 'https://soundcloud.com/example/track', // SoundCloud URL로 교체하세요
    year: 2024,
    tags: ['Hip-hop', 'Beat'],
  },
  {
    id: 'track-3',
    title: 'Sample Track 3',
    embedType: 'youtube',
    embedId: 'dQw4w9WgXcQ',
    year: 2023,
    tags: ['Pop'],
  },
];
