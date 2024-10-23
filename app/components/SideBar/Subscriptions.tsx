import { usePathname } from "next/navigation";
import LinkLayout from "./LinkLayout";
import Image from "next/image";
import fetcher from "@/app/utils/fetcher";
import useSWR from "swr";
import { Channel } from "@/app/types/channel";

export default function Subscriptions() {
  const pathname = usePathname();
  const { data } = useSWR("api/getChannelData", fetcher);
  const channelData: Channel[] = data || [];

  return (
    <div className="py-3">
      <span className="px-3 font-semibold pt-[6px] pb-1">Subscriptions</span>
      {channelData.map((channel: Channel) => (
        <LinkLayout key={channel.customUrl} currentRoute={pathname} route={`/${channel.customUrl}`} text={channel.title}>
          <Image src={channel.thumbnail} alt={`${channel.title} logo`} width={24} height={24} className="rounded-full" />
        </LinkLayout>
      ))}
    </div>
  );
}
