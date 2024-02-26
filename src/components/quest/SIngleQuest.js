import React from 'react';
import { Link } from 'react-router-dom';

export default function SingleQuest(props) {

    return (
        <div className='col col-md-3'>
            <div className='container'>
                <div className="card shadow mb-4" style={{ backgroundColor: "#FFFFEC" }}>
                    <img src={props.q.map_url} className="card-img-top" alt="Quest Image" style={{ width: "100%", height: "100%" }} />
                    <div className="card-body">
                        <h5 className="card-title">Type: {props.q.type}</h5>
                        <p className="card-text">Rank: {props.q.quest_rank}</p>
                        <p className="card-text">Reward: {props.q.reward} gold</p>
                        <Link className="card-link" to={"/quests/" + props.q.id}>DETAILS</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}