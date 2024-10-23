"use client";

import Image from "next/image";
import Link from "next/link";
import { Video } from "@/app/types/videos";
import { Channel } from "@/app/types/channel";
import Thumbnail from "../components/Thumbnail";
import useSWR from "swr";
import fetcher from "@/app/utils/fetcher";

export default function Page() {
  const { data: videosData } = useSWR("api/getVideoData", fetcher);
  const { data: channelsData } = useSWR("api/getChannelData", fetcher);
  const getChannelByUrl = (url: string) => {
    return channelsData.find((obj: Channel) => obj.url === url);
  };
  
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-x-4 gap-y-10 pb-10">
      {videosData && channelsData && videosData.map((video: Video) => {
        const channel = getChannelByUrl(video.channelId);
        return (
          <Link href={`/watch?v=${video.channelId}`} key={video.url} title={video.title}>
            <Thumbnail url={video.url} preview="https://i.ytimg.com/an_webp/5u7euN1HTuU/mqdefault_6s.webp?du=3000&sqp=COqJwrgG&rs=AOn4CLDhdRY6uz617sfPtrRycyO7wklFtA" />
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
  )
}
