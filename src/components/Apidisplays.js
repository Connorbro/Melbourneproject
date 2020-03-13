import React from 'react'
import '../styles/price.css'

function Apidisplays(props) {
    
        
        
        return(
            <div>
                {
                    props.details.data.results && props.details.data.results.map( (obj, index) => {
                        return (
                            <div className="wholecard" key={index}>
                            
                            <div className="names">
                                <h1>
                                <br/>
                                
                                {obj.name}</h1>
                            </div>
                            
                                <br/>
                            <div className="price">
                                <h2>Price: ${obj.price.amount}</h2>
                            </div>

                            <div className= "vendors">
                                <h2>Vendored by {obj.vendor} </h2>
                            </div>


                            <div className="url">
                                <br/>

                                <a href={obj.vendor_tour_url}>Click here to book now!</a>
                            </div>

                            <div className="images">
                                <br/>
                                
                                <img src={obj.images[0].source_url} alt=""/>
                            </div>
                                
                            </div>
                        )
                    })
                }
                                </div>
                           
               
        );
}

export default Apidisplays;


