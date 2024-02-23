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
    const rankToNumber = {"S": 5, "A":4, "B":3,"C":2,"D":1};
    // const [questToShow,setQuestToShow] = useState({
    //     type:"",
    //     min_quest_rank:"",
    //     max_quest_rank:"",
    //     max_reward:"",
    //     area:"",
    //     status:""
    // });

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

    function isShowable(q, minR, maxR, typ, stat, mRew, are) 
    {
        if (!minR && !maxR && !typ && !stat && !mRew && !are) {
            // Se tutti i valori sono vuoti o nulli, mostra tutte le quest
            return true;
        }
        if (typ && !q.type.toUpperCase().includes(typ.toUpperCase()))
            return false;

        if (stat && !q.status.toLowerCase().includes(stat.toLowerCase()))
            return false;

        if (q.reward < mRew)
            return false;

        if (are && !q.area.toLowerCase().includes(are.toLowerCase()))
            return false;

        if (minR && minR.toUpperCase() !== "A" && minR.toUpperCase() !== "S" && minR.toUpperCase() !== "B" && minR.toUpperCase() !== "C" && minR.toUpperCase() !== "D")
            return false;

        if(minR && rankToNumber[minR.toUpperCase()]>rankToNumber[q.quest_rank])
            return false;

        if (maxR && maxR.toUpperCase() !== "A" && maxR.toUpperCase() !== "S" && maxR.toUpperCase() !== "B" && maxR.toUpperCase() !== "C" && maxR.toUpperCase() !== "D")
            return false;

        if(maxR && rankToNumber[maxR.toUpperCase()]<rankToNumber[q.quest_rank])
            return false;

        return true;
    }

    const handleFilter = () => {

        setFlicker(!flicker);
        
    };
    
    useEffect(()=>{
        refminRank.current.value = "";
        refmaxRank.current.value = "";
        refType.current.value = "";
        refminReward.current.value = "";
        refStatus.current.value = "";
        refArea.current.value = "";
    },
    [flicker]
    )
    
    // function synchronize(e)
    // {
    //     let clone={...questToShow};
    //     clone[e.target.name] = e.target.value;
    //     setQuestToShow(clone);
    // }

    // const evento=document.getElementById("filtrato");
    // evento.addEventListener("click",function(){
    //     refminRank.current.value = "";
    //     refmaxRank.current.value = "";
    //     refType.current.value = "";
    //     refminReward.current.value = "";
    //     refStatus.current.value = "";
    //     refArea.current.value = "";
    // })
    return (
        <div className="container text-center ">
            <div className="row ">
                <div className="sticky-top col col-lg-4  " >
                    <div className="p-2 bg-dark">
                        <label htmlFor="type" className="fw-bold form-label me-2" style={{ color: "white" }}>Insert type:</label> <br />
                        <input id="type" name="type" className="form-control" style={{ color: "white", backgroundColor: "black", width: "100%" }} ref={refType}  type="text" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    </div>
                    <div className="p-2 bg-dark" >
                        <label htmlFor="y" className="fw-bold form-label me-2" style={{ color: "white" }}>Insert min rank:</label> <br />
                        <input id="y" name="min_quest_rank" className="form-control" style={{ color: "white", backgroundColor: "black", width: "100%" }} ref={refminRank}  type="text" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    </div>
                    <div className="p-2 bg-dark" >
                        <label htmlFor="y" className="fw-bold form-label me-2" style={{ color: "white" }}>Insert max rank:</label> <br />
                        <input id="y" name="max_quest_rank" className="form-control" style={{ color: "white", backgroundColor: "black", width: "100%" }} ref={refmaxRank}  type="text" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    </div>

                    <div className="p-2 bg-dark" >
                        <label htmlFor="y" className="fw-bold form-label me-2" style={{ color: "white" }}>Insert max reward:</label> <br />
                        <input id="y" name="max_reward" className="form-control" style={{ color: "white", backgroundColor: "black", width: "100%" }} ref={refminReward}  type="number" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    </div>
                    <div className="p-2 bg-dark" >
                        <label htmlFor="y" className="fw-bold form-label me-2" style={{ color: "white" }}>Insert area:</label> <br />
                        <input id="y" name="area" className="form-control" style={{ color: "white", backgroundColor: "black", width: "100%" }} ref={refArea} type="text"  aria-label="Recipient's username" aria-describedby="button-addon2" />
                    </div>
                    <div className="p-2 bg-dark" >
                        <label htmlFor="y" className="fw-bold form-label me-2" style={{ color: "white" }}>Insert status:</label> <br />
                        <input id="y" name="status" className="form-control" style={{ color: "white", backgroundColor: "black", width: "100%" }} ref={refStatus}  type="text" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    </div>
                    <button id="filtrato" type="button" className="btn btn-outline-dark align-middle mt-2" onClick={handleFilter}    >Filtra</button>
                </div>

                <div className="col col-xlg-8 ">
                    <div className="row">
                        {quests.filter(q => isShowable(q, refminRank.current.value, refmaxRank.current.value, refType.current.value, refStatus.current.value, refminReward.current.value, refArea.current.value))
                            .map(q => (
                                <SingleQuest key={q.id} q={q} notifyMyFather={notifyMyFather} />
                            ))}

                        {/* {questToShow.map(q => (
                                <SingleQuest key={q.id} q={q} notifyMyFather={notifyMyFather} />
                            ))} */}
                    </div>
                </div>
            </div>
        </div>
    );

}