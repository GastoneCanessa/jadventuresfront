import { Link } from "react-router-dom";
import { useAtom } from 'jotai';
import { client } from "../../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Navbar() {

    const [data, setData] = useAtom(client);
    const navigate = useNavigate();
    const isDataNotEmpty = Object.keys(data).length > 0;
    const [image, setImage] = useState("");



    function logOut() {
        setData({});
        navigate("/");

    }


    return (

        <>
            <nav className="sticky-top text-white mb-4 navbar navbar-expand-lg" style={{ backgroundColor: "#597E52" }} >
                <div className="container">

                    <Link className="text-primary navbar-brand" to="homepage"></Link>
                    <ul className="text-white navbar-nav">
                        <li className="nav-item">
                            <Link className="text-white  nav-link active" to="/">All Quests</Link>
                        </li>

                        {!isDataNotEmpty &&
                            (
                                <li className="nav-item">
                                    <Link className="text-white  nav-link active" to="/loginform">Login</Link>
                                </li>
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