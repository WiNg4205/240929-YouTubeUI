import { ReactNode } from "react";

type Props = {
  toggleSideBar: boolean;
  children: ReactNode;
};

export default function Content({ toggleSideBar, children }: Props) {
  return (
    <div className={`mt-14 ${toggleSideBar ? 'ml-60' : 'ml-0'} h-screen p-4`}>
      {children}
    </div>
  );
}