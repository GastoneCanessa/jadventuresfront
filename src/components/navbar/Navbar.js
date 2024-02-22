import { Link } from "react-router-dom";
export default function Navbar()
{
    return(

        <>
            <nav className="sticky-top text-white bg-black mb-4 navbar navbar-expand-lg ">
            <div className="container">
                
                <Link className="text-primary navbar-brand" to="homepage"></Link> 
                <ul className="text-white navbar-nav">
                    <li className="nav-item">
                        <Link className="text-white  nav-link active" to="/">All Quests</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="text-white nav-link active" to="/myquests">My Quests</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="text-white  nav-link active" to="/loginform">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="text-white  nav-link active" to="/">Guild image</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="text-white  nav-link active" to="/">Seal image</Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
            );
}