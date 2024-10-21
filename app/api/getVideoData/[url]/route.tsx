export async function GET(req: Request, { params }: { params: { url: string } }) {
  const { url } = params;
  const data = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${url}&key=${process.env.API_KEY}`);
  const video = await data.json();
  const { viewCount, likeCount } = video.items[0].statistics;
  const videoData = { viewCount, likeCount };
  
  if (videoData) {
    return new Response(JSON.stringify(videoData), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } else {
    return new Response(JSON.stringify({ error: 'Video not found' }), {
      status: 404,
    });
  }
}