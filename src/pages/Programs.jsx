import NavBar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import ProgramData from '../components/ProgramData.jsx';

export default function Programs() {
    return (
        <>
            <NavBar />
            <div className={"container"}>
                <div className={"row justify-content-center align-items-center"} style={{marginTop: "140px", marginBottom: "70px"}}>
                    <div className={"col-lg-12 mb-5"}>
                        <h1 className={"display-5 mb-2 fw-bold"}>Our Programs</h1>
                        <p className={"lead"}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta earum iure laudantium modi molestiae quae ullam? Ab accusamus aliquam, cumque eius eos excepturi inventore magnam minus necessitatibus optio placeat sit!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias ducimus non omnis quis temporibus! Debitis dolorem esse maxime rem, repellat voluptatum. Autem iure natus, perferendis placeat recusandae reprehenderit tenetur voluptas!
                        </p>
                    </div>
                    <ProgramData />
                </div>
            </div>
            <Footer/>
        </>
    );
}