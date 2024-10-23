import { MongoClient } from "mongodb";

const uri = `mongodb+srv://serverless:${process.env.MONGO_PWD}@serverlessinstance0.pmg3ogh.mongodb.net/?retryWrites=true&w=majority&appName=ServerlessInstance0`;
const client = new MongoClient(uri);

export async function GET() {
  try {
    await client.connect();
    const database = client.db("YouTubeClone");
    const collection = database.collection("channels");
    const channels = await collection.find({}).toArray();

    return new Response(JSON.stringify(channels), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch channels" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  } finally {
    await client.close();
  }
}
