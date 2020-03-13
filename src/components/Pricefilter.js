import React from 'react'


function Pricefilter(props) {
    console.log(props);
    
    let filteredPrices = "";

    if( props.details.data.results ) {
        filteredPrices = props.details.data.results.filter( (obj) => {
            return props.details.select >= parseInt(obj.price.amount);
        });
        console.log(filteredPrices);
    }

    
    return(
        <div className="">
            {
                props.details.data.results && filteredPrices.map( (obj, index) => {
                    return (
                        <div className="wholecard" key={index}>
                            <div>
                                <h1>{obj.name}</h1>
                                <h2>Price: ${obj.price.amount} </h2>
                                <a href={obj.vendor_tour_url}>Click here to book now!</a>
                                <div className="images">
                                
                                    <img className="apiimg" src={obj.images[0].source_url} alt=""/>
                                </div>
                            </div>
                        </div>
                      )
                    })
                }           
        </div>    
    );  
}

export default Pricefilter;


