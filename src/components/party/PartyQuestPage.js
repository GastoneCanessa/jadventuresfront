import { useEffect, useState } from "react";
import axios from "axios";

export default function AvailableQuestPage() {
    const [quests, setQuests] = useState([]);

    useEffect(() => {
        axios.get("/quests").then((response) => {
            // Filtriamo solo le quest con status "PENDING"
            const pendingQuests = response.data.filter((quest) => quest.status === "PENDING");
            setQuests(pendingQuests);
        });
    }, []);

    function handleAccept(questId) {
        // Logica per accettare la quest con questId
        // Esempio: axios.post('/accettazione', { questId });
    }

    return (
        <div>
            <h1>Available Quests</h1>
            {quests.length === 0 ? (
                <p>No pending quests available</p>
            ) : (
                <ul>
                    {quests.map((quest) => (
                        <li key={quest.id}>
                            {quest.description} - {quest.area}
                            <button onClick={() => handleAccept(quest.id)}>Accetta</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}