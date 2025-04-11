import React from "react";
import styles from "./projectCard.module.scss";
import Image from "next/image";
import redirect from "../../public/maximize.png";
import Link from "next/link";

const ProjectCard = ({ number, projectName, stack1, stack2, stack3, link }) => {
  return (
    <div className={styles.outerContainer}>
      <div>
        <span>_0{number}.</span>
        <div>
          <Link href={link} target="_blank" rel="noopener noreferrer">
            <span className={styles.projectName}>
              {projectName}
              <span>
                <Image src={redirect} alt="redirect" />
              </span>
            </span>
          </Link>
          <div>
            <span>{stack1}</span>
            <span className={styles.separation}></span>
            <span>{stack2}</span>
            <span className={styles.separation}></span>
            <span>{stack3}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
