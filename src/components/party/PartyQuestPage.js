import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default function AvailableQuestPage() {
    const [quests, setQuests] = useState([]);

    useEffect(() => {
        axios.get("/quests").then((response) => {
            const pendingQuests = response.data.filter((quest) => quest.status === "AWAITING");
            setQuests(pendingQuests);
        });
    }, []);

    return (
        <div className="container">
            <h1 className="my-4">Available Quests</h1>
            {quests.length === 0 ? (
                <p>No pending quests available</p>
            ) : (
                <ul className="list-group">
                    {quests.map((quest) => (
                        <li key={quest.id} className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                                {quest.description} - {quest.area} - Rank : {quest.quest_rank}
                            </div>
                            <Link className="card-link" to={"/quests/" + quest.id}>Details</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}