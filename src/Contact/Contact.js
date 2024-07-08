import React from 'react';
import './Contact.css';
import { MdOutlineEmail } from "react-icons/md";

function Contact() {
    return (
        <>
            <div className="contact-container">
                <div className="contact mt-5">
                    <div className="icon-box">
                        <MdOutlineEmail className="email-icon" />
                    </div>
                    <h3>Email</h3>
                    <p className="description">The phrasal sequence of the is now so that<br /> many campaigns and benefits.</p>
                    <div className="contact-details">
                        <p>General inquiries: <a href="mailto:hello@vizbi.co">hello@vizbi.co</a></p>
                        <p>Support Email: <a href="mailto:support@vizbi.co">support@vizbi.co</a></p>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Contact;
