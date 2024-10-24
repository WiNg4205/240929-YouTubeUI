"use client";

import { useState, ReactNode } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import SideBar from "./components/SideBar/SideBar";
import { useVideos } from "./context/VideosContext";
import { useChannels } from "./context/ChannelsContext";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [toggleSideBar, setToggleSideBar] = useState(true);
  const { videos } = useVideos();
  const { channels } = useChannels();

  if (videos.length === 0 || channels.length === 0) {
    return <div>LOADING...</div>;
  }

  return (
    <div>
      <Header toggleSideBar={toggleSideBar} setToggleSideBar={setToggleSideBar} />
      <SideBar toggleSideBar={toggleSideBar} />
      <Content toggleSideBar={toggleSideBar}>
        {children}
      </Content>
    </div>
  );
}
