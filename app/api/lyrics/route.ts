import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { randomLyrics } from '@/lib/generator';

const payloadSchema = z.object({
  seed: z.string().max(80).optional()
});

export async function POST(req: NextRequest) {
  try {
    const raw = await req.json();
    const data = payloadSchema.parse(raw);
    return NextResponse.json({ lyrics: randomLyrics(data.seed) });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
