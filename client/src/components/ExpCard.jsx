import { useExp } from "../context/ExpContext";
import { Link } from "react-router-dom";

function ExpCard({exp}) {

    const {deleteExp} = useExp();

    return (
        <div>
            <h1>{exp.names}</h1>
            <p>{exp.position}</p>
            <p>{exp.time}</p>
            <p>{exp.description}</p>
            <button style={{ 'color': '#000000', 'border': '0', 'background': 'transparent', 'cursor': 'pointer', 'transition': 'color 0.3s ease' }} onClick={() => {
                deleteExp(exp._id);
            }}
            onMouseEnter={(e) => {
                e.target.style.color = '#fc5f57';
            }}
            onMouseLeave={(e) => {
                e.target.style.color = '#000000';
            }
            }>Delete</button>
            <button  style={{ 'border': '0', 'background': 'transparent', 'cursor': 'pointer' }}>
                <Link style={{'color': '#000000', 'transition': 'color 0.3s ease' }} to={`/exps/${exp._id}`}
                onMouseEnter={(e) => {
                    e.target.style.color = '#586875';
                }}
                onMouseLeave={(e) => {
                    e.target.style.color = '#000000';
                }
                }>Edit</Link>
            </button>
        </div>
    )

}

export default ExpCard;