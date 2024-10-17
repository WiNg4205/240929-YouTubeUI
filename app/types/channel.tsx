export interface Channel {
  title: string;
  img: string;
  subscribers: string;
}

export type Channels = {
  [key: string]: Channel;
}
