import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "../components/main.css";
import TeamCard from "../components/TeamCards.jsx";

export default function AboutPage() {

    return (
        <>
            <Navbar />
            <main className={"container"} style={{marginTop: "130px", marginBottom: "100px"}}>
                <div className={"row mb-4"}>
                    <h1 className={"display-1 text-center mb-2"}><span className={"fw-bold text-black-50"}>About</span> Us</h1>
                    <p className={"lead text-center"}>
                        Join our team of artist to add to the value of our community by contributing your art.
                    </p>
                </div>
                <div className={"row text-center"}>
                    {/* imported team card component */}
                    <TeamCard/>
                </div>
            </main>
            <Footer/>
        </>
    )
}