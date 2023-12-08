import { useEffect } from "react";
import { useExp } from "../context/ExpContext";
import { Link } from "react-router-dom";
import ExpCard from "../components/ExpCard";

function ExpPage() {
    const { getExps, exps } = useExp();

    useEffect(() => {
        getExps();
    }, [])

    if (exps.length == 0) return (
        <div>
            <h1>No Experiences</h1>
            <Link to='/add-exp'>Agregar</Link>
        </div>
    )

    return (
        <div>
            {
                exps.map(exp => (                    
                    <ExpCard exp={exp} key={exp._id}/>
                ))
            }
            <Link to='/add-exp'>Agregar</Link>
        </div>
    )
}   

export default ExpPage;