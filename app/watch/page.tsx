"use client";

import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from 'next/navigation';
import videosData from "@/data/videos.json";
import channelsData from "@/data/channels.json";
import { Videos } from "@/app/types/videos";
import { Channels } from "@/app/types/channel";
import Thumbnail from "../components/Thumbnail";

const VideoContent = () => {
  const searchParams = useSearchParams();
  const v = searchParams.get('v');
  const videos: Videos = videosData || [];
  const channels: Channels = channelsData || [];
  
  if (v === null || !(v in videos)) {
    return <div>Video not found</div>;
  }

  return (
    <div className="flex w-full justify-between">
      <div className="object-fill flex-1 px-6">
        <iframe
          className="rounded-xl w-full aspect-video"
          src={`https://www.youtube.com/embed/${v}?rel=0&autoplay=1&mute=1`}
          allowFullScreen
        />
        <h1 className="font-semibold text-xl mt-2">{videos[v].title}</h1>
        <div className="flex mt-2">
          <Link href={videos[v].channel} title={channels[videos[v].channel].title} className="flex gap-3 mr-6">
            <div className="self-center">
              <Image src={channels[videos[v].channel].img} alt={`${channels[videos[v].channel].title} logo`} width={40} height={40} className="rounded-full" />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="font-semibold">{channels[videos[v].channel].title}</h2>
              <span className="text-xs text-neutral-500">{channels[videos[v].channel].subscribers} subscribers</span>
            </div>
          </Link>
          <div className="bg-foreground text-background rounded-full flex items-center px-4 text-sm">Subscribe</div>
        </div>
      </div>
      <div className="w-96">
        {Object.entries(videos).map(([url, {title, preview, channel}]) => (
          v !== url && (
          <Link href={`/watch?v=${url}`} key={url} title={title} className="flex gap-2">
            <div className="h-24 aspect-video mb-2 group">
              <Thumbnail url={url} preview={preview} />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="font-semibold text-sm line-clamp-2">{title}</h2>
              <Link href={channel} title={channels[channel]["title"]} className="z-10">
                <span className="text-xs text-neutral-500">{channels[channel]["title"]}</span>
              </Link>
            </div>
          </Link>            
          )
        ))}
      </div>
    </div>
  );
};

export default function VideoPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VideoContent />
    </Suspense>
  );
}
