import React from "react";
import "../src/styles/directory/MirelaDragulescu.css";
import { useNavigate } from "react-router-dom";
import MirelaProfile from "../src/assets/IMG_4579.jpg";


export function MirelaDragulescu(){
    const navigate=useNavigate();
    const handleBackButton=()=>{
        navigate(-1);
    };
    return(
        <div className="main-section">
            <button onClick={handleBackButton} className="back-button">Back</button>
            <div className="section">
                <img className="profile-image" src={MirelaProfile}></img>
            </div>
            
        </div>
    )
}