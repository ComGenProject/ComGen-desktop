import nodeLogo from "../assets/node.svg"
import { useState } from 'react'
import styles from '../styles/main.module.css'

interface MinecraftButtonProps{
    title : string;
}

const MinecraftButton: React.FC<MinecraftButtonProps> = ({ title }) => {

    return (
        <div className={styles.mc_button}>
            <div className={styles.mc_button_title}>{title}</div>
        </div>
    );
}

export default MinecraftButton