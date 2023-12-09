import { useUser } from "../context/userContext";
//import { useStudy } from "../context/StudyContext";
import { Link } from "react-router-dom";

function UserCard2({user}) {
    return (
        <div>
            <h2>{user.names}</h2>
            <h2>{user.lastname}</h2>
            <p>{user.email}</p>
            <p>{user.age}</p>
        </div>
    )
}

export default UserCard2;