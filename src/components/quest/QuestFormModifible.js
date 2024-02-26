export default function QuestDetailModifible() {
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{type}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">{description}</p>
                    <p className="card-text">{rank}</p>
                    <p className="card-text">{date}</p>
                    <p className="card-text">{reward}</p>

                    <a href="#" className="btn btn-primary">Modify</a>

                    <a href="#" className="btn btn-primary">Delete</a>
                </div>
            </div>
        </>
    );
}