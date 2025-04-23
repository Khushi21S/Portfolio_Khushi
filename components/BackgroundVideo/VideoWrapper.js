"use client";

import React, { useState, useEffect } from "react";
import BackgroundVideo from "./BackgroundVideo";

const VideoWrapper = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVideoVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return <BackgroundVideo isVisible={isVideoVisible} />;
};

export default VideoWrapper; 