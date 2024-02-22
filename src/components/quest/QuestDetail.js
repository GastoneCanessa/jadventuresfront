import React from 'react';

export default function QuestDetail({ quest }) {
    const { type, date_created, status, description, rank, date_completed, reward } = quest;

    return (
        <div className="card shadow mb-4">
            <div className="card-body">
                <h5 className="card-title">Type: {type}</h5>
                <p className="card-text">Date Created: {date_created}</p>
                <p className="card-text">Status: {status}</p>
                <p className="card-text">Description: {description}</p>
                <p className="card-text">Rank: {rank}</p>
                <p className="card-text">Date Completed: {date_completed}</p>
                <p className="card-text">Reward: {reward}</p>
            </div>
        </div>
    );
}