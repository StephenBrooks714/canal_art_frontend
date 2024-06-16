import NavBar from '../components/Navbar.jsx';
import { useCallback } from 'react'

import {useDescope} from '@descope/react-sdk'

export default function Dashboard() {
    const { logout } = useDescope()
    const handleLogout = useCallback(() => {
        logout()
    }, [logout])

    return (
        <>
            <NavBar />
            <div className={"container-fluid"}>
                <div className={"row"} style={{marginTop: "100px", marginBottom: "70px"}}>
                    <div className={"col-lg-12 mb-4"}>
                        <div className={"row align-items-center"}>
                            <div className={"col-6"}>
                                <h1 className={"display-4 mb-2 fw-bold"}>Dashboard</h1>
                                <p className={"lead"}>
                                    Welcome to the dashboard!
                                </p>
                            </div>
                            <div className={"col-6 align-items-center"}>
                                <h2 className={"fw-light"}>Are You Finished?</h2>
                                <button onClick={handleLogout} className={"btn btn-primary"}>Logout</button>
                            </div>
                        </div>
                    </div>
                    <div className={"col-lg-6 mb-3"}>
                        <div className={"card p-2"}>
                            <h2>Programs</h2>
                            <hr/>
                            <ul>
                                <li>View Programs</li>
                                <li>Create Program</li>
                                <li>Delete Program</li>
                            </ul>
                        </div>
                    </div>
                    <div className={"col-lg-6 mb-3"}>
                        <div className={"card p-2"}>
                            <h2>Contributors</h2>
                            <hr/>
                            <ul>
                                <li>Invite A Contributor</li>
                                <li>Browse Contributors</li>
                                <li>Delete A Contributor</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}