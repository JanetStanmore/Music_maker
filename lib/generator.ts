import { Genre } from './types';

const themeWords = ['city lights', 'starlight', 'heartbeat', 'motion', 'sunrise', 'midnight', 'echoes'];
const rhymes = ['fire', 'higher', 'desire', 'wire', 'choir'];
const scales: Record<Genre, string[]> = {
  'Lo-Fi': ['C4', 'Eb4', 'G4', 'Bb4', 'D5'],
  EDM: ['A3', 'C4', 'E4', 'G4', 'B4'],
  Afrobeat: ['F3', 'A3', 'C4', 'D4', 'E4'],
  'Hip-Hop': ['D3', 'F3', 'G3', 'A3', 'C4'],
  Pop: ['G3', 'B3', 'D4', 'E4', 'G4'],
  Cinematic: ['C3', 'G3', 'Ab3', 'D4', 'F4']
};

export function randomLyrics(seed?: string): string {
  const motif = seed || themeWords[Math.floor(Math.random() * themeWords.length)];
  return [
    `Verse: I chase ${motif} through the midnight lane,`,
    `Pre: Every setback turns to golden grain,`,
    `Hook: We rise up ${rhymes[Math.floor(Math.random() * rhymes.length)]}, never lose our name.`
  ].join('\n');
}

export function generateMelody(genre: Genre, bars = 4): string[] {
  const pool = scales[genre];
  return Array.from({ length: bars * 4 }, () => pool[Math.floor(Math.random() * pool.length)]);
}

export function generateDrums(genre: Genre): number[] {
  const base = Array(16).fill(0);
  base[0] = 1;
  base[4] = 1;
  base[8] = 1;
  base[12] = 1;
  if (genre === 'EDM' || genre === 'Pop') {
    [2, 6, 10, 14].forEach((i) => (base[i] = 1));
  }
  if (genre === 'Hip-Hop') {
    [3, 7, 11, 15].forEach((i) => (base[i] = 1));
  }
  return base;
}
