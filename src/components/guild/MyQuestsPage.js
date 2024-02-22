import { useEffect, useState } from "react";
import NewQuestForm from "../quest/NewQuestForm";
import SingleQuest from "../quest/SIngleQuest";
import { useAtom } from "jotai";
import { client } from "../../App";

export default function MyQuestPage() {
    const [Guild, setGuild] = useAtom(client);
    const [Quests, setQuests] = useState([]);

    useEffect(
        () => { setQuests(Guild.posted_quests); }
    )
    console.log(Guild);

    return (
        <div className="row">
            <div className="col-6 border border-black">
                <NewQuestForm />
            </div>
            <div className="col-6 border border-black">
                <div className="row">
                    {Quests.map((q) => <SingleQuest q={q} index={q.id} />)}
                </div>
            </div>
        </div>
    );
}