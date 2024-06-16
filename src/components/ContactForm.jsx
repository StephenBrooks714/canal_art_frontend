import { useState } from 'react';

export default function ContactForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        if (event.target.id === "name") {
            setName(event.target.value);
        } else if (event.target.id === "email") {
            setEmail(event.target.value);
        } else if (event.target.id === "message") {
            setMessage(event.target.value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, email, message);
    }

    return (
        <>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" onChange={handleChange} name={name} value={name} id={"name"} placeholder="Your name"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" className="form-control" onChange={handleChange} name={email} value={email} id={"email"} placeholder="Your email"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id={"message"} onChange={handleChange} name={message} value={message} rows="5" placeholder="Your message"></textarea>
                </div>
                <div className="mb-1">
                    <button type="submit" onClick={handleSubmit} className="btn btn-primary">Send Secure Form</button>
                </div>
            </form>
        </>
    )
}