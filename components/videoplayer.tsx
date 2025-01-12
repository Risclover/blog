import React, { useRef, useState } from "react";
import { BsPlayCircle, BsPauseCircle } from "react-icons/bs";

type Props = {
  src: string;
  subtitle?: string;
};

function VideoPlayer({ src, subtitle }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <div
        className="relative custom-video-player"
        onClick={() => (isPlaying ? handlePause() : handlePlay())}
      >
        <div
          className={`video-player-overlay ${isPlaying && "overlay-fade"}`}
        ></div>
        <button
          className={`${
            !isPlaying && "show-btn"
          } play-pause-btn cursor-pointer z-9 rounded`}
        >
          {isPlaying ? <BsPauseCircle /> : <BsPlayCircle />}
        </button>
        <video loop muted ref={videoRef}>
          <source src={src} type="video/mp4"></source>
        </video>{" "}
      </div>
      <div className="text-base italic leading-snug mt-[-20px]">{subtitle}</div>
    </>
  );
}

export default VideoPlayer;
