import React from 'react';
import style from './BackgroundVideo.module.css'
const BackgroundVideo = () => {
  return (
    <div className="video-container absolute w-[100%] overflow-hidden h-[100%] ">
      <video
        disablePictureInPicture
        autoPlay
        muted
        loop
        id="bgVideo"
        className="background-video" 
        style={{ width: '100%', height: '100%', objectFit: 'cover',position:'absolute',overflow:'hidden' }}
      > 
        <source
          src="https://dge74qcdvkym8.cloudfront.net/assets/background_video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      </div>
  );
};

export default BackgroundVideo;
