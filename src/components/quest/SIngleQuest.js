//pochi campi

export default function SingleQuest()
{
    return(
        <>
            <div class="card" style={{width: "18rem"}}>
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{type}</h5>
                    <p class="card-text">{rank}</p>
                    <p class="card-text">{reward}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    );
}