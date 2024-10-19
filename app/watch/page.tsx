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
        <h1 className="font-bold text-xl mt-2">{videos[v].title}</h1>
        <div className="flex justify-between mt-2">
          <div className="flex items-center">
            <Link href={videos[v].channel} title={channels[videos[v].channel].title} className="flex gap-3 mr-6">
              <div className="self-center">
                <Image src={channels[videos[v].channel].logo} alt={`${channels[videos[v].channel].title} logo`} width={40} height={40} className="rounded-full" />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="font-medium">{channels[videos[v].channel].title}</h2>
                <span className="text-xs text-ytSubtext">{channels[videos[v].channel].subscribers} subscribers</span>
              </div>
            </Link>
            <div className="bg-foreground text-background rounded-full flex items-center px-4 text-sm h-9 font-medium">Subscribe</div>
          </div>
          <div className="flex gap-2 items-center h-9">
            <div className="flex bg-ytBtn text-ytIcon rounded-full items-center h-full">
              <div className="flex hover:bg-ytBorderSideBar h-full rounded-l-full">
                <div className="flex self-center py-[3px] pl-3 pr-4 border-r border-r-ytBtnHover hover:border-r-ytBorderBtnHover items-center rounded-l-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                  </svg>
                  <span className="font-medium text-sm ml-2">204</span>
                </div>              
              </div>
              <div className="flex items-center pl-3 pr-4 h-full rounded-r-full hover:bg-ytBtnHover">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54" />
                </svg>              
              </div>
            </div>
            <div className="flex items-center gap-2 bg-ytBtn hover:bg-ytBorderSideBar rounded-full h-full px-[14px]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3" />
              </svg>
              <span className="text-sm font-medium">Share</span>
            </div>
            <div className="flex items-center gap-2 bg-ytBtn hover:bg-ytBorderSideBar rounded-full h-full px-[14px]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
              </svg>
              <span className="text-sm font-medium">Save</span>
            </div>
            <div className="bg-ytBtn hover:bg-ytBorderSideBar rounded-full size-9 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>              
            </div>
          </div>

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
              <h2 className="font-medium text-sm line-clamp-2">{title}</h2>
              <Link href={channel} title={channels[channel]["title"]} className="z-10">
                <span className="text-xs text-ytSubtext">{channels[channel]["title"]}</span>
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
