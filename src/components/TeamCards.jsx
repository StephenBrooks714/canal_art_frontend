import teamData from "../helpers/contributors.js";

export default function TeamCards(){

    return (
        <>
            {teamData.team.map((team) => (
                <div className={"col-lg-3 col-md-6 mb-4"} key={team.id}>
                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <img src={team.image} alt={team.name} style={{width: "100%", height: "200px"}}/>
                            </div>
                            <div
                                className="flip-box-back h-100 d-flex flex-column align-items-center justify-content-center">
                                <h3>{team.name}</h3>
                                <p>
                                    {team.about}
                                </p>
                                <a href="" className={"btn btn-outline-light"}>profile</a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}