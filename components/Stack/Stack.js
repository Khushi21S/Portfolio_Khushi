import React from "react";
import styles from "./stack.module.scss";
import StackComponent from "./StackComponent";
import TitleFlag from "../SharedComponents/TitleFlag";
import javaScript from "../../public/js.png";
import bootstrap from "../../public/bootstrap.png";
import express from "../../public/express.png";
import gitlab from "../../public/gitlab.png";
import mongodb from "../../public/mongodb.png";
import nextjs from "../../public/nextjs.png";
import nodejs from "../../public/nodejs.png";
import postman from "../../public/postman.png";
import reactjs from "../../public/reactjs.png";
import redux from "../../public/redux.png";
import tailwind from "../../public/tailwind.png";

const Stack = () => {
  const frontendItems = [
    { imgSrc: javaScript, imgName: "JavaScript" },
    { imgSrc: nextjs, imgName: "NextJS" },
    { imgSrc: reactjs, imgName: "ReactJS" },
    { imgSrc: redux, imgName: "Redux" },
    { imgSrc: bootstrap, imgName: "Bootstrap" },
    { imgSrc: tailwind, imgName: "Tailwind CSS" },
  ];

  const backendItems = [
    { imgSrc: nodejs, imgName: "NodeJS" },
    { imgSrc: express, imgName: "ExpressJS" },
  ];

  const databaseItems = [{ imgSrc: mongodb, imgName: "MongoDB" }];

  const tools = [
    { imgSrc: gitlab, imgName: "Gitlab" },
    { imgSrc: postman, imgName: "Postman" },
  ];

  return (
    <div className={styles.outerContainer}>
      <TitleFlag title={"MY STACK"} />
      <StackComponent 
        title={"FRONTEND"} 
        items={frontendItems} 
        delay={0.1}
      />
      <StackComponent 
        title={"BACKEND"} 
        items={backendItems} 
        delay={0.2}
      />
      <StackComponent 
        title={"DATABASE"} 
        items={databaseItems} 
        delay={0.3}
      />
      <StackComponent 
        title={"TOOLS"} 
        items={tools} 
        delay={0.4}
      />
    </div>
  );
};

export default Stack;
