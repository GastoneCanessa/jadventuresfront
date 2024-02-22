import NewQuestForm from "../quest/NewQuestForm";
import SingleQuest from "../quest/SIngleQuest";

export default function MyQuestPage()
{
    return(
        <div className="row">
            <div className="col-6 border border-black">
                <NewQuestForm/>
            </div>
            <div className="col-6 border border-black">
                <div className="row">
                    <SingleQuest/>
                </div>
            </div>
        </div>
    );
}