import React from 'react';
import './Card.css';

function Card() {
    return (
        <div className="pricing-container">
            <div className="card-header">
                <h1>Pricing Plans</h1>
                <p>You don't have to choose between cost, time, and quality</p>
            </div>

            <div className="cards">
                <div className="card">
                    <div className="card-title">Trial</div>
                    <p>Perfect for individuals or small teams just getting started.</p>
                    <div className="card-price">$0</div>
                    <button className="card-button">Subscribe Now</button>
                    <p className="card-note">NO CREDIT CARD REQUIRED</p>
                    <div className="card-features">
                        <h3>Features:</h3>
                        <p>✔ 1 View</p>
                        <p>✔ 1 User</p>
                        <p>✔ 1 Dashboard</p>
                        <p>✔ 1 Query/day</p>
                        <p>✔ 1 Data source</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-title">Pro</div>
                    <div className="card-badge">Limited offer</div>
                    <p>Designed for professionals needing advanced capabilities.</p>
                    <div className="card-pricing">
                        <span className="card-price">$0</span>
                        <span className="card-subprice">/PER MONTH</span>
                    </div>
                    <p className="card-subprice">REG: $50/Month</p>
                    <button className="card-button">Subscribe Now</button>
                    <p className="card-note">The offer is limited only for 1 year and for new users until October 31st.</p>
                    <div className="card-features">
                        <h3>Features:</h3>
                        <p>✔ 2 Views</p>
                        <p>✔ 1 User</p>
                        <p>✔ 1 Dashboard</p>
                        <p>✔ 10 Queries/day</p>
                        <p>✔ 2 Data sources</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-title">Enterprise</div>
                    <div className="card-badge">Limited offer</div>
                    <p>Designed for larger teams needing extensive features.</p>
                    <div className="card-pricing">
                        <span className="card-price">$100</span>
                        <span className="card-subprice">/PER MONTH</span>
                    </div>
                    <p className="card-subprice">REG: $200/Month</p>
                    <button className="card-button">Subscribe Now</button>
                    <p className="card-note">The offer is limited only for 1 year and for new users until October 31st.</p>
                    <div className="card-features">
                        <h3>Features:</h3>
                        <p>✔ 10 Views</p>
                        <p>✔ 10 Users</p>
                        <p>✔ 5 Dashboards</p>
                        <p>✔ 100 Queries/day</p>
                        <p>✔ 100 Data sources</p>
                    </div>
                </div>
            </div>

            <div class="last">
                <p>* Custom solutions for large or specialized organizations.</p>
                <button type="button" class="btn-1 btn-warning">Contact Us</button>
            </div>
        </div>
    );
}

export default Card;
