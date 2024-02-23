import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { client } from "../../App";
import { useAtom } from 'jotai';

export default function NewQuestForm() {
    const navigate = useNavigate();
    const [data, setData] = useAtom(client);
    const [success, setSuccess] = useState(false);
    const [quest, setQuest] = useState(
        {
            guild_id: data.id,
            date_created: "",
            date_completed: "",
            status: "",
            quest_rank: "",
            area: "",
            map_url: "",
            description: "",
            type: "",
            reward: ""
        }
    );

    function synchronize(e) {
        let clone = { ...quest };
        clone[e.target.name] = e.target.value;
        setQuest(clone);
        if (e.target.value === "SUCCESS" || e.target.value === "FAILED") {
            return setSuccess(true);
        }

    }

    function sendForm() {

        console.log(quest);
        axios.post("/quests", quest).then(
            () => {
                navigate("/myquests")
            }
        )
    }

    function cancella(e) {
        setQuest(
            {
                guild_id: data.id,
                date_created: "",
                date_completed: "",
                status: "",
                quest_rank: "",
                area: "",
                map_url: "",
                description: "",
                type: "",
                reward: ""
            }
        )
    }

    // function success() {
    //     if (quest.status === "SUCCESS" || quest.status === "FAILED") {
    //         return true;
    //     }

    //     return false;
    // }


    return (
        <div className="container p-5">
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Create Date</label>
                    <input type="date" className="form-control" id="date" name="date_created" aria-describedby="emailHelp" onChange={synchronize} />
                </div>

                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Status</label>
                    <select className="form-control" id="status" name="status" onChange={synchronize}>
                        <option value="">Select a Status</option>
                        <option value="AWAITING">AWAITING</option>
                        <option value="PENDING">PENDING</option>
                        <option value="SUCCESS">SUCCESS</option>
                        <option value="FAILED">FAILED</option>
                    </select>
                </div>
                {
                    success &&
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Date complete</label>
                        <input type="date" className="form-control" id="date_complete" aria-describedby="emailHelp" name="date_completed" onChange={synchronize} />
                    </div>
                }

                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Rank</label>
                    <select className="form-control" id="rank" name="quest_rank" onChange={synchronize}>
                        <option value="">Select a Rank</option>
                        <option value="S">S</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Area</label>
                    <input type="text" className="form-control" id="area" name="area" onChange={synchronize} />
                </div>

                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Map Url</label>
                    <input type="text" className="form-control" id="dmap_url" aria-describedby="emailHelp" name="map_url" onChange={synchronize} />
                </div>

                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" aria-describedby="emailHelp" name="description" onChange={synchronize} />
                </div>

                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Type</label>
                    <select className="form-control" id="rank" name="type" onChange={synchronize}>
                        <option value="">Select a Type</option>
                        <option value="dungeon">Dungeon</option>
                        <option value="monster hunt">Monster Hunt</option>
                        <option value="village defense">Village Defense</option>
                        <option value="errand">Errand</option>
                        <option value="patrol">Patrol</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Reward</label>
                    <input type="number" className="form-control" id="reward" name="reward" onChange={synchronize} />
                </div>

                <input className="btn mx-1" style={{ color: "white", background: "#52b788", border: 0, width: "5vw" }} type="button" value="Salva" onClick={sendForm} />
                <input className="btn mx-1" style={{ color: "white", background: "#52b788", border: 0, width: "5vw" }} type="button" value="Cancella" onClick={cancella} />
            </form>
        </div>
    );
}