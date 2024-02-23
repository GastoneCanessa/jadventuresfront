import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function QuestDetail(props) {
    // const { type, date_created, status, description, rank, date_completed, reward } = quest;
    let {id}=useParams();
    const [quest,setQuest] = useState({});

    useEffect(()=>{
        axios.get("/quests/"+id).then(
            (response)=>
            {
                setQuest(response.data);
                
            }
        )
    })
    

    return (
        <div className="card shadow mb-4">
            <div className="card-body">
                <h5 className="card-title">Type: {quest.type}</h5>
                <p className="card-text">Date Created: {quest.date_created}</p>
                <p className="card-text">Status: {quest.status}</p>
                <p className="card-text">Description: {quest.description}</p>
                <p className="card-text">Rank: {quest.quest_rank}</p>
                <p className="card-text">Date Completed: {quest.date_completed}</p>
                <p className="card-text">Reward: {quest.reward}</p>
            </div>
        </div>
    );
}