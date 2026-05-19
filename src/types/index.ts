export type EmbedType = 'youtube' | 'soundcloud';

export interface Track {
  id: string;
  title: string;
  description?: string;
  embedType: EmbedType;
  embedId: string; // YouTube video ID or SoundCloud track URL
  year: number;
  tags?: string[];
}

export interface Project {
  id: string;
  title: string;
  role: string;
  artist?: string;
  year: number;
  description?: string;
  link?: string;
  tags?: string[];
}
