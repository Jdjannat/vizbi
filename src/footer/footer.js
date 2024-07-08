import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
           
            <div className="info-section">
                <div className="info-text">
                    <p>We growing up your business<br></br> with personal AI manager.</p>
                </div>
                <div className="info-links">
                    <div className="company">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Pricing</a></li>
                        </ul>
                    </div>
                    <div className="legal">
                        <h3>Legal</h3>
                        <ul>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Cookies Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 vizbi.co Design with ❤️ by Kretoss Technology</p>
            </div>
        </footer>
    );
};

export default Footer;
