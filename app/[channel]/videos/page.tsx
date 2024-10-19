import videosData from "@/data/videos.json";
import channelsData from "@/data/channels.json";
import { Videos } from "@/app/types/videos";
import { Channels } from "@/app/types/channel";
import Thumbnail from "@/app/components/Thumbnail";
import Link from "next/link";

export default function VideosPage({ params }: { params: { channel: string } }) {
  const channel = params.channel.replace(/%40/g, '/@');
  const videos: Videos = videosData || [];
  const channels: Channels = channelsData || [];

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 mt-4">
      {channels[channel].videos.map((url) => (
        <div key={url}>
          <Link href={`/watch?v=${url}`}>
            <Thumbnail url={url} preview={videos[url].preview} />
            <h2 className="text-sm font-medium mt-2">{videos[url].title}</h2>          
          </Link>
        </div>
      ))}
    </div>
  )
}
