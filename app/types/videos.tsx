export interface Video {
  _id: string;
  url: string;
  channelId: string;
  description: string;
  likeCount: string;
  publishDate: string;
  title: string;
  uploadTime: string;
  viewCount: string;
  viewCountShort: string;
}

export type Videos = {
  [key: string]: Video;
};
