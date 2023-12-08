import { useExp } from "../context/ExpContext";
import { Link } from "react-router-dom";

function ExpCard({exp}) {

    const {deleteExp} = useExp();

    return (
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <h1 className="text-white">{exp.names}</h1>
            <p>{exp.position}</p>
            <p>{exp.time}</p>
            <p>{exp.description}</p>
            <button onClick={() => {
                deleteExp(exp._id);
            }
            }>Delete</button>
            <button>
                <Link to={`/exps/${exp._id}`}>Edit</Link>
            </button>
        </div>
    )

}

export default ExpCard;