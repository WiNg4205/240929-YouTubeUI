import Main from "./Main";
import Subscriptions from "./Subscriptions";
import You from "./You";

type Props = {
  toggleSideBar: boolean
}

export default function SideBar({ toggleSideBar }: Props) {
  return (
    <>
      {toggleSideBar && (
        <div className="fixed top-14 w-60 h-[calc(100vh-3.5rem)] overflow-y-scroll scrollbox pl-3 py-3">
          <Main />
          <You />
          <Subscriptions />
        </div>
      )}
    </>
  )
}
