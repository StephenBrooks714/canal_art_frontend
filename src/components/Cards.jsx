import data from "../helpers/data.js"
import "./main.css"

export default function Cards() {
    return (
        <>
            {data.artists.map((data) => {
                return (
                    <>
                        <div className={"col-lg-3 text-center col-md-6 mb-5"}>
                            <a href="">
                                <div className={"card hover-zoom p-3"}>
                                    <img src={data.image} alt={data.name} className={"img-fluid rounded"}/>
                                    <p className={"text-dark pt-3"}>
                                        {data.name}
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