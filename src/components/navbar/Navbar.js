import { Link } from "react-router-dom";
import { useAtom } from 'jotai';
import { client } from "../../App";
import { useNavigate } from "react-router-dom";

export default function Navbar() {

    const [data, setData] = useAtom(client);
    const navigate = useNavigate();
    const isDataNotEmpty = Object.keys(data).length > 0;

    function logOut() {
        setData({});
        navigate("/");

    }

    return (

        <>
            <nav className="sticky-top text-white bg-black mb-4 navbar navbar-expand-lg ">
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
                                    <Link className="text-white nav-link active" to="/myquests">My Quests</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="text-white nav-link active" to="/">{data.name}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="text-white nav-link active" to="/" onClick={logOut}>Seal image</Link>
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