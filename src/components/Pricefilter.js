import React from 'react'


function Pricefilter(props) {
    return(
        <div className="wholecard">
            {
                props.details.data.results && props.details.data.results.map( (obj, index) => {
                    return (
                        <div key={index}>
                            <div className="names">
                                <h1>
                                <br/>
                                {obj.name}</h1></div>
                                <div className="price">
                                <h2>Price: ${obj.price.amount} </h2></div>
                                <br/>
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

export default Pricefilter;


