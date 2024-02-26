import axios from "axios";
import { useNavigate } from "react-router-dom";
import { client } from "../../App";
import { useAtom } from 'jotai';
import { useState } from "react";

export default function LoginForm() {
    const navigate = useNavigate();
    const [data, setData] = useAtom(client);
    const [errorMessage, setErrorMessage] = useState("");
    const [showErrorPopup, setShowErrorPopup] = useState(false);
    const [login, setLogin] = useState(
        {
            name: "",
            authentication_seal: ""
        }
    );


    function synchronize(e) {
        let clone = { ...login };
        clone[e.target.name] = e.target.value;
        setLogin(clone);

    }

    function sendForm() {
        axios.post("/guilds/login", login)
            .then((response) => {
                setData(response.data);
                const guildId = response.data.id;
                navigate("/myquests/byguild/" + guildId);

            })
            .catch((error) => {
                if (error.response) {
                    if (error.response.status == 401) {
                        setErrorMessage("Invalid credentials. Please check your guild name and authentication seal.");
                    } else if (error.response.status == 404) {
                        setErrorMessage("Guild not found. Please check the guild name.");
                    } else {
                        setErrorMessage("Invalid credentials. Please check your guild name and authentication seal.");
                    }
                    setShowErrorPopup(true);
                } else {
                    console.error("An error occurred while logging in:", error);
                }
            });
    }

    function ErrorPopup({ message, onClose }) {
        return (
            <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Error</h5>
                        </div>
                        <div className="modal-body">
                            {message}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container ">
            <form>
                <div className="mb-3">
                    <label className="form-label">Guild Name</label>
                    <input name="name" type="text" className="form-control" id="date" aria-describedby="emailHelp" value={login.name} onChange={synchronize} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Authentication Seal</label>
                    <input name="authentication_seal" type="password" className="form-control" id="exampleInputPassword1" aria-describedby="emailHelp" value={login.authentication_seal} onChange={synchronize} />
                </div>

                {showErrorPopup && <ErrorPopup message={errorMessage} onClose={() => setShowErrorPopup(false)} />}

                <input className="btn btn-primary" type="button" onClick={sendForm} value="Login" />
            </form>
        </div>
    );
}
