import { useExp } from "../context/ExpContext";
import { Link } from "react-router-dom";

function ExpCard2({exp}) {
    return (
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <h1 className="text-white">{exp.names}</h1>
            <p>{exp.position}</p>
            <p>{exp.time}</p>
            <p>{exp.description}</p>
        </div>
    )

}

export default ExpCard2;