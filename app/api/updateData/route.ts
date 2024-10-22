import { MongoClient } from "mongodb";
import videoList from "@/data/videoList.json";
import { formatNumber, getTimeDifference } from "@/app/utils/format";

const uri = `mongodb+srv://serverless:${process.env.MONGO_PWD}@serverlessinstance0.pmg3ogh.mongodb.net/?retryWrites=true&w=majority&appName=ServerlessInstance0`;
const client = new MongoClient(uri);

export async function PUT() {
  try {
    await client.connect();
    const database = client.db("YouTubeClone");
    const collection = database.collection("videos");

    for (const url of videoList) {
      const stats = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics,snippet&id=${url}&key=${process.env.API_KEY}`);
      const videoStats = await stats.json();

      if (videoStats.items.length > 0) {
        let { viewCount, likeCount } = videoStats.items[0].statistics;
        const viewCountShort = formatNumber(Number(viewCount));
        likeCount = formatNumber(Number(likeCount));
        viewCount = Number(viewCount).toLocaleString();
        const { title, description, publishedAt } = videoStats.items[0].snippet;
        const publishDate = new Date(publishedAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
        const uploadTime = getTimeDifference(publishedAt);

        const videoData = { url, title, viewCount, viewCountShort, likeCount, description, publishDate, uploadTime };

        await collection.updateOne(
          { url },
          { $set: videoData },
          { upsert: true }
        );
      }
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await client.close();
  }
}
