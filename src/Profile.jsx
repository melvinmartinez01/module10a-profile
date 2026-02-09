import {useState} from "react";

function Profile({name, occupation, funFact, bio}) {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div style={{
            border: "1px solid #ccc", 
            padding: "16px",
            marginBottom: "20px", 
            maxWidth: "500px"
            }}
        >
            <h2>{name}</h2>

            <p>
                <strong>Occupation:</strong> {occupation}
            </p>

            <p>
                <strong>Fun Fact:</strong> {funFact}
            </p>

            <button onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? "Hide Bio" : "Show Bio"}
            </button>

            {showDetails && (
             <p style={{marginTop: "10px"}}>
                {bio}
             </p>
            )}
        </div>
    );
}

export default Profile;