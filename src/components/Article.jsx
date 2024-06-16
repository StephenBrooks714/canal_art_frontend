import imageArt from "../assets/5374.png"

export default function Article() {
    return(
        <section className={"row flex-row-reverse align-items-center mb-5 pb-5"}>
            <div className={"col-lg-6 mb-3"}>
                <h3 className={"display-3 fw-light"}>Art Work Is <span
                    className={"fw-bold text-black-50"}>Around</span> Us</h3>
                <p className={"text-muted"}>
                    Bienvenidos al Canal, completed and celebrated in July, 2021, is the work of three immigrant artists and youth artists,
                    in collaboration with the group of community leaders, Voces del Canal, as advisors, an important collaborator in
                    The Canal Arts program. The building is a prominent gateway to the Canal, at the corner of Bellam and Belvedere.
                </p>
            </div>
            <div className={"col-lg-6 mb-3"}>
                <img src={imageArt}
                     className={"img-fluid rounded shadow-lg"}
                     alt={"Art Work Is Around Us"}/>
            </div>
        </section>
    )
}