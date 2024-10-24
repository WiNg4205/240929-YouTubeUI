"use client"

import { Channels } from "@/app/types/channel";
import { Dispatch, ReactNode, SetStateAction, useContext, useState, createContext, useEffect } from "react";
import useSWR from "swr";
import fetcher from "../utils/fetcher";

interface ChannelsContextValue {
  channels: Channels;
  setChannels: Dispatch<SetStateAction<Channels>>;
}

const ChannelsContext = createContext<ChannelsContextValue>({
  channels: [],
  setChannels: () => {}
})

export function useChannels() {
  return useContext(ChannelsContext);
}

interface ChannelsProviderProps {
  children: ReactNode;
}

export default function ChannelsProvider({ children }: ChannelsProviderProps) {
  const { data: channelsData } = useSWR("api/getChannelData", fetcher);
  const [channels, setChannels] = useState<Channels>([]);

  useEffect(() => {
    if (channelsData) {
      setChannels(channelsData);
    }
  }, [channelsData]);

  return (
    <ChannelsContext.Provider value={ {channels, setChannels} }>
      {children}
    </ChannelsContext.Provider>
  );
};
