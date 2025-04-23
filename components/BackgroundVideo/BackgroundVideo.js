"use client";

import React from "react";
import styles from "./backgroundVideo.module.scss";

const BackgroundVideo = ({ isVisible = true }) => {
  return (
    <div className={styles.videoContainer} style={{ display: isVisible ? 'block' : 'none' }}>
      <video autoPlay loop muted playsInline className={styles.video}>
        <source src="/backgroundVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
