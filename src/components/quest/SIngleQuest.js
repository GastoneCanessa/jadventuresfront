import React from 'react';

export default function SingleQuest({ quest }) {
    const { type, rank, reward } = quest;

    return (
        <div className="card shadow mb-4">
            <img src="..." className="card-img-top" alt="Quest Image" />
            <div className="card-body">
                <h5 className="card-title">Type: {type}</h5>
                <p className="card-text">Rank: {rank}</p>
                <p className="card-text">Reward: {reward}</p>
                <a href="#" className="btn btn-primary">More Details</a>
            </div>
        </div>
    );
}