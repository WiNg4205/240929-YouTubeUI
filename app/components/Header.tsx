import Image from "next/image";

export default function Header() {
  return (
    <div className="flex justify-between items-center px-4">
      <div className="flex items-center">
        <Image src="bars-icon.svg" alt="Bell Icon" width={40} height={40} className="p-2 hover:bg-ytBtnHoverLight rounded-full" />
        <div className="flex items-center px-3 py-4">
          <Image src="youtube-icon.svg" alt="Youtube Icon" width={28} height={28}></Image>
          <div className="text-xl font-logo tracking-tighter">YouTube</div>          
        </div>        
      </div>

      <div className="flex gap-4">
        <div className="bg-ytInput border border-ytBorder flex rounded-full h-10">
          <div className="pl-4 flex">
            <input className="bg-ytInput placeholder:text-ytPlaceholder min-w-128 outline-none" placeholder="Search"></input>
          </div>
          <div className="border-l border-ytBorder bg-ytBtn rounded-r-full flex items-center justify-center w-16">
            <Image src="search-icon.svg" alt="Search Icon" width={20} height={20} />
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
        <div className="bg-orange-600 rounded-full size-8 mx-2 flex items-center justify-center">
          <div>W</div>
        </div>
      </div>
    </div>
  )
}