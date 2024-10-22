import { MongoClient } from "mongodb";

const uri = `mongodb+srv://serverless:${process.env.MONGO_PWD}@serverlessinstance0.pmg3ogh.mongodb.net/?retryWrites=true&w=majority&appName=ServerlessInstance0`;
const client = new MongoClient(uri);

export async function GET(req: Request, { params }: { params: { url: string } }) {
  try {
    await client.connect();
    const database = client.db("YouTubeClone");
    const collection = database.collection("videos");

    const video = await collection.findOne({ url: params.url });

    if (video) {
      return new Response(JSON.stringify(video), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return new Response(JSON.stringify({ error: 'Video not found' }), {
        status: 404,
      });
    }
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: 'Failed to fetch video' }), {
      status: 500,
    });
  } finally {
    await client.close();
  }
}
