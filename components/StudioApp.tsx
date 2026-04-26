'use client';

import { useMemo, useState } from 'react';
import * as Tone from 'tone';
import { generateDrums, generateMelody, randomLyrics } from '@/lib/generator';
import { Genre, SongProject } from '@/lib/types';

const genres: Genre[] = ['Lo-Fi', 'EDM', 'Afrobeat', 'Hip-Hop', 'Pop', 'Cinematic'];
const instruments = ['PolySynth', 'AMSynth', 'FMSynth', 'DuoSynth'];

const guides: Record<string, string[]> = {
  lyrics: [
    'Write a 2-line life story, then call AI randomizer to remix phrasing.',
    'Keep hook under 10 words so it is memorable and brand-safe.',
    'Run plagiarism check manually using multiple search snippets before publishing.'
  ],
  audio: [
    'Start 90-110 BPM for flexible pop/hip-hop crossover.',
    'Use one kick pattern and one snare layer to keep mix clean.',
    'Export stems and final mix separately for distributors.'
  ],
  voice: [
    'Draft lyrics in plain language, then test TTS phrasing and breathing breaks.',
    'Record your own lead vocal to keep output commercially unique.',
    'Store dry vocal + effected vocal versions for fast revisions.'
  ],
  video: [
    'Generate loop visual from canvas and render with MediaRecorder.',
    'Keep aspect ratio 16:9 for YouTube and 9:16 for shorts variant.',
    'Add song title watermark to prove ownership trail.'
  ],
  daw: [
    'Use step sequencer (16 step) to sketch rhythm first like FL workflow.',
    'Use channel rack style: drums, bass, chords, lead.',
    'Always save a v1 sketch before heavy edits.'
  ],
  business: [
    'Register track metadata before distribution.',
    'Upload to multiple stores and keep unified release notes.',
    'Track revenue by platform in Supabase analytics table.'
  ]
};

async function playPattern(notes: string[], drumPattern: number[], bpm: number, instrumentName: string) {
  await Tone.start();
  Tone.Transport.cancel();
  Tone.Transport.bpm.value = bpm;
  const synth = new (Tone as any)[instrumentName]().toDestination();
  const kick = new Tone.MembraneSynth().toDestination();
  let noteIndex = 0;
  Tone.Transport.scheduleRepeat((time) => {
    const step = noteIndex % 16;
    synth.triggerAttackRelease(notes[noteIndex % notes.length], '8n', time);
    if (drumPattern[step]) kick.triggerAttackRelease('C1', '16n', time);
    noteIndex += 1;
  }, '16n');
  Tone.Transport.start();
}

export default function StudioApp() {
  const [genre, setGenre] = useState<Genre>('Lo-Fi');
  const [lyrics, setLyrics] = useState(randomLyrics('new dream'));
  const [title, setTitle] = useState('My First Release');
  const [bpm, setBpm] = useState(96);
  const [instrument, setInstrument] = useState('PolySynth');
  const [melodyNotes, setMelodyNotes] = useState<string[]>(() => generateMelody('Lo-Fi'));
  const [drumPattern, setDrumPattern] = useState<number[]>(() => generateDrums('Lo-Fi'));
  const project: SongProject = useMemo(
    () => ({ title, genre, bpm, lyrics, melodyNotes, drumPattern, instrument }),
    [title, genre, bpm, lyrics, melodyNotes, drumPattern, instrument]
  );

  const downloadJson = () => {
    const blob = new Blob([JSON.stringify(project, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${title.replace(/\s+/g, '_').toLowerCase()}_project.json`;
    a.click();
  };

  const saveProject = async () => {
    const res = await fetch('/api/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(project)
    });
    alert(res.ok ? 'Saved to Supabase ✅' : 'Save failed. Check env/db.');
  };

  return (
    <main>
      <h1>Instant Music Lab (Personal One-Man Startup)</h1>
      <p>Free/open-source stack: Next.js + Tone.js + browser APIs + Supabase.</p>
      <p><strong>No sign-in required in v1.</strong> Single-user personal mode is enabled by default.</p>
      <p><small>Note: This is a compact open-source DAW, not a 1:1 clone of proprietary FL Studio All Plugins Edition.</small></p>
      <div className="grid">
        <section className="card">
          <h2>Song Controls</h2>
          <label>Title<input value={title} onChange={(e) => setTitle(e.target.value)} /></label>
          <label>Genre<select value={genre} onChange={(e) => {
            const g = e.target.value as Genre;
            setGenre(g);
            setMelodyNotes(generateMelody(g));
            setDrumPattern(generateDrums(g));
          }}>{genres.map((g) => <option key={g}>{g}</option>)}</select></label>
          <label>BPM<input type="number" min={60} max={180} value={bpm} onChange={(e) => setBpm(Number(e.target.value))} /></label>
          <label>Instrument<select value={instrument} onChange={(e) => setInstrument(e.target.value)}>{instruments.map((i) => <option key={i}>{i}</option>)}</select></label>
          <button onClick={() => setLyrics(randomLyrics())}>Random Lyrics</button>
          <button onClick={async () => {
            const r = await fetch('/api/lyrics', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ seed: genre }) });
            const data = await r.json();
            if (data.lyrics) setLyrics(data.lyrics);
          }}>AI-style Lyrics via Local API</button>
          <button onClick={() => playPattern(melodyNotes, drumPattern, bpm, instrument)}>Play / Re-Play</button>
          <button onClick={() => Tone.Transport.stop()}>Stop</button>
          <button onClick={downloadJson}>Download Project</button>
          <button onClick={saveProject}>Save to Supabase</button>
        </section>

        <section className="card">
          <h2>Lyrics</h2>
          <textarea rows={10} value={lyrics} onChange={(e) => setLyrics(e.target.value)} />
          <small>Tip: Use your own edits to guarantee originality and artist voice.</small>
        </section>

        <section className="card">
          <h2>FL-style DAW Mini Features</h2>
          <ul>
            <li>16-step drum lane</li>
            <li>Genre melody generator</li>
            <li>Transport controls and BPM</li>
            <li>Instrument switching</li>
            <li>Project export (.json) and DB save</li>
          </ul>
          <pre>{JSON.stringify({ melodyNotes, drumPattern }, null, 2)}</pre>
        </section>

        <section className="card">
          <h2>Royalty-Free Sample Starter Pack</h2>
          <ul>
            <li>Kick synth: synthesized in browser (no copyrighted sample file)</li>
            <li>Melody notes generated algorithmically</li>
            <li>Template loops in <code>/public/samples</code></li>
          </ul>
        </section>
      </div>

      <section className="card" style={{ marginTop: '1rem' }}>
        <h2>3 Free Guides for Each Major Feature</h2>
        {Object.entries(guides).map(([k, steps]) => (
          <div key={k}>
            <h3>{k.toUpperCase()}</h3>
            <ol>{steps.map((s) => <li key={s}>{s}</li>)}</ol>
          </div>
        ))}
      </section>
    </main>
  );
}
