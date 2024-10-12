import Image from "next/image";
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
        <Image src="bars-icon.svg" alt="Bell Icon" width={40} height={40} className="p-2 hover:bg-ytBtnHoverLight rounded-full" onClick={() => setToggleSideBar(!toggleSideBar)} />
        <div className="flex items-center px-3 py-4 gap-1">
          <Image src="youtube-icon.svg" alt="Youtube Icon" width={28} height={28} />
          <div className="text-xl font-logo tracking-tighter">YouTube</div>          
        </div>
      </div>

      <div className="flex gap-4">
        
        <div className={`flex rounded-full h-10 bg-ytInput`}>
          {!isFocused && <div className="w-8" />}
          <div className={`pl-4 rounded-l-full flex border ${isFocused ? 'border-blue-500' : 'border-ytBorder'}`}>
            {isFocused && <Image src="search.svg" alt="Search Icon" width={20} height={20} className="mr-3" />}
            <input
              className="bg-ytInput placeholder:text-ytPlaceholder min-w-128 outline-none"
              placeholder="Search"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </div>
          <div className="border-y border-r border-ytBorder bg-ytBtn rounded-r-full flex items-center justify-center w-16">
            <Image src="search.svg" alt="Search Icon" width={24} height={24} />
          </div>
        </div>
        <div className="bg-ytBtn rounded-full size-10 flex justify-center items-center hover:bg-ytBtnHover">
          <Image src="microphone-icon.svg" alt="Microphone Icon" width={20} height={20} />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="rounded-full size-10 flex justify-center items-center hover:bg-ytBtnHoverLight">
          <Image src="camera-icon.svg" alt="Video Icon" width={24} height={24} />
        </div>
        <div className="rounded-full size-10 flex justify-center items-center hover:bg-ytBtnHoverLight">
          <Image src="bell-icon.svg" alt="Bell Icon" width={24} height={24} />
        </div>
        <div className="bg-orange-600 rounded-full size-8 mx-2 flex items-center justify-center">W</div>
      </div>
    </div>
  )
}