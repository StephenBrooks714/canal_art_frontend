import data from "../helpers/programData.js"
import "./main.css"

export default function ProgramData() {

    return (
        <>
            {data.programs.map((data) => {
                return (
                    <>
                        <div className={"col-lg-3 text-center col-md-6 mb-5"}>
                            <a href="">
                                <div className={"card hover-zoom p-3"}>
                                    <img src={data.image} alt={data.title} className={"img-fluid rounded"}/>
                                    <p className={"text-dark pt-3"}>
                                        {data.title}
                                    </p>
                                </div>
                            </a>
                        </div>
                    </>
                );
            })}
        </>
    )
}