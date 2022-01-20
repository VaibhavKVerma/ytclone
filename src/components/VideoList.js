import react from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((ele) => {
    return (
      <VideoItem
        key={ele.id.videoId}
        onVideoSelect={onVideoSelect}
        video={ele}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
