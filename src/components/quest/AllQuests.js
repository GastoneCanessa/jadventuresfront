import { useEffect, useRef, useState } from "react";
import SingleQuest from "./SIngleQuest";
import axios from "axios";


export default function AllQuests() {
    const [quests, setQuests] = useState([]);
    const refminRank = useRef(null);
    const refmaxRank = useRef(null);
    const refType = useRef(null);
    const refminReward = useRef(null);
    const refStatus = useRef(null);
    const refArea = useRef(null);
    const [flicker, setFlicker] = useState(false);

    useEffect(() => {
        axios.get(`/quests`).then(
            response => {
                setQuests(response.data);
            }
        )
    },
        []
    );




    function notifyMyFather(q) {
        let clone = [...quests];
        clone.push(q);
        setQuests(clone);
    }

    function isShowable(q, minR, maxR, typ, stat, mRew, are) {
        if (typ && !q.type.toLowerCase().includes(typ.toLowerCase()))
            return false;

        if (stat && !q.status.toLowerCase().includes(stat.toLowerCase()))
            return false;

        if (q.reward < mRew)
            return false;

        if (are && !q.area.toLowerCase().includes(are.toLowerCase()))
            return false;

        if (minR && minR.toUpperCase() !== "A" && minR.toUpperCase() !== "S" && minR.toUpperCase() !== "B" && minR.toUpperCase() !== "C" && minR.toUpperCase() !== "D")
            return false;

        if (maxR && maxR.toUpperCase() !== "A" && maxR.toUpperCase() !== "S" && maxR.toUpperCase() !== "B" && maxR.toUpperCase() !== "C" && maxR.toUpperCase() !== "D")
            return false;


        return true;
    }


    return (
        <div className="row">
            <div className="col-4  ">
                <div className="sticky-top bg-dark m-3 " style={{ height: "30vh", top: "100px" ,backgroundColor: "black"}}>
                    <div className="input-group p-2 ">
                        <label htmlFor="type" className="fw-bold form-label me-2" style={{ color: "white" }}>Insert type:</label> <br />
                        <input id="type" className="input-group" style={{ color: "white", backgroundColor: "black" }} ref={refType} type="text" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    </div>
                    <div className="input-group p-2 bg-dark " >
                        <label htmlFor="y" className="fw-bold form-label me-2" style={{ color: "white" }}>Insert min rank:</label> <br />
                        <input id="y" className="input-group" style={{ color: "white", backgroundColor: "black" }} ref={refminRank} type="text" aria-label="Recipient's username" aria-describedby="button-addon2">
                        </input>
                    </div>
                    <div className="input-group p-2 bg-dark" >
                        <label htmlFor="y" className="fw-bold form-label me-2" style={{ color: "white" }}>Insert max rank:</label> <br />
                        <input id="y" className="input-group" style={{ color: "white", backgroundColor: "black" }} ref={refmaxRank} type="text" aria-label="Recipient's username" aria-describedby="button-addon2">
                        </input>
                    </div>
                    <div>
                        <div className="input-group p-2 bg-dark" >
                            <label htmlFor="y" className="fw-bold form-label me-2" style={{ color: "white" }}>Insert max reward:</label> <br />
                            <input id="y" className="input-group" style={{ color: "white", backgroundColor: "black" }} ref={refminReward} type="number" aria-label="Recipient's username" aria-describedby="button-addon2">
                            </input>
                        </div>
                        <div className="input-group p-2 bg-dark" >
                            <label htmlFor="y" className="fw-bold form-label me-2" style={{ color: "white" }}>Insert area:</label> <br />
                            <input id="y" className="input-group" style={{ color: "white", backgroundColor: "black" }} ref={refArea} type="text" aria-label="Recipient's username" aria-describedby="button-addon2">
                            </input>
                        </div>
                        <div className="input-group p-2 bg-dark" >
                            <label htmlFor="y" className="fw-bold form-label me-2" style={{ color: "white" }}>Insert status:</label> <br />
                            <input id="y" className="input-group" style={{ color: "white", backgroundColor: "black" }} ref={refStatus} type="text" aria-label="Recipient's username" aria-describedby="button-addon2">
                            </input>
                        </div>
                        <button type="button" className="btn btn-outline-dark align-middle mt-2" onClick={() => setFlicker(!flicker)} >Filtra</button>
                    </div>
                </div>
                <div className="col-8 ">
                    <div className="row">

                        {quests.filter(q => isShowable(q, refminRank.current.value, refmaxRank.current.value, refType.current.value, refStatus.current.value, refminReward.current.value, refArea.current.value))
                            .map(q => (
                                <SingleQuest key={q.id} q={q} notifyMyFather={notifyMyFather} />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}