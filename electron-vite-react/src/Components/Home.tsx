import McButtons from "@/Components/utilities/McButtons";
import "@/styles/styles.css"
import nodeLogo from "../assets/node.svg"
import {useState} from 'react'
import {Link, useNavigate} from "react-router-dom"


function Home() {

    return (
        <div className="Home">
            <McButtons title="GIVE" taille="1" path="give"/>
            <McButtons title="ENCHANT" taille="1" path="enchant"/>
        </div>
    )

}

export default Home
