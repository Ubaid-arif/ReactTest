import React from "react";

const VideoSection = () => {
  return (
    <div className="videoSectionMain">
      <div className="videoContainer">
        <iframe
          width="100%"
          height="861.38px"
          src="https://www.youtube.com/embed/Xj4d_dwforA?si=kiRMRBnlQ8ZI5bfg&amp;controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoSection;
