import "./header.css"
import {Link} from "react-router-dom";
// import Image from "../assets/home-image.png";

export default function Header() {

    return (
        <>
            <header className={"header"}>
                <div className={"container p-4"}>
                    <div className={"row justify-content-center align-items-center"}>
                        <div className={"col-lg-10 text-white text-center"}>
                            <h1 className={"mb-2 display-1"}>The <span
                                className={"fw-bold text-white-50"}>Canal</span> Arts</h1>
                            <p className={"lead"}>
                                The power of art is that it talks to you. It is a language.
                            </p>
                            <Link role={"button"} to={"/programs"} className="btn-21 m-2"><span>Programs</span></Link>
                            <a role={"button"}
                               href={"https://www.paypal.com/donate/?hosted_button_id=4CBKQT6CA9R62"}
                               target={"_blank"}
                               className="btn-21 m-2">
                                <span>Donations</span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}