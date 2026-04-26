# FL Studio All Plugins Edition - Parity Status

This project **does not** include every proprietary FL Studio All Plugins Edition feature in v1.

## What v1 includes now
- Core mini-DAW workflow (pattern generation, basic arrangement loop, BPM, instrument choice)
- Lyrics generator + manual editing
- Browser synth/drum playback
- Supabase project save/load API
- JSON project export (download)
- No sign-in flow required in v1 (single-user personal mode)

## What cannot be shipped 1:1 (licensing/proprietary)
- Official Image-Line plugins (Sytrus, Harmor, FLEX, Gross Beat, etc.)
- FL Cloud content library and proprietary marketplace integrations
- Official FL Studio UI/workflow internals and plugin binaries

## Open-source alternatives planned
- **Synths:** Tone.js synth families + open-source WebAudio modules
- **Mixer:** multi-bus mixer strips with insert effects
- **Piano Roll:** custom MIDI grid editor + quantize
- **Stem separation:** Demucs/Open-Unmix self-hosted worker pipeline
- **Sampler/Slicer:** WebAudio buffer slicing and time-stretch
- **Modular patching:** node graph routing canvas
- **Mobile parity:** Expo app for idea capture + project sync

## Practical roadmap
1. V1.1: Piano-roll editor + automation lanes
2. V1.2: Multi-track recorder + waveform editor
3. V1.3: Local AI stem split service (optional self-host)
4. V1.4: Advanced mixer racks + plugin chain presets
