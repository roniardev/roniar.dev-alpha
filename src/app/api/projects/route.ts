import { reader } from '@/app/reader';

export async function GET() {
  const projects = await reader.collections.projects.all();

  return new Response(JSON.stringify(projects), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
