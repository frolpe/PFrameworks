import { useStudy } from "../context/StudyContext";
import { Link } from "react-router-dom";

function StudyCard({ study }) {

    const { deleteStudy } = useStudy();

    return (
        <div>
            <div style={{ 'display': 'flex', 'justify-content': 'space-between'}}>
                <div style={{'padding-left': '2%'}}>
                    <p>{study.names}</p>
                </div>
                <div style={{'padding': '18px 18px 0 0', 'display': 'inline-block',}}>
                    <button style={{ 'color': '#000000', 'border': '0', 'background': 'transparent', 'cursor': 'pointer', 'transition': 'color 0.3s ease' }}
                        onClick={() => {
                            deleteStudy(study._id);
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.color = '#fc5f57';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.color = '#000000';
                        }
                        }>Delete</button>
                    <button style={{ 'border': '0', 'background': 'transparent', 'cursor': 'pointer' }}>
                        <Link style={{'color': '#000000', 'transition': 'color 0.3s ease' }} to={`/studies/${study._id}`}
                            onMouseEnter={(e) => {
                                e.target.style.color = '#586875';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = '#000000';
                            }
                            }>Edit</Link>
                    </button>
                </div>
            </div>
            <hr style={{ flex: '1', margin: '0 10px', borderColor: '#000000' }} />
        </div>
    )

}

export default StudyCard;