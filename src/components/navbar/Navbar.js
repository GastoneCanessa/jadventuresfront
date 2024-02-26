import { Link } from "react-router-dom";
import { useAtom } from 'jotai';
import { client } from "../../App";
import { party } from "../../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Navbar() {

    const [data, setData] = useAtom(client);
    const [part, setPart] = useAtom(party);
    const navigate = useNavigate();
    const isDataNotEmpty = Object.keys(data).length > 0;
    const isPartaNotEmpty = Object.keys(part).length > 0;
    const [image, setImage] = useState("");



    function logOut() {
        setData({});
        localStorage.setItem('clientState', JSON.stringify({}));
        navigate("/");
         // Aggiorna il localStorage direttamente
    }

    function logOutParty() {
        setPart({});
         // Aggiorna il localStorage direttamente
        localStorage.setItem('partyState', JSON.stringify({}));
        navigate("/");

    }


    return (

        <>
            <nav className="sticky-top text-white bg-black mb-4 navbar navbar-expand-lg ">
                <div className="container">

                    <Link className="text-primary navbar-brand" to="homepage"></Link>
                    <ul className="text-white navbar-nav">


                        {!isPartaNotEmpty &&
                            (
                                <>
                                    <li className="nav-item">
                                        <Link className="text-white  nav-link active" to="/">All Quests</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="text-white  nav-link active" to="/loginparty">Login Party</Link>
                                    </li>
                                </>
                            )
                        }
                        {!isDataNotEmpty &&
                            (
                                <>
                                    <li className="nav-item">
                                        <Link className="text-white  nav-link active" to="/loginguild">Login Guild</Link>
                                    </li>
                                </>
                            )
                        }

                        {isPartaNotEmpty && (
                            <>
                                <li className="nav-item">
                                    <Link className="text-white nav-link active" to={"/"} >Available Quests</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="text-white nav-link active border me-1" to="/">{part.name}</Link>
                                </li>
                                <li className="nav-item">
                                    {/* <Link className="text-white nav-link active" to="/" onClick={logOut}>Seal image</Link> */}
                                    <Link to="" className="navbar-brand text-white" onClick={logOutParty}>
                                        Log Out
                                    </Link>
                                </li>
                            </>
                        )
                        }
                        {isDataNotEmpty && (
                            <>
                                <li className="nav-item">
                                    <Link className="text-white nav-link active" to={"/myquests/byguild/" + data.id} >My Quests</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="text-white nav-link active border me-1" to="/">{data.name}</Link>
                                </li>
                                <li className="nav-item">
                                    {/* <Link className="text-white nav-link active" to="/" onClick={logOut}>Seal image</Link> */}
                                    <Link to="" className="navbar-brand">
                                        <img
                                            style={{ width: "50px", height: "40px" }}
                                            src={data.seal_img_url}
                                            alt="Logo"
                                            onClick={logOut}
                                        />
                                    </Link>
                                </li>
                            </>
                        )
                        }
                    </ul>
                </div>
            </nav>
        </>
    );
}