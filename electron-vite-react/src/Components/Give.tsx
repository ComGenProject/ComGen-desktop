import McButtons from "@/Components/utilities/McButtons";
import "@/styles/styles.css"
import {useNavigate} from "react-router-dom";

function Give() {

    return (
        <div className="Give">
            <h1>Give</h1>
            <McButtons path="goback" title="Retour" taille="1"/>
        </div>

    )
}

export default Give
