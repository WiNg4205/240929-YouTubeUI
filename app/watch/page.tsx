"use client";

import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from 'next/navigation';
import videosData from "@/data/videos.json";
import channelsData from "@/data/channels.json";
import { Videos } from "@/app/types/videos";
import { Channels } from "@/app/types/channel";

const VideoContent = () => {
  const searchParams = useSearchParams();
  const v = searchParams.get('v');
  const videos: Videos = videosData || [];
  const channels: Channels = channelsData || [];
  
  if (v === null || !(v in videos)) {
    return <div>Video not found</div>;
  }

  return (
    <div>
      <iframe
        className="rounded-xl min-w-[1200px] aspect-video"
        src={`https://www.youtube.com/embed/${v}?rel=0&autoplay=1&mute=1`}
        allowFullScreen
      />
      <h1 className="font-semibold text-xl mt-2">{videos[v].title}</h1>
      <Link href={videos[v].channel} title={channels[videos[v].channel].title} className="mt-2 flex gap-3">
        <Image src={channels[videos[v].channel].img} alt={`${channels[videos[v].channel].title} logo`} width={40} height={40} className="rounded-full" />
        <span className="font-semibold pt-1">{channels[videos[v].channel].title}</span>
      </Link>
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
