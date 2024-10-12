import Image from "next/image"
import Link from "next/link";
import { usePathname } from "next/navigation"

type Props = {
  toggleSideBar: boolean
}

export default function SideBar({ toggleSideBar }: Props) {
  const pathname = usePathname();
  return (
    <>
      {toggleSideBar && (
        <div className="fixed top-14 w-60 h-[calc(100vh-3.5rem)] overflow-y-scroll scrollbox pl-3 py-3">
          <div className="pb-3 border-b border-ytBorderSideBar">
            <Link href="/home">
              <div className={`flex items-center gap-6 w-full h-10 px-3 rounded-lg ${pathname === '/home' ? "bg-ytBtnHoverLight hover:bg-ytBtnHover" : "hover:bg-ytBtnHoverLight"} `}>
                {pathname === '/home' ? <Image src="home-solid.svg" alt="Home Image" width={24} height={24} /> : <Image src="home-outline.svg" alt="Home Image" width={24} height={24} />}
                <div className={`text-white text-sm ${pathname === '/home' ? "font-semibold" : ""} `}>Home</div>
              </div>            
            </Link>
            <Link href="/shorts">
              <div className={`flex items-center gap-6 w-full h-10 px-3 rounded-lg ${pathname === '/shorts' ? "bg-ytBtnHoverLight hover:bg-ytBtnHover" : "hover:bg-ytBtnHoverLight"} `}>
                {pathname === '/shorts' ? <Image src="shorts-solid.svg" alt="Home Image" width={24} height={24} /> : <Image src="shorts-outline.svg" alt="Home Image" width={24} height={24} />}
                <div className={`text-white text-sm ${pathname === '/shorts' ? "font-semibold" : ""} `}>Shorts</div>
              </div>            
            </Link>
            <Link href="/subscriptions">
              <div className={`flex items-center gap-6 w-full h-10 px-3 rounded-lg ${pathname === '/subscriptions' ? "bg-ytBtnHoverLight hover:bg-ytBtnHover" : "hover:bg-ytBtnHoverLight"} `}>
                {pathname === '/subscriptions' ? <Image src="subscriptions-solid.svg" alt="Home Image" width={24} height={24} /> : <Image src="subscriptions-outline.svg" alt="Home Image" width={24} height={24} />}
                <div className={`text-white text-sm ${pathname === '/subscriptions' ? "font-semibold" : ""} `}>Subscriptions</div>
              </div>            
            </Link>
          </div>

          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          A
        </div>
      )}
    </>
  )
}
