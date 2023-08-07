import React, { useRef, useState } from "react";
import { IoPauseCircle, IoPlayCircle } from "react-icons/io5";

type Props = {
  src: string;
};

function VideoPlayer({ src }: Props) {
  const videoRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };

  return (
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
        } play-pause-btn cursor-pointer z-10 bg-white rounded`}
      >
        {isPlaying ? <IoPauseCircle /> : <IoPlayCircle />}
      </button>
      <video loop autoPlay muted ref={videoRef}>
        <source src={src} type="video/mp4"></source>
      </video>
    </div>
  );
}

export default VideoPlayer;
