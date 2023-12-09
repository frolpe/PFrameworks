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
        <div className="alineStudies">
            <div className="contStudies">
                <h1>No Experiences</h1>
            </div>
            <div className="btnAgregar">
                <Link style={{ 'text-decoration': 'none' }}  to='/add-exp'>Agregar</Link>
            </div>
        </div>
    )

    return (
        <div className="alineStudies">
            <div className="contStudies exp">
                {
                    exps.map(exp => (
                        <ExpCard exp={exp} key={exp._id} />
                    ))
                }
            </div>
            <div className="btnAgregar">
                <Link style={{ 'text-decoration': 'none' }} to='/add-exp'>Agregar</Link>
            </div>
        </div>
    )
}

export default ExpPage;