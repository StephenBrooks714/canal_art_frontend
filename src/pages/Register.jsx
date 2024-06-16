import NavBar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { useState } from 'react';
import axios from "axios";
import {redirect} from "react-router-dom";

export default function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // Event handlers to update state variables
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        // Prevent default form submission
        event.preventDefault();
        axios
            .post('http://localhost:8080/api/users', {
                name: name,
                email: email,
                password: password
            })
            .then((response) => {
                console.log(response.data);
                response(redirect("/login"))
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <NavBar />
            <div className={"container"}>
                <div className={"row justify-content-center align-items-center"} style={{height: "100vh"}}>
                    <div className={"col-lg-8"}>
                        <h1 className={"display-5 mb-2 fw-bold"}>Register Page</h1>
                        <p className={"lead mb-4"}>
                            Have an account? <a href="/login">Login</a> to get started.
                        </p>
                        <div className={"card p-2"}>
                            <form>
                                <div className="form-group mb-2">
                                    <label>Name:</label>
                                    <input
                                        type="text"
                                        className={"form-control"}
                                        value={name}
                                        onChange={handleNameChange}
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <label>Password:</label>
                                    <input
                                        type="password"
                                        className={"form-control"}
                                        value={password}
                                        onChange={handlePasswordChange}
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <label>Email:</label>
                                    <input
                                        type="email"
                                        className={"form-control"}
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                </div>
                                <button className={"btn btn-primary"} onSubmit={handleSubmit} type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}