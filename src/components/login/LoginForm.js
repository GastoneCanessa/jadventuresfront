import axios from "axios";
import { useNavigate } from "react-router-dom";
import { client } from "../../App";
import { useAtom } from 'jotai';
import { useEffect, useState } from "react";

export default function LoginForm()
{
    const navigate = useNavigate();
    const [data, setData] = useAtom(client);
    const [login,setLogin] = useState(
            {
                name:"",
                authentication_seal:""
            }
        );

    function synchronize(e)
    {
        let clone = {...login};
        clone[e.target.name] = e.target.value;
        setLogin(clone);
        
    }

    function sendForm()
    {
        axios.post("/guilds/login",login).then(
            (response)=>
            {
                setData(response.data);
                navigate("/");
            }
        )//questo manda una post avente come body pers JSONIZZATO
    }


    return(
        <div className="container ">
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Create Date</label>
                    <input name="name" type="date" className="form-control" id="date" aria-describedby="emailHelp" value={login.name} onChange={synchronize}/>
                </div>

                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Rank</label>
                    <input name="authentication_seal" type="password" className="form-control" id="exampleInputPassword1" aria-describedby="emailHelp" value={login.authentication_seal} onChange={synchronize}/>
                </div>

                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
}