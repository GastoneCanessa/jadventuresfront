import { useEffect, useState } from "react";
import NewQuestForm from "../quest/NewQuestForm";
import SingleQuest from "../quest/SIngleQuest";
import { useAtom } from "jotai";
import { client } from "../../App";
import axios from "axios";

export default function MyQuestPage() {
    const [guild, setGuild] = useAtom(client);
    
    const [Quests, setQuests] = useState([]);

    useEffect(
        () => 
        {
            axios.get("/quests/byguild/" + guild.id).then(
                (response) => 
                { 
                    setQuests(response.data); 
                }
            )
        },
        []
    );
  

    return (
        <div className="row">
            <div className="col-3 border border-black">
                <NewQuestForm />
            </div>
            <div className="col-9 px-4">
                <div className="row">
                    {Quests && Quests.map((q) => <SingleQuest q={q} key={q.id} index={q.id} />)}
                </div>
            </div>
        </div>
    );
}