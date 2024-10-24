"use client";

import Image from "next/image";
import Link from "next/link";
import { Video } from "@/app/types/video";
import { Channel, emptyChannel } from "@/app/types/channel";
import Thumbnail from "../components/Thumbnail";
import { useVideos } from "@/app/context/VideosContext";
import { useChannels } from "@/app/context/ChannelsContext";

export default function Page() {
  const { videos } = useVideos();
  const { channels } = useChannels();
  const getChannelByUrl = (url: string) => {
    return channels.find((obj: Channel) => obj.url === url) || emptyChannel;
  };

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-x-4 gap-y-10 pb-10">
      {videos.map((video: Video) => {
        const channel = getChannelByUrl(video.channelId);
        return (
          <Link href={`/watch?v=${video.url}`} key={video.url} title={video.title}>
            <Thumbnail url={video.url} preview={video.preview} />
            <div className="flex mt-3 gap-3">
              <Link href={channel.customUrl} className="z-10" title="">
                <div className="size-9">
                  <Image
                    src={channel.thumbnail}
                    alt={`${channel.title} logo`}
                    width={36}
                    height={36}
                    className="rounded-full"
                    priority
                  />
                </div>
              </Link>
              <div>
                <h2 className="font-medium line-clamp-2">{video.title}</h2>
                <Link href={channel.customUrl} title={channel.title} className="z-10">
                  <span className="text-sm text-ytSubtext">{channel.title}</span>
                </Link>
                <div className="text-sm text-ytSubtext">{video.viewCountShort} views • {video.uploadTime} ago</div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
