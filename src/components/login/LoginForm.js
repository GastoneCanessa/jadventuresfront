import axios from "axios";
import { useNavigate } from "react-router-dom";
import { client } from "../../App";
import { useAtom } from 'jotai';
import { useState } from "react";

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
                navigate("/myquests");
            }
        )//questo manda una post avente come body pers JSONIZZATO
    }


    return(
        <div className="container ">
            <form>
                <div className="mb-3">
                    <label className="form-label">Guild Name</label>
                    <input name="name" type="text" className="form-control" id="date" aria-describedby="emailHelp" value={login.name} onChange={synchronize}/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Authentication Seal</label>
                    <input name="authentication_seal" type="password" className="form-control" id="exampleInputPassword1" aria-describedby="emailHelp" value={login.authentication_seal} onChange={synchronize}/>
                </div>

                <input className="btn btn-primary" type="button" onClick={sendForm} value="Login"/>
            </form>
        </div>
    );
}