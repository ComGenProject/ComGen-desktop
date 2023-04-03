import nodeLogo from "../assets/node.svg"
import { useState } from 'react'
import MinecraftButton from "@/Components/MinecraftButton";

function HomePage() {
    return (
        <div className="HomePage">
            <MinecraftButton title="BONJOUR"/>
            <MinecraftButton title="BONSOIR"/>
        </div>
    )
}

export default HomePage