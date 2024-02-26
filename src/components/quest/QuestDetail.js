import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useAtom } from 'jotai';
import { client } from "../../App";
import { party } from "../../App";

export default function QuestDetail() {
    let { id } = useParams();
    const [quest, setQuest] = useState({});
    const navigate = useNavigate();
    const [updating, setUpdating] = useState(false);
    const [success, setSuccess] = useState(false);
    const [data, setData] = useAtom(client);
    const [partyData, setPartyData] = useAtom(party);
    const isDataNotEmpty = Object.keys(data).length > 0;
    const isPartyDataNotEmpty = Object.keys(partyData).length > 0;
    const [errorMessage, setErrorMessage] = useState("");
    const [showErrorPopup, setShowErrorPopup] = useState(false);



    useEffect(() => {
        axios.get("/quests/" + id)
            .then((response) => {
                setQuest(response.data);
            })
            .catch((error) => {
                console.error("Error fetching quest:", error);
            });
    }, [id]);

    function acceptQuest() {
        if (!isPartyDataNotEmpty) {
            setErrorMessage("Party data is empty. Cannot accept quest.");
            return;
        }

        const requestBody = {
            id: quest.id,
            party_id: partyData.id,
            guild_id: quest.guild_id
        };

        console.log(quest);
        console.log(requestBody);

        axios.put("/quests/byparty", requestBody)
            .then((response) => {
                console.log("Quest accepted successfully:", response.data);

                setQuest(response.data);
                navigate("/")
            })
            .catch((error) => {
                if (error.response) {
                    if (error.response.status == 400) {
                        setErrorMessage("Il rango del party è troppo basso per questa quest.");
                    }
                    setShowErrorPopup(true);
                }
                
            });
    }

    function ErrorPopup({ message, onClose }) {
        return (
            <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Error</h5>
                        </div>
                        <div className="modal-body">
                            {message}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


    function saveQuest() {
        let body = quest
        body.guild_id = quest.guild.id
        axios.put("/quests/byguild", quest)
            .then(() => setUpdating(false));
    }

    function synchronize(e) {
        let clone = { ...quest };
        clone[e.target.name] = e.target.value;
        setQuest(clone);
        if (e.target.value === "SUCCESS" || e.target.value === "FAILED") {
            return setSuccess(true);
        }

    }

    function handleDelete() {
        axios.delete("/quests/" + id)
            .then((response) => {
                console.log("Quest deleted successfully");
                navigate("/")
            })
            .catch((error) => {
                console.error("Error deleting quest:", error);
            });
    }

    let readOnlyCard = (
        <div className="card sticky-top mx-3 mt-4" style={{ top: "100px" }}>
            <div className="container p-5">
                <div className="mb-3">
                    <p className="form-label">Create Date: {quest.date_created}</p>
                </div>

                <div className="mb-3">
                    <p className="form-label">Status: {quest.status}</p>
                </div>

                <div className="mb-3">
                    <p className="form-label">Date Complete: {quest.date_completed}</p>
                </div>

                <div className="mb-3">
                    <p className="form-label">Rank: {quest.quest_rank}</p>
                </div>

                <div className="mb-3">
                    <p className="form-label">Area: {quest.area}</p>
                </div>

                <div className="mb-3">
                    <p className="form-label">Map Url: {quest.map_url}</p>
                </div>

                <div className="mb-3">
                    <p className="form-label">Description: {quest.description}</p>
                </div>

                <div className="mb-3">
                    <p className="form-label">Type: {quest.type}</p>
                </div>

                <div className="mb-3">
                    <p className="form-label">Reward: {quest.reward}</p>
                </div>
                {isDataNotEmpty && (
                    <>
                        <button className="btn btn-primary" onClick={() => setUpdating(true)}>Modify</button>
                        <button className="btn btn-danger mx-2" onClick={handleDelete}>Delete</button>
                    </>
                )}

                {isPartyDataNotEmpty && (
                    <>
                        <button className="btn btn-primary" onClick={() => acceptQuest()}>Accept</button>
                    </>
                )}
                {showErrorPopup && <ErrorPopup message={errorMessage} onClose={() => setShowErrorPopup(false)} />}
            </div>
        </div>
    );



    let updatableCard = (
        <div className="card sticky-top mx-3 mt-4" style={{ top: "100px" }}>
            <div className="container p-5">
                <form>
                    <div className="mb-3">
                        <label htmlFor="date" className="form-label">Create Date</label>
                        <input type="date" className="form-control" id="date" name="date_created" aria-describedby="emailHelp" onChange={synchronize} value={quest.date_created} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="status" className="form-label">Status</label>
                        <select className="form-control" id="status" name="status" onChange={synchronize} value={quest.status}>
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
                            <label htmlFor="date_completed" className="form-label">Date Complete</label>
                            <input type="date" className="form-control" id="date_completed" aria-describedby="emailHelp" name="date_completed" onChange={synchronize} value={quest.date_completed} />
                        </div>
                    }

                    <div className="mb-3">
                        <label htmlFor="quest_rank" className="form-label">Rank</label>
                        <select className="form-control" id="quest_rank" name="quest_rank" onChange={synchronize} value={quest.quest_rank}>
                            <option value="">Select a Rank</option>
                            <option value="S">S</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="area" className="form-label">Area</label>
                        <input type="text" className="form-control" id="area" name="area" onChange={synchronize} value={quest.area} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="map_url" className="form-label">Map Url</label>
                        <input type="text" className="form-control" id="map_url" name="map_url" onChange={synchronize} value={quest.map_url} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" name="description" onChange={synchronize} value={quest.description} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="type" className="form-label">Type</label>
                        <select className="form-control" id="type" name="type" onChange={synchronize} value={quest.type}>
                            <option value="">Select a Type</option>
                            <option value="dungeon">Dungeon</option>
                            <option value="monster hunt">Monster Hunt</option>
                            <option value="village defense">Village Defense</option>
                            <option value="errand">Errand</option>
                            <option value="patrol">Patrol</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="reward" className="form-label">Reward</label>
                        <input type="number" className="form-control" id="reward" name="reward" onChange={synchronize} value={quest.reward} />
                    </div>

                    <input className="btn mx-1" style={{ color: "white", background: "#52b788", border: 0, width: "5vw" }} type="button" value="Save" onClick={saveQuest} />
                    <input className="btn mx-1" style={{ color: "white", background: "#52b788", border: 0, width: "5vw" }} type="button" value="Cancel" onClick={() => setUpdating(false)} />
                </form>
            </div>
        </div>
    );


    return (
        <div className="row">
            <div className="col-4">
                {!updating && readOnlyCard}
                {updating && updatableCard}
            </div>
        </div>
    );
}
