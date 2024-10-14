import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {
  toggleSideBar: boolean,
  setToggleSideBar: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Header({toggleSideBar, setToggleSideBar}: Props) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="z-10 bg-background fixed top-0 w-screen flex justify-between items-center px-4 h-14">
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="size-10 p-2 hover:bg-ytBtnHoverLight rounded-full cursor-pointer" onClick={() => setToggleSideBar(!toggleSideBar)}>
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <Link href="/home">
          <div className="flex items-center px-3 py-4 gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="size-7">
              <path fill="#fd0017" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
              <path fill="white" d="M232.2 175.2l142.7 81.2-142.7 81.2V175.2z"/>
            </svg>
            <div className="text-xl font-logo tracking-tighter unhighlightable">YouTube</div>
          </div>      
        </Link>
      </div>

      <div className="flex gap-4">
        <div className="flex rounded-full h-10">
          {!isFocused && <div className="w-8 bg-background" />}
          <div className={`bg-ytInput pl-4 rounded-l-full flex border ${isFocused ? 'border-blue-500' : 'border-ytBorder'}`}>
            {isFocused && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 mr-3 text-ytIcon self-center">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>}
            <input
              className="bg-ytInput placeholder:text-ytPlaceholder text-ytInputText min-w-128 outline-none"
              placeholder="Search"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </div>
          <div className="border-y border-r border-ytBorder bg-ytBtn rounded-r-full flex items-center justify-center w-16 text-ytIcon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
        </div>
        <div className="bg-ytBtn rounded-full size-10 flex justify-center items-center hover:bg-ytBtnHover text-ytIcon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
            <path d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z" />
            <path d="M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z" />
          </svg>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="rounded-full size-10 flex justify-center items-center hover:bg-ytBtnHoverLight text-ytIcon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>
        </div>
        <div className="rounded-full size-10 flex justify-center items-center hover:bg-ytBtnHoverLight text-ytIcon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
          </svg>
        </div>
        <div className="bg-orange-600 rounded-full size-8 mx-2 flex items-center justify-center text-white">W</div>
      </div>
    </div>
  )
}
