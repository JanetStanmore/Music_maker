import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { supabaseAdmin } from '@/lib/supabase';

const projectSchema = z.object({
  title: z.string().min(2).max(90),
  genre: z.enum(['Lo-Fi', 'EDM', 'Afrobeat', 'Hip-Hop', 'Pop', 'Cinematic']),
  bpm: z.number().min(60).max(180),
  lyrics: z.string().max(3000),
  melodyNotes: z.array(z.string()).max(200),
  drumPattern: z.array(z.number()).length(16),
  instrument: z.string().max(40)
});

export async function GET() {
  const { data, error } = await supabaseAdmin
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(20);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ projects: data });
}

export async function POST(req: NextRequest) {
  try {
    const payload = projectSchema.parse(await req.json());
    const { data, error } = await supabaseAdmin.from('projects').insert(payload).select('*').single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ project: data });
  } catch {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }
}
