import { useMemo, useState } from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import * as Speech from 'expo-speech';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

const genrePool = ['Lo-Fi', 'EDM', 'Afrobeat', 'Hip-Hop', 'Pop', 'Cinematic'] as const;

type Genre = (typeof genrePool)[number];

function makeLyrics(seed: string, genre: Genre) {
  return `Verse: ${seed} in ${genre} nights\nPre: I build my sound from scratch\nHook: My voice, my rights, my master.`;
}

export default function App() {
  const [title, setTitle] = useState('Mobile Idea Draft');
  const [genre, setGenre] = useState<Genre>('Lo-Fi');
  const [lyrics, setLyrics] = useState(makeLyrics('city lights', 'Lo-Fi'));

  const project = useMemo(() => ({ title, genre, lyrics, createdAt: new Date().toISOString() }), [title, genre, lyrics]);

  const exportProject = async () => {
    const target = `${FileSystem.cacheDirectory}${title.replace(/\s+/g, '_')}.json`;
    await FileSystem.writeAsStringAsync(target, JSON.stringify(project, null, 2));
    if (await Sharing.isAvailableAsync()) {
      await Sharing.shareAsync(target);
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.h1}>Instant Music Lab Mobile</Text>
        <Text style={styles.note}>No sign-in required in v1. Personal creator mode.</Text>

        <Text style={styles.label}>Title</Text>
        <TextInput value={title} onChangeText={setTitle} style={styles.input} />

        <Text style={styles.label}>Genre</Text>
        <View style={styles.row}>
          {genrePool.map((g) => (
            <View key={g} style={styles.btnWrap}>
              <Button title={g} onPress={() => {
                setGenre(g);
                setLyrics(makeLyrics('sunrise motion', g));
              }} />
            </View>
          ))}
        </View>

        <Text style={styles.label}>Lyrics</Text>
        <TextInput multiline value={lyrics} onChangeText={setLyrics} style={[styles.input, styles.area]} />

        <Button title="Speak Lyrics" onPress={() => Speech.speak(lyrics)} />
        <View style={styles.gap} />
        <Button title="Export Project JSON" onPress={exportProject} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#0f172a' },
  container: { padding: 16, gap: 10 },
  h1: { color: 'white', fontSize: 24, fontWeight: '700' },
  note: { color: '#94a3b8' },
  label: { color: '#cbd5e1', marginTop: 8 },
  input: { backgroundColor: '#111827', color: 'white', borderWidth: 1, borderColor: '#334155', borderRadius: 8, padding: 10 },
  area: { minHeight: 140, textAlignVertical: 'top' },
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  btnWrap: { marginRight: 6, marginBottom: 6 },
  gap: { height: 8 }
});
