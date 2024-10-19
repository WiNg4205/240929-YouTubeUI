export interface Channel {
  title: string;
  logo: string;
  background: string;
  subscribers: string;
  description: string;
  links: string[];
  videos: string[];
}

export type Channels = {
  [key: string]: Channel;
}
