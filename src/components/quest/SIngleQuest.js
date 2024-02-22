import React from 'react';
import { Link } from 'react-router-dom';

export default function SingleQuest(props) {

    return (
        <div className='row'>
            <div className="card shadow mb-4">
                <img src={props.q.map_url} className="card-img-top" alt="Quest Image" />
                <div className="card-body">
                    <h5 className="card-title">Type: {props.q.type}</h5>
                    <p className="card-text">Rank: {props.q.rank}</p>
                    <p className="card-text">Reward: {props.q.reward}</p>
                    <Link className="card-link" to={"/quests/"+ props.q.id}>More Details</Link>
                </div>
            </div>
        </div>
    );
}