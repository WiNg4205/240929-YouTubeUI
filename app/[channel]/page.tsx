"use client"

import { emptyVideo, Video } from "@/app/types/video";
import Thumbnail from "@/app/components/Thumbnail";
import Link from "next/link";
import { useVideos } from "@/app/context/VideosContext";
import { useChannels } from "@/app/context/ChannelsContext";
import { Channel } from "@/app/types/channel";

export default function FeaturedPage({ params }: { params: { channel: string } }) {
  const { videos } = useVideos();
  const { channels } = useChannels();
  const channel = channels.find((channel: Channel) => channel.customUrl === params.channel.replace(/%40/g, '@'));

  if (!channel) {
    return <div>Channel not found.</div>;
  }

  const getDataByUrl = (url: string) => {
    return videos.find((obj: Video) => obj.url === url) || emptyVideo;
  };

  return (
    <div className="mt-4">
      <h2 className="font-bold text-xl">For you</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-x-4 gap-y-10 mt-4">
      {channel.videos.map((url: string) => (
          <div key={url}>
            <Link href={`/watch?v=${url}`}>
              <Thumbnail url={url} preview={getDataByUrl(url).preview} />
              <h2 className="text-sm font-medium mt-2 mb-1">{getDataByUrl(url).title}</h2>
              <div className="text-sm text-ytSubtext">{getDataByUrl(url).viewCountShort} views • {getDataByUrl(url).uploadTime} ago</div>          
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
