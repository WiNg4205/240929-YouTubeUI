export interface Video {
  title: string;
  channel: string;
}

export type Videos = {
  [key: string]: Video;
};
