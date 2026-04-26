export type Genre = 'Lo-Fi' | 'EDM' | 'Afrobeat' | 'Hip-Hop' | 'Pop' | 'Cinematic';

export interface SongProject {
  id?: string;
  title: string;
  genre: Genre;
  bpm: number;
  lyrics: string;
  melodyNotes: string[];
  drumPattern: number[];
  instrument: string;
  created_at?: string;
}
