export default function QuestDetailPage() 
{
return (
    <div>
        <Navbar />
        <div className="container mt-4">
            <div className="card">
                <div className="card-body">
                    <h1 className="card-title">Quest Detail</h1>
                    <QuestDetail/>
                </div>
            </div>
        </div>
    </div>
);
}