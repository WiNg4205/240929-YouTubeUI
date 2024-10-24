export interface Video {
  _id: string;
  url: string;
  channelId: string;
  description: string;
  likeCount: string;
  publishDate: string;
  preview: string;
  title: string;
  uploadTime: string;
  viewCount: string;
  viewCountShort: string;
}

export type Videos = Video[]

export const emptyVideo: Video = {
  _id: '',
  url: '',
  channelId: '',
  description: '',
  likeCount: '0',
  publishDate: '',
  preview: '',
  title: '',
  uploadTime: '',
  viewCount: '0',
  viewCountShort: '0',
};