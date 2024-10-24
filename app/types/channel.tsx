export interface Channel {
  _id: string;
  url: string;
  banner: string;
  customUrl: string;
  description: string;
  subscriberCount: string;
  thumbnail: string;
  title: string;
  videos: string[];
}

export type Channels = Channel[]

export const emptyChannel: Channel = {
  _id: '',
  url: '',
  banner: '',
  customUrl: '',
  description: '',
  subscriberCount: '0',
  thumbnail: '',
  title: '',
  videos: [],
};
