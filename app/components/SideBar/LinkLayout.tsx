import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  currentRoute: string;
  route: string;
  text: string;
}

export default function LinkLayout({ children, currentRoute, route, text }: Props) {
  return (
    <Link href={route}>
      <div className={`flex items-center gap-6 w-full h-10 px-3 rounded-lg text-ytIcon ${currentRoute === route ? "bg-ytBtnHoverLight hover:bg-ytBtnHover" : "hover:bg-ytBtnHoverLight"} `}>
        {children}
        <div className={`text-sm ${currentRoute === route ? "font-semibold" : ""} `}>{text}</div>
      </div>
    </Link>
  )
}
