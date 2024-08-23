import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5'>
            <div className='row p-3'>
                    
                <div className='col-6 p-5'>
                    <img src="media/education.svg" alt="" style={{width:"90%"}} />
                </div>
               
                
                <div className='col-6 p-3 mt-3'>
                    <h4 className='mt-5 fs-2 '>Free and open market education</h4>
                    <p className='mt-5 fs-5 text-muted'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="" style={{textDecoration:"none"}}>Varsity <i class=" fa fa-long-arrow-right" aria-hidden="true" ></i></a>

                    
                    <p className='mt-5 fs-5 text-muted' >TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="" style={{textDecoration:"none"}}>TradingQ&A<i class=" fa fa-long-arrow-right" aria-hidden="true" ></i></a>


                </div>
    
                
            </div>
        </div>
     );
}

export default Education;