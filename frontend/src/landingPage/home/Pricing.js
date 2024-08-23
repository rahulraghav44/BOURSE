import React from 'react';

function Pricing() {
    return ( 
        <div className='container mb-5'>
            <div className='row'>
                    <div className='col-1'>
                    
                    </div>
                
                <div className='col-4'>
                    <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" style={{textDecoration:"none"}}>See Pricing<i class=" fa fa-long-arrow-right" aria-hidden="true" ></i></a>
                </div>
                <div className='col-1'>
                    
                </div>
                <div className='col-6 '>
                    <div className='row text-center p-3'>
                        <div className='col p-2 border'>
                            <h1 className='mb-3'>$0</h1>
                            <p>free equity delivery</p>
                        </div>
                        <div className='col p-2 border'>
                        <h1 className='mb-3'>$20</h1>
                        <p> Intraday & F/O</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;