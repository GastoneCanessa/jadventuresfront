
export default function LoginForm()
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
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>

                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
}