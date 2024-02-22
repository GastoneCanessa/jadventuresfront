export default function NewQuestForm()
{
    return(
        <div className="container ">
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Create Date</label>
                    <input type="date" className="form-control" id="date" aria-describedby="emailHelp"/>
                </div>

                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Status</label>
                    <input type="text" className="form-control" id="status" aria-describedby="emailHelp"/>
                </div>

                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Rank</label>
                    <input type="text" className="form-control" id="rank"/>
                </div>

                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Reward</label>
                    <input type="number" className="form-control" id="reward"/>
                </div>

                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Area</label>
                    <input type="text" className="form-control" id="area"/>
                </div>

                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Date complete</label>
                    <input type="date" className="form-control" id="date_complete" aria-describedby="emailHelp"/>
                </div>

                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Map Url</label>
                    <input type="date" className="form-control" id="dmap_url" aria-describedby="emailHelp"/>
                </div>

                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Description</label>
                    <input type="date" className="form-control" id="description" aria-describedby="emailHelp"/>
                </div>

                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Type</label>
                    <input type="text" className="form-control" id="type" aria-describedby="emailHelp"/>
                </div>

                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
}