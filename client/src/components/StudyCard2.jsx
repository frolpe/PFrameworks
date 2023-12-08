import { useStudy } from "../context/StudyContext";
import { Link } from "react-router-dom";

function StudyCard2({study}) {
    return (
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <h1 className="text-white">{study.names}</h1>
        </div>
    )

}

export default StudyCard2;