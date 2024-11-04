import { MongoClient } from "mongodb";
import videoList from "@/data/videoList.json";
import channelList from "@/data/channelList.json";
import previewList from "@/data/previewList.json";
import { formatLikeCount, formatSubscriberCount, getTimeDifference } from "@/app/utils/format";
import { NextResponse } from "next/server";

const uri = `mongodb+srv://serverless:${process.env.MONGO_PWD}@serverlessinstance0.pmg3ogh.mongodb.net/?retryWrites=true&w=majority&appName=ServerlessInstance0`;
const client = new MongoClient(uri);

export async function GET() {
  try {
    await client.connect();
    const database = client.db("YouTubeClone");
    const channelCollection = database.collection("channels");
    const videoCollection = database.collection("videos");

    for (const url of channelList) {
      const stats = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet,brandingSettings&id=${url}&key=${process.env.API_KEY}`,
      { cache: "no-store" }
    );
      const channelStats = await stats.json();

      if (channelStats.items.length > 0) {
        const { title, customUrl, description } = channelStats.items[0].snippet;
        let { subscriberCount } = channelStats.items[0].statistics;
        subscriberCount = formatSubscriberCount(subscriberCount);
        const { url: thumbnail } = channelStats.items[0].snippet.thumbnails.high;
        let { bannerExternalUrl: banner } = channelStats.items[0].brandingSettings.image;
        banner = banner + "=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
        const videos: string[] = [];
        const channelData = { title, customUrl, description, subscriberCount, thumbnail, banner, videos };

        await channelCollection.updateOne(
          { url },
          { $set: channelData },
          { upsert: true }
        );
      }
    }

    for (const url of videoList) {
      const stats = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics,snippet&id=${url}&key=${process.env.API_KEY}`);
      const videoStats = await stats.json();

      if (videoStats.items.length > 0) {
        let { viewCount, likeCount } = videoStats.items[0].statistics;
        const viewCountShort = formatLikeCount(Number(viewCount));
        likeCount = formatLikeCount(Number(likeCount));
        viewCount = Number(viewCount).toLocaleString();
        const { title, description, publishedAt, channelId } = videoStats.items[0].snippet;
        const publishDate = new Date(publishedAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
        const uploadTime = getTimeDifference(publishedAt);
        const previews = previewList as Record<string, string>;
        const preview: string = previews[url];
        const videoData = { url, title, viewCount, viewCountShort, likeCount, description, publishDate, uploadTime, channelId, preview };

        await videoCollection.updateOne(
          { url },
          { $set: videoData },
          { upsert: true }
        );

        const channel = await channelCollection.findOne({ url: channelId });
        
        if (channel) {
          const videoUrls = channel.videos || [];
          if (!videoUrls.includes(url)) {
            videoUrls.push(url);
          }

          await channelCollection.updateOne(
            { url: channelId },
            { $set: { videos: videoUrls } }
          );
        }
      }
    }
    return NextResponse.json({ message: "Success", status: 200 });
    
  } catch (error) {
    console.error("Error:", error);
    let errorMessage = "Unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ message: "Error occurred", error: errorMessage, status: 500 });
  } finally {
    await client.close();
  }
}
