export interface Video {
  title: string;
  preview: string;
  channel: string;
}

export type Videos = {
  [key: string]: Video;
};
