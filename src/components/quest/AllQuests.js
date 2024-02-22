import SingleQuest from "./SIngleQuest";


export default function AllQuests()
{
    return(
        <div className="row">
            <div className="col-6 border border-black">
                search on click
            </div>
            <div className="col-6 border border-black">
                <div className="row">
                    <SingleQuest/>

                </div>
            </div>
        </div>
    )
}