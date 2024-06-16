import './assets/buttons.css'
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Cards from "./components/Cards.jsx";
import Article from "./components/Article.jsx";
import Contact from "./components/ContactForm.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {

    return (
        <>
            <Navbar />
            <Header />
            <main className={"container"}>
                <div className={"row mb-3"} style={{marginTop: "50px"}}>
                    <h2 className={"display-6 text-center mb-2"}>Artist that contributed their work</h2>
                    <p className={"lead text-center mb-4"}>
                        Interested in getting involved or contributing your art to this organization? Please fill out the form <a
                        href={"#contact"}>below</a> and we'll be in touch with you shortly.
                    </p>
                    <Cards />
                </div>
                <Article />
                <section className={"row mb-5 pb-3"}>
                    <div className={"col-lg-6 mb-3"}>
                        <h5 className={"h1 mb-2"}>Want to get in touch?</h5>
                        <p className={"text-muted mb-3"}>
                            Please use the form to contact us. We will get back to you as soon as possible.
                        </p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                We Support the Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </li>
                            <li className="list-group-item">
                                We Support the Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </li>
                            <li className="list-group-item">
                                <strong>Monday - Friday:</strong> <i>9am to 6pm MST</i>
                            </li>
                        </ul>
                    </div>
                    <div className={"col-lg-6 mb-3"} id={"contact"}>
                        <Contact/>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}