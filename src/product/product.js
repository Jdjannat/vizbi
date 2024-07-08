import React from 'react';
import './product.css';
import dashboard1 from '../assets/dashboard/product-1 1.png'
import product1 from '../assets/dashboard/product-2 1.png'
import metadata from '../assets/dashboard/product-3 1.png'
import product2 from '../assets/dashboard/product-4 1.png'
import dashboard2 from '../assets/dashboard/dashboard 2.png'
const Product = () => {
    return (
        <div className='main'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={dashboard1} alt='viewbrain' />
                    </div>
                    <div className='col-md-6'>
                        <h1>Vizbi's capabilities"</h1>
                        <div>
                            <p><b>Interact with our AI amd get your insights fasdt"</b></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-md-5'>
                        <img src={product1} alt='viewbrain' />
                    </div>
                    <div className='col-md-5'>
                        <h1>Dashboards</h1>
                        <div>
                            <p><b>create custom views, dashboards and filters"</b></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={metadata} alt='viewbrain' />
                    </div>
                    <div className='col-md-6'>
                        <h1>Get the AI's data"</h1>
                        <div>
                            <p><b>Customize the AI-generated view, get the generated query ,and more </b></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-md-5'>
                        <img src={product2} alt='viewbrain' />
                    </div>
                    <div className='col-md-5'>
                        <h1>Integrations</h1>
                        <div>
                            <p><b>Vizbi supports various data source integration as Mysql,"</b></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={dashboard2} alt='viewbrain' />
                    </div>
                    <div className='col-md-6'>
                        <h1>Slack and Team Integration </h1>
                        <div>
                            <p><b>Get your insights directly in your favourite chat application! </b></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='product'>
                <h2>* Comming soon: Integration with Salesforce,Databricks,Google Sheets and much more </h2>
            </div>
        </div>
    );
};

export default Product;
