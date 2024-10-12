"use client";

import { useState, ReactNode } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [toggleSideBar, setToggleSideBar] = useState(true);

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
