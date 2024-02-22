
export default function LoginForm()
{
    return(
        <div className="container ">
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Guild Name</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Autentication Seal</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
}