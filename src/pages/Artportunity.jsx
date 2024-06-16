import { useRouteError } from "react-router-dom";
import NavBar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <NavBar />
            <div className={"container"}>
                <div className={"row"} style={{marginTop: "130px", marginBottom: "70px"}}>
                    <div className={"col-lg-8 mb-5"}>
                        <h1 className={"display-1 fw-bold text-danger"}>Artportunity</h1>
                    </div>
                    <div className={"col-lg-6 mb-3"}>
                        <h2>For Building Owners and Occupants</h2>
                        <p>
                            To artists, a blank wall is a canvas, an invitation to create something new and beautiful.
                            Buildings around the world provide canvases, and they benefit: from uplifting the
                            neighborhood, engaging viewers, sending a message, spreading delight. A wall can be the
                            place for a masterpiece, or as simple as a colorfully graphic paint job. The process begins
                            with an inquiry: What will it look like? What will it cost? It depends. We show you visual
                            ideas, and the cost is known once all the variables such as size, surface, access and
                            complexity are known. Ask us today.
                        </p>
                    </div>
                    <div className={"col-lg-6 mb-3"}>
                        <h2>For Artists</h2>
                        <p>
                            Artists connect with us by showing us what they can do, and by suggesting possible venues, ideas. Projects can be in search of, or promoted by, artists. We can guide the process.
                        </p>
                        <hr/>
                        <h2>For Volunteers</h2>
                        <p>
                            We like your interest, and experience. Send us both, and we will find a connection to The Canal Arts projects.
                        </p>
                        <hr/>
                        <h2>For Donors</h2>
                        <p>
                            Help us create art that everyone can experience and enjoy daily, that uplifts and encourages, with a tax deductible donation here.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}