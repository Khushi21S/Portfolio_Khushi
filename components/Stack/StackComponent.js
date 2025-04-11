import React from "react";
import styles from "./stackComponent.module.scss";
import Image from "next/image";
import javascript from "../../public/js.png";


const StackComponent = ({title, items}) => {
    console.log("itemss", items)
    return (
        <div className={styles.outerContainer}>
            <p>{title} </p> 
            <div>
                {
                    items?.map((item, idx) => (                        <div key={idx}>
                        <Image src={item?.imgSrc} height={40} width={40} alt="javascript"/>
                        <span>{item?.imgName}</span>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}

export default StackComponent;


    
 