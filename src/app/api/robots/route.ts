import { getApiUrl } from '@/shared/api/base';

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const apiUrl = await getApiUrl();
  const res = await fetch(`${apiUrl}/v1/seo/robots.txt`);
  const text = await res.text();

  return new Response(text, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
