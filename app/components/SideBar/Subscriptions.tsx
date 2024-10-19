import { usePathname } from "next/navigation";
import LinkLayout from "./LinkLayout";
import Image from "next/image";
import subscriptions from "@/data/channels.json";

export default function Subscriptions() {
  const pathname = usePathname();

  return (
    <div className="py-3">
      <span className="px-3 font-semibold pt-[6px] pb-1">Subscriptions</span>
      {Object.entries(subscriptions).map(([route, { title, logo }]) => (
        <LinkLayout key={route} currentRoute={pathname} route={route} text={title}>
          <Image src={logo} alt={`${title} logo`} width={24} height={24} className="rounded-full" />
        </LinkLayout>
      ))}
    </div>
  );
}
