import { useAuth } from "../context/AuthContext";

function SkillPage() {

    const {user} = useAuth();
    console.log(user);


    return(
        <div>
            Skill Page
        </div>
    )
}

export default SkillPage;