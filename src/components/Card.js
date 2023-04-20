import React from 'react';
import {navigate} from 'gatsby'
import {AiOutlineGithub, AiOutlineLink} from "react-icons/ai";

const Card = ({title,description,image,liveUrl,sourceCodeUrl}) => {
    const handleLinkOpen=(link)=>{
        window.open(link,'_blank')
    }
    const goto=(link)=>{
        navigate(link);
    }
    return (
        <div className="card">
            <div className="card-img" style={{backgroundImage:`url(${image}`}}></div>
            <div className="card-info">
                <p className="text-title">{title}</p>
                <p className="text-body font-light">{description}</p>
            </div>
            <div className="card-footer">
                <button onClick={()=>goto(liveUrl)} className="card-button">
                    <AiOutlineLink/>
                </button>
                <button onClick={()=>handleLinkOpen(sourceCodeUrl)}  className="card-button">
                    <AiOutlineGithub/>
                </button>
            </div>
        </div>
    );
};

export default Card;