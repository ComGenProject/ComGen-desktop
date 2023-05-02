import McButtons from "@/Components/utilities/McButtons";
import "@/styles/styles.css"
import {useNavigate} from "react-router-dom";

function Enchant() {

    return (
        <div className="Enchant">
            <h1>Enchant</h1>
            <McButtons path="goback" title="Retour" taille="1"/>
        </div>

    )
}

export default Enchant
