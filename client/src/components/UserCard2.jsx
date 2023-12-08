import { useUser } from "../context/userContext";
//import { useStudy } from "../context/StudyContext";
import { Link } from "react-router-dom";

function UserCard2({user}) {
    return (
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <h2>{user.names}</h2>
            <h2>{user.lastname}</h2>
            <p>{user.email}</p>
            <p>{user.age}</p>
        </div>
    )
}

export default UserCard2;