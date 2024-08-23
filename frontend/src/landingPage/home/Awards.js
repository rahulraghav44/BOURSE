import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src="media/largestBroker.svg" alt="" />
                </div>
                <div className='col-6 p-5 mt-3'>
                    <h1 className='mb-4'>Largest Broker</h1>
                    <p className='mb-4'>2+ millione Zeroda clients contibutes</p>

                    <div className='row mb-3'>
                        <div className='col-6 '>
                        <ul>
                            <li><p>Futures and options</p></li>
                            <li><p>Commodity derivatives</p></li>
                            <li><p>Currency derivatives</p></li>
                        </ul>
                            
                        </div>
                        <div className='col-6 mb-5' >
                        <ul>
                            <li><p>Stocks and IPOs</p></li>
                            <li><p>Direct mutual funds</p></li>
                            <li><p>Bonds and Currency</p></li>
                        </ul>
                        </div>
                        
                            <img src='media/pressLogos.png' styles={{width :"90%"}} />

                    </div>
                    
                </div>
                
            </div>
            
        </div>
     );
}

export default Awards;