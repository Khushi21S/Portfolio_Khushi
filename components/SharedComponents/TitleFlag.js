import React from "react";
import styles from "./titleFlag.module.scss";
import Image from "next/image";
import rhombus from "../../public/rhombus.png";

const TitleFlag = ({title}) => {
  return (
    <div className={styles.container}>
      <Image src={rhombus} alt="titleFlag"/> 
      <span>{title}</span>
    </div>
  );
};

export default TitleFlag;
