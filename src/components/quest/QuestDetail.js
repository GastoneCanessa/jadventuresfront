//tutti i campi
export default function QuestDetail()
{
    return(
        <>
            <div className="card" style={{width: "18rem"}}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{type}</h5>
                    <p className="card-text">{date_created}</p>
                    <p className="card-text">{status}</p>
                    <p className="card-text">{description}</p>
                    <p className="card-text">{rank}</p>
                    <p className="card-text">{date}</p>
                    <p className="card-text">{reward}</p>
                </div>
            </div>
        </>
    );
}