import { Stack } from "@mui/material";
import React, { useRef, useState } from "react";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

interface VideoPlayerProps {
  videoUrl: string;
  thumbnailUrl: string;
  buttonSize: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  thumbnailUrl,
  buttonSize,
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showThumbnail, setShowThumbnail] = useState<boolean>(true);

  const handleVideoClick = (play: boolean) => {
    if (play) {
      setShowThumbnail(false);
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
      setShowThumbnail(true);
    }
  };

  return (
    <Stack width={"100%"} position={"relative"} sx={{ border: "none" }}>
      {showThumbnail && (
        <>
          <PlayCircleFilledIcon
            sx={{
              position: "absolute",
              fontSize: buttonSize,
              top: "50%",
              left: "50%",
              color: "secondary.dark",
              transform: "translate(-50%, -50%)",
              cursor: "pointer",
            }}
            onClick={() => {
              handleVideoClick(true);
            }}
          />
          <img
            src={thumbnailUrl}
            alt="Video Thumbnail"
            style={{
              width: "100%",
              cursor: "pointer",
              objectFit: "contain",
              borderRadius: "0.25rem",
              border: "none",
            }}
            onClick={() => {
              handleVideoClick(true);
            }}
          />
        </>
      )}

      <video
        ref={videoRef}
        controls
        style={{
          display: showThumbnail ? "none" : "block",
          width: "100%",
          objectFit: "contain",
          borderRadius: "0.25rem",
          border: "none",
        }}
        onPause={() => {
          handleVideoClick(false);
        }}
        onPlay={() => {
          handleVideoClick(true);
        }}
      >
        <source src={videoUrl} type="video/mp4" />
        Your Browser does not support playing video.
      </video>
    </Stack>
  );
};

export default VideoPlayer;
