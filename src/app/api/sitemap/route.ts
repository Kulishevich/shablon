export async function GET() {
  const res = await fetch(`${process.env.API_URL}/v1/seo/sitemap.xml`);
  const xml = await res.text();

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
