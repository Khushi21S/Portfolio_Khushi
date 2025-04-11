import React from "react";
import styles from "./experience.module.scss";
import TitleFlag from "../SharedComponents/TitleFlag";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
    return (
        <div className={styles.outerContainer}>
            <TitleFlag title={"MY EXPERIENCE"}/>
            <ExperienceCard company={"Zelta Labs Private Ltd"} title={"Associate Frontend Developer"} time={"Feb 2024 - Present"}/>
            <ExperienceCard company={"Dooper Health Private Ltd"} title={"Full Stack Developer Intern"} time={"June 2023 - July 2023"}/>
            <ExperienceCard company={"AugnaAR Technologies Private Ltd"} title={"Frontend Developer Intern"} time={"June 2022 - July 2022"}/>

        </div>
    )
}

export default Experience;