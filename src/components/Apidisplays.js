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
                                    <h1 className="title-h1">{obj.name}</h1>
                                    <img className="apiimg" src={obj.images[0].source_url} alt=""/>
                                </div>
                                <div className="price">
                                    <h2 className="padding-h1">${obj.price.amount}</h2>
                                </div>
                                <div className= "vendors">
                                    <p>Vendored by {obj.vendor} </p>
                                </div>
                                <div className="url">
                                    <br/>
                                    <a className="loginbutton" href={obj.vendor_tour_url}>Book Now!</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
                           
               
        );
}

export default Apidisplays;


