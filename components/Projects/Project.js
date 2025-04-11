import React from "react";
import styles from "./project.module.scss";
import TitleFlag from "../SharedComponents/TitleFlag";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div className={styles.outerContainer}>
      <TitleFlag title={"MY PROJECTS"} />
      <ProjectCard
        number={"1"}
        projectName={"Spotify Clone"}
        stack1={"React.js"}
        stack2={"Node.js"}
        stack3={"Express.js"}
        link={"https://github.com/Khushi21S/Project_spotify"}
      />
       <ProjectCard
        number={"2"}
        projectName={"React Firebase Chat App"}
        stack1={"React.js"}
        stack2={"Firebase"}
        stack3={"CSS"}
        link={"https://github.com/Khushi21S/react-firebase-chat-app-main"}
      />
       <ProjectCard
        number={"3"}
        projectName={"House Price Prediction"}
        stack1={"pandas"}
        stack2={"numpy"}
        stack3={"scikit-learn"}
        link={"https://github.com/Khushi21S/House-Price-Prediction"}
      />
    </div>
  );
};

export default Project;
