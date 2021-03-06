import React from 'react';
import "./card.scss";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Card(props) {
    const {info} = props;
    return (
        <div className="card">
            <div className="info-wrap">
                <div className="name">
                    <span className="card-label">Name:</span>
                    <span className="card-value">{info.name}</span>
                </div>
                <div className="age">
                    <span className="card-label">Age:</span>
                    <span className="card-value">{info.age}</span>
                </div>
                <div className="height">
                    <span className="card-label">Height:</span>
                    <span className="card-value">{info.height}</span>
                </div>
                <div className="profession">
                    <span>
                        {info.professions ? info.professions.length >= 2 ? <b>Professions: </b> : <b>Profession: </b> : <b>Profession: </b>}
                        {info.professions ? info.professions.length > 0 ? info.professions.join(', ') : 'Unknown' : 'Unknown'}
                    </span>
                </div>
            </div>
            <div className="detail-wrap">
                <FontAwesomeIcon onClick={() => {
                        props.addOneRecord(info)
                        props.onClick();
                }} className="plus-icon" icon={faPlusCircle}/>
            </div>
        </div>
        
    );
}

export default Card;