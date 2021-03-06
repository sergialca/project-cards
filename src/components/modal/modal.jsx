import React, {useEffect, useState, Fragment} from "react";
import Friends from "../friends/friends";
import "./modal.scss";

function Modal(props) {
    let {closeModal, show, info, oneRecord} = props;
    const [friendRecord, setFriendRecord] = useState(oneRecord);
    let friendsKey = oneRecord.id;
    const loadPersonalData = (n) => {
        info.map( i => {
            if(i.name === n){
                console.log("loadPersonalData -> i", i);
                setFriendRecord(i);
            }
        }
        )
    }

    useEffect (() => {
        setFriendRecord(oneRecord);
    })
    
    return (
        <Fragment>
            <div className={show ? "overlay" : "hide"} onClick={closeModal}></div>
            <div className={show ? "wrapper" : "hide"}>
                <div className="modal">
                    <button onClick={closeModal}>X</button>
                    <div className="header">
                        <img className="profile-picture" src={friendRecord.thumbnail} alt="profile"></img>
                        <div className="name">
                            <span className="modal-label">Name:</span>
                            <span className="modal-value">{friendRecord.name}</span>
                        </div>
                    </div>
                    <div className="body">
                        <div className="age">
                            <span className="modal-label">Age:</span>
                            <span className="modal-value">{friendRecord.age}</span>
                        </div>
                        <div className="height space">
                            <span className="modal-label">Height:</span>
                            <span className="modal-value">{friendRecord.height}</span>
                        </div>
                        <div className="weight space">
                            <span className="modal-label">Weight:</span>
                            <span className="modal-value">{friendRecord.weight}</span>
                        </div>
                        <div className="hair space">
                            <span className="modal-label">Hair color:</span>
                            <span className="modal-value">{friendRecord.hair_color}</span>
                        </div>
                        <div className="profession">
                            <span>
                                {friendRecord.professions ? friendRecord.professions.length >= 2 ? <b>Professions: </b> : <b>Profession: </b> : <b>Profession: </b>}
                                {friendRecord.professions ? friendRecord.professions.length > 0 ? friendRecord.professions.join(', ') : 'Unknown' : 'Unknown'}
                            </span>
                        </div>
                        <div className="friend">
                            <span>
                                {friendRecord.friends ? friendRecord.friends.length === 0 ? '' : friendRecord.friends.length >= 2 ? <b>Friends: </b> : <b>Friend: </b> : ''}
                                {friendRecord.friends ? friendRecord.friends.map(f => {
                                    friendsKey++;
                                    return <Friends name={f} key={friendsKey} personalData={loadPersonalData}/>;
                                }) : ''}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Modal;