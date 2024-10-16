import { usePathname } from "next/navigation";
import { ReactNode, useEffect } from "react";

type Props = {
  toggleSideBar: boolean;
  children: ReactNode;
};

export default function Content({ toggleSideBar, children }: Props) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className={`mt-14 pr-6 ${toggleSideBar ? 'ml-60' : 'ml-0'} h-screen p-4`}>
      {children}
    </div>
  );
}