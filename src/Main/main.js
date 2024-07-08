import React from 'react';
import './main.css';
import image1 from '../assets/dashboard/1.png'
import group26 from '../assets/dashboard/Group 26.png'
import group27 from '../assets/dashboard/Group 27.png'
import group28 from '../assets/dashboard/download__2_-removebg-preview 1.png'
import group29 from '../assets/dashboard/Group 28.png'
import group30 from '../assets/dashboard/Frame 13.png'
import viewbrain from '../assets/dashboard/view-brain.png'
import dashboard from '../assets/dashboard/dashboard 2.png'
import view from '../assets/dashboard/view 1.png'
import FAQ from '../FAQ/faq';
const Main = () => {
    return (
        <div className="main-content">
            <div className="hero-section">
                <h1>Vizbi: Beyond Data, Into Vision</h1>
                <button className="try-button">Try For Free</button>
                <p>No credit card required.</p>
            </div>
            <div className="dashboard-preview">
                <img src={image1} alt="Dashboard preview" />
            </div>
            <div className="image-grid-container">
                <img src={group26} alt="Group 26" />
                <img src={group27} alt="Group 27" />
                <img src={group28} alt="Group 28" />
                <img src={group29} alt="Group 29" />
                <img src={group30} alt="Group 30" />
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={viewbrain} alt='viewbrain' />
                    </div>
                    <div className='col-md-6'>
                        <div className='Ai'>
                            <p><b>Turn your data into insights using our AI</b></p>
                        </div>
                        <div className='content'>
                            <p>AI-generated insights</p>
                            <p>Generate views and dashboards based on the insights</p>
                            <p>Save money, and grow your business</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='container'>
                <div className='row'>

                    <div className='col-md-6'>
                        <div className='Ai'>
                            <p><b>Dashboard</b></p>
                        </div>
                        <div className='content'>
                            <p>The Dashboard provides a centralized interface for users to monitor and manage key metrics, track performance, and gain insights into their operations</p>
                            <p>HOW Vizbi SCALES WITH YOUR ORGANIZATION
                            </p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <img src={dashboard} alt='dashboard' />
                    </div>
                </div>

            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={view} alt='view' />
                    </div>
                    <div className='col-md-6'>
                        <div className='Ai'>
                            <h3><b>view</b></h3>
                        </div>
                        <div className='content'>
                            <p> Empower users to tailor their interface by customizing <br />views according to their specific needs and preferences</p>
                            <p>REAL-TIME ISN'T PREFERRED, IT'S EXPECTED </p>
                        </div>
                    </div>
                </div>

            </div>
            <FAQ></FAQ>
        </div>
    );
};

export default Main;