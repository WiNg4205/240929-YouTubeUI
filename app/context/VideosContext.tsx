"use client"

import { Videos } from "@/app/types/video"
import { Dispatch, ReactNode, SetStateAction, useContext, useState, createContext, useEffect } from "react";
import useSWR from "swr";
import fetcher from "../utils/fetcher";

interface VideosContextValue {
  videos: Videos;
  setVideos: Dispatch<SetStateAction<Videos>>;
}

const VideosContext = createContext<VideosContextValue>({
  videos: [],
  setVideos: () => {}
})

export function useVideos() {
  return useContext(VideosContext);
}

interface VideosProviderProps {
  children: ReactNode;
}

export default function VideosProvider({ children }: VideosProviderProps) {
  const [videos, setVideos] = useState<Videos>([]);
  const { data: videosData } = useSWR("api/getVideoData", fetcher);

  useEffect(() => {
    if (videosData) {
      setVideos(videosData);
    }
  }, [videosData])
  return (
    <VideosContext.Provider value={ {videos, setVideos} }>
      {children}
    </VideosContext.Provider>
  )
}
