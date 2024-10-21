import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type Props = {
  toggleSideBar: boolean,
  setToggleSideBar: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Header({toggleSideBar, setToggleSideBar}: Props) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="z-20 bg-background fixed top-0 w-screen flex justify-between items-center pl-4 pr-10 h-14">
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-10 p-2 hover:bg-ytBtnHoverLight rounded-full cursor-pointer" onClick={() => setToggleSideBar(!toggleSideBar)}>
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <Link href="/home" title="YouTube Home">
          <div className="flex items-center px-3 py-4 gap-1">
            <Image src="/youtube-icon.svg" alt="YouTube Icon" width={28} height={28} className="size-7" />
            <div className="text-xl font-logo tracking-tighter unhighlightable">YouTube</div>
          </div>
        </Link>
      </div>

      <div className="flex gap-4">
        <div className="flex rounded-full h-10">
          {!isFocused && <div className="w-8 bg-background" />}
          <div className={`bg-ytInput pl-4 rounded-l-full flex border ${isFocused ? 'border-blue-500' : 'border-ytBorder'}`}>
            {isFocused && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 mr-3 text-ytIcon self-center">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>}
            <input
              className="bg-ytInput placeholder:text-ytPlaceholder text-ytInputText min-w-128 outline-none"
              placeholder="Search"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </div>
          <div className="border-y border-r border-ytBorder bg-ytBtn rounded-r-full flex items-center justify-center w-16 text-ytIcon relative group">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <div className="absolute top-full mt-5 hidden group-hover:block bg-ytBtnHoverText opacity-80 p-2 rounded text-white text-xs">Search</div>
          </div>
        </div>
        <div className="bg-ytBtn rounded-full size-10 flex justify-center items-center hover:bg-ytBtnHover text-ytIcon relative group">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
            <path d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z" />
            <path d="M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z" />
          </svg>
          <div className="absolute top-full mt-5 hidden group-hover:block bg-ytBtnHoverText opacity-80 p-2 rounded text-white text-xs whitespace-nowrap">Search with your voice</div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="rounded-full size-10 flex justify-center items-center hover:bg-ytBtnHoverLight text-ytIcon relative group">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06l-3.22-3.22V16.5a.75.75 0 0 1-1.5 0V4.81L8.03 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5ZM3 15.75a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
          </svg>
          <div className="absolute top-full mt-5 hidden group-hover:block bg-ytBtnHoverText opacity-80 p-2 rounded text-white text-xs">Upload</div>
        </div>
        <div className="rounded-full size-10 flex justify-center items-center hover:bg-ytBtnHoverLight text-ytIcon relative group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
          </svg>
          <div className="absolute top-full mt-5 hidden group-hover:block bg-ytBtnHoverText opacity-80 p-2 rounded text-white text-xs">Notifications</div>
        </div>
        <div className="bg-orange-600 rounded-full size-8 mx-2 flex items-center justify-center text-white px-[6px]">W</div>
      </div>
    </div>
  )
}
