import Image from "next/image";

type Props = {
  url: string,
  preview: string
}

export default function Thumbnail({url, preview}: Props) {
  return (
    <div className="relative group">
      <Image
        src={`https://img.youtube.com/vi/${url}/0.jpg`}
        alt="Video Thumbnail"
        className="rounded-xl w-full h-full object-cover aspect-video"
        width={480}
        height={360}
        priority
      />
      <Image
        src={preview}
        alt="Video Preview"
        className="absolute inset-0 w-full h-full object-cover transition-opacity ease-out delay-200 duration-300 opacity-0 group-hover:opacity-100"
        width={480}
        height={360}
      />
    </div>
  )
}
