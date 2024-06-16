import Logo from "../assets/logo.png";
import "./navbar.css"
import {Link} from "react-router-dom";

export default function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg bg-faded-white-gradient fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={Logo} height={"45"} width={"50"} alt={"logo"}/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-dark fw-bold" to={"/"}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark fw-bold" to={"/about"}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark fw-bold" to={"/programs"}>Programs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark fw-bold" to={"/artportunity"}>Artportunity</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-dark fw-bold"
                               target={"_blank"}
                               href="https://www.facebook.com/people/The-Canal-Arts/61556577680047/">
                                <i className="bi bi-facebook"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fw-bold"
                               target={"_blank"}
                               href="https://x.com/CanalArts">
                                <i className="bi bi-twitter-x"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fw-bold"
                               target={"_blank"}
                               href="https://www.linkedin.com/in/canal-art-09a63827a/?originalSubdomain=br">
                                <i className="bi bi-linkedin"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fw-bold"
                               target={"_blank"}
                               href="https://www.instagram.com/thecanalarts/p/CwTMgxlvTQn/?img_index=1">
                                <i className="bi bi-instagram"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark fw-bold" to={"/login"}>
                                <i className="bi h5 bi-box-arrow-in-right"></i>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search"
                                       aria-label="Search"/>
                                <button className="btn btn-danger" type="submit">Search</button>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}