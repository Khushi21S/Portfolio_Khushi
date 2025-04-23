"use client";

import React, {useState, useEffect} from "react";
import styles from "./progressBar.module.scss";

const ProgressBar = ({containerRef}) => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const container = containerRef?.current;
        if (!container) return;

        const handleScroll = () => {
            const scrollTop = container.scrollTop;
            const scrollHeight = container.scrollHeight - container.clientHeight;
            const progress = (scrollTop / scrollHeight) * 100;
            setScrollProgress(Math.min(progress, 100));
        };

        container.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial calculation

        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, [containerRef]);

    return (
        <div className={styles.progressContainer}>
            <div
                className={styles.progressBar}
                style={{ 
                    height: `${scrollProgress}%`,
                    transition: 'height 0.1s ease-out'
                }}
            />
        </div>
    );
};

export default ProgressBar;
