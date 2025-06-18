export const dynamic = "force-dynamic";
export const revalidate = 0;


export async function GET() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/seo/sitemap.xml`);
  const xml = await res.text();

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
