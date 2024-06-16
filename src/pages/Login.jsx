import NavBar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
// import { useCallback } from 'react'
import Dashboard from "../admin/Dashboard.jsx";
import Logo from "../assets/logo.png"

import { useDescope, useSession, useUser } from '@descope/react-sdk'
import { Descope } from '@descope/react-sdk'
import { getSessionToken } from '@descope/react-sdk';

const Login = () => {
    const { isAuthenticated, isSessionLoading } = useSession()
    const { user, isUserLoading } = useUser()

    const exampleFetchCall = async () => {
        const sessionToken = getSessionToken();

        // example fetch call with authentication header
        fetch('your_application_server_url', {
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + sessionToken,
            }
        })
    }

    return <>
        <NavBar />
            <div className={"container"} style={{ marginTop: "90px" }}>
                <div className={"row justify-content-center"}>
                    <div className={"col-lg-10"}>
                        {!isAuthenticated &&
                            (
                                <Descope
                                    flowId="sign-up-or-in"
                                    onSuccess={(e) => console.log(e.detail.user)}
                                    onError={(e) => console.log('Could not log in!')}
                                />
                            )
                        }

                        {
                            (isSessionLoading || isUserLoading) &&
                            <div className={"container my-5 py-5"}>
                                <div className={"row justify-content-center align-items-center text-center"}>
                                    <div className={"col-lg-10"}>
                                        <p className={"display-5"}>Loading...</p>
                                        <div className="card" aria-hidden="true">
                                            <img src={Logo} height={"45"} width={"45"} alt="..."/>
                                            <div className="card-body">
                                                <h5 className="card-title placeholder-glow">
                                                    <span className="placeholder col-6"></span>
                                                </h5>
                                                <p className="card-text placeholder-glow">
                                                    <span className="placeholder col-7"></span>
                                                    <span className="placeholder col-4"></span>
                                                    <span className="placeholder col-4"></span>
                                                    <span className="placeholder col-6"></span>
                                                    <span className="placeholder col-8"></span>
                                                </p>
                                                <a className="btn btn-primary disabled placeholder col-6"
                                                   aria-disabled="true"></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }

                        {!isUserLoading && isAuthenticated &&
                            (
                                <Dashboard/>
                            )
                        }
                    </div>
                </div>
            </div>
        <Footer/>
    </>;
}

export default Login