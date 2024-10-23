"use client"

import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import fetcher from "@/app/utils/fetcher";
import useSWR from "swr";

interface ChannelProps {
  params: {
    channel: string;
  };
  children: ReactNode;
}

export default function ChannelPage({ params, children }: ChannelProps) {
  const { data } = useSWR(`api/getChannelData/${params.channel}`, fetcher);
  const { title, subscriberCount, description, banner, thumbnail, customUrl, videos } = data || 0;
  const pathname = usePathname();

  return (
    <div className="">
      <Image
        src={banner}
        alt={`${title} background image`}
        width={1707}
        height={282}
        className="rounded-xl object-cover"
      />
      <div className="flex items-center gap-4 mt-4">
        <Image
        src={thumbnail}
        alt={`${title} logo`}
          width={480}
          height={360}
          className="size-40 rounded-full"
        />
        <div>
          <h1 className="text-4xl font-extrabold">{title}</h1>
          <h3 className="text-sm text-ytSubtext mt-2">{customUrl} • {subscriberCount} subscribers • {videos && videos.length} videos</h3>
          <p className="text-sm text-ytSubtext mt-2 max-w-96 truncate">{description}</p>
          <div className="bg-foreground text-background rounded-full inline-flex items-center px-4 mt-3 text-sm h-9 font-medium">Subscribe</div>
        </div>
      </div>
      <div className="h-12 border-b border-b-ytBorderSideBar flex">
        <Link href={`/${customUrl}/featured`}>
          <div className={`mr-6 px-[2px] h-full  ${pathname === `/${customUrl}` || pathname === `/${customUrl}/featured` ? 'text-foreground border-b-2 border-b-foreground' : 'text-ytSubtext'} font-medium flex items-center`}>Home</div>
        </Link>
        <Link href={`/${customUrl}/videos`}>
          <div className={`mr-6 px-[2px] h-full  ${pathname === `/${customUrl}/videos` ? 'text-foreground border-b-2 border-b-foreground' : 'text-ytSubtext'} font-medium flex items-center`}>Videos</div>
        </Link>
        <div className="text-ytSubtext flex">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 self-center">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </div>
      </div>
      {children}
    </div>
  )
}
