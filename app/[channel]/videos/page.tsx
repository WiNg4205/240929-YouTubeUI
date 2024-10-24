"use client"

import { Video } from "@/app/types/videos";
import Thumbnail from "@/app/components/Thumbnail";
import Link from "next/link";
import fetcher from "@/app/utils/fetcher";
import useSWR from "swr";

export default function FeaturedPage({ params }: { params: { channel: string } }) {
  const { data: channelData } = useSWR(`api/getChannelData/${params.channel}`, fetcher);
  const { data: videosData } = useSWR("api/getVideoData", fetcher);

  const { videos } = channelData || [];
  const getDataByUrl = (url: string) => {
    return videosData.find((obj: Video) => obj.url === url);
  };

  return (
    <div className="mt-4">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-x-4 gap-y-10 mt-4">
      {videos && videosData && videos.map((url: string) => (
          <div key={url}>
            <Link href={`/watch?v=${url}`}>
              <Thumbnail url={url} preview="https://i.ytimg.com/an_webp/5u7euN1HTuU/mqdefault_6s.webp?du=3000&sqp=COqJwrgG&rs=AOn4CLDhdRY6uz617sfPtrRycyO7wklFtA" />
              <h2 className="text-sm font-medium mt-2 mb-1">{getDataByUrl(url).title}</h2>
              <div className="text-sm text-ytSubtext">{getDataByUrl(url).viewCountShort} views • {getDataByUrl(url).uploadTime} ago</div>          
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
