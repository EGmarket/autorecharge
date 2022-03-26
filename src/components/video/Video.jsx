import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="know_tm_video">
      <div className="video_inner" onClick={() => setOpen(true)}>
        <div className="circle"></div>
        <h3 className="play">Play Video</h3>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="7e90gBu4pas"
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default Video;
