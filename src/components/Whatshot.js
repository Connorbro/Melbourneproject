import React, {Component} from 'react';


class Whatshot extends Component{




     getTours = async (e) => {
        e.preventDefault();
        // const api_call = await fetch(`https://www.triposo.com/api/20190906/location.json?id=Melbourne&account=2F2LZIL1&token=o304rc0p3kfkh19zd224lunxhzsjtnlt`);
        const api_call = await fetch(`https://www.triposo.com/api/20190906/tour.json?tag_labels=tours&location_ids=Melbourne&count=20&order_by=-score&fields=price,vendor,name,vendor_tour_url,attribution,score,images,id&account=2F2LZIL1&token=o304rc0p3kfkh19zd224lunxhzsjtnlt`);
        const data = await api_call.json();
        console.log(data)
        console.log( data.results[0].price.amount);
        console.log(data.results[0].vendor_tour_url);
    
     }





    render(){
        return(
            
            <div>
                <h1>
                    Filter prices
                    
                    
                </h1>

                <form>
  <label>
    Price filter <br/>
    <input type="text" name="Whats your budget?" placeholder="$10.00"/>
  </label>
  <input type="submit" value="Check availibility" />
</form>
                
            </div>
            

        )
    }
    
}





export default Whatshot;