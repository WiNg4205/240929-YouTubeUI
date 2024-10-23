import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';

type Props = {
  viewCount: string;
  viewCountShort: string;
  publishDate: string;
  description: string;
  uploadTime: string;
  titleRef: React.RefObject<HTMLHeadingElement>;
};

export default function Description({
  viewCount,
  viewCountShort,
  publishDate,
  description,
  uploadTime,
  titleRef,
}: Props) {
  const [expanded, setExpanded] = useState(false);
  const searchParams = useSearchParams();
  // fetch("api/updateData", {method: "PUT"});

  useEffect(() => {
    setExpanded(false);
    window.scrollTo(0, 0);
  }, [searchParams]);

  const scrollToTitle = () => {
    if (expanded && titleRef.current) {
      const { top } = titleRef.current.getBoundingClientRect();
      const offset = 80;
      const scrollToPosition = window.scrollY + top - offset;

      window.scrollTo({
        top: scrollToPosition,
        behavior: "smooth",
      });
    }
    
    setExpanded(false);
  };

  return (
    <div className="text-sm mt-3 bg-ytBtn rounded-xl">
      {expanded ? (
        <div className="p-3">
          <div className="font-medium">
            {viewCount} views &nbsp;{publishDate}
          </div>
          <div>
            {description &&
              description.split("\n").map((line: string, index: number) => {
                const match = line.match(/(http\S+)/);
                return line.trim() === "" ? (
                  <p key={index}>&nbsp;</p>
                ) : match ? (
                  <p key={index}>
                    {line.substring(0, match.index)}
                    <a
                      href={match[0]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ytLink"
                    >
                      {match[0]}
                    </a>
                  </p>
                ) : (
                  <p key={index}>{line}</p>
                );
              })}
          </div>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <span className="font-medium cursor-pointer" onClick={scrollToTitle}>
            Show Less
          </span>
        </div>
      ) : (
        <div className="p-3 cursor-pointer" onClick={() => setExpanded(true)}>
          <div className="font-medium">
            {viewCountShort} views &nbsp;{uploadTime} ago
          </div>
          <div>
            {description &&
              description
                .split("\n")
                .slice(0, 3)
                .map((line: string, index: number) => {
                  const match = line.match(/(http\S+)/);
                  const isBlank = line.trim() === "";

                  if (isBlank && index < 2) {
                    return <p key={index}>&nbsp;</p>;
                  } else if (isBlank && index === 2) {
                    return null;
                  }

                  return match ? (
                    <p key={index}>
                      {line.substring(0, match.index)}
                      <a
                        href={match[0]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ytLink"
                      >
                        {match[0]}
                      </a>
                    </p>
                  ) : (
                    <p key={index}>{line}</p>
                  );
                })}
          </div>
          <span className="font-medium">...more</span>
        </div>
      )}
    </div>
  );
}
