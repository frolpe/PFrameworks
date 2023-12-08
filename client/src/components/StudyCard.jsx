import { useStudy } from "../context/StudyContext";
import { Link } from "react-router-dom";

function StudyCard({study}) {

    const {deleteStudy} = useStudy();

    return (
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <h1 className="text-white">{study.names}</h1>
=            <button onClick={() => {
                deleteSkill(study._id);
            }
            }>Delete</button>
            <button>
                <Link to={`/studies/${study._id}`}>Edit</Link>
            </button>
        </div>
    )

}

export default StudyCard;