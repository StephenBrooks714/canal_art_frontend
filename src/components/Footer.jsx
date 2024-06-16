import {Link} from "react-router-dom";

export default function Footer() {

    return (
        <footer className="py-5 bg-dark">
            <div className="container">
                <div className={"row justify-content-between text-center mb-3"}>
                    <div className={"col-lg-12 h5 text-white"}>
                        <Link to={"/"} className={"text-white text-decoration-none m-3"}>Home</Link> |
                        <Link to={"/about"} className={"text-white text-decoration-none m-3"}>About</Link> |
                        <Link to={"/artportunity"} className={"text-white text-decoration-none m-3"}>Arts</Link> |
                        <a href="https://www.paypal.com/donate/?hosted_button_id=4CBKQT6CA9R62"
                           target={"_blank"}
                           className={"text-white text-decoration-none m-3"}>
                            Donate
                        </a>
                    </div>
                </div>
                <div className={"row justify-content-center text-center mb-3"}>
                    <div className={"col-lg-10 text-white"}>
                        <span className={"fw-bold me-3"}>Follow Us On the medias:</span>
                        <a href="https://www.facebook.com/people/The-Canal-Arts/61556577680047/"
                           target={"_blank"} className={"me-3 text-white"}>
                            <i className={"fa-brands fa-facebook"}></i>
                        </a>
                        <a href="https://x.com/CanalArts"
                           target={"_blank"} className={"me-3 text-white"}>
                            <i className="bi bi-twitter-x"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/canal-art-09a63827a/?originalSubdomain=br"
                           target={"_blank"} className={"me-3 text-white"}>
                            <i className="bi bi-linkedin"></i>
                        </a>
                        <a href="https://www.instagram.com/thecanalarts/p/CwTMgxlvTQn/?img_index=1"
                           target={"_blank"} className={"me-3 text-white"}>
                            <i className="bi bi-instagram"></i>
                        </a>
                    </div>
                </div>
                <p className="m-0 text-center text-white">Copyright &copy; Canal Arts 2024</p>
            </div>
        </footer>
    )
}