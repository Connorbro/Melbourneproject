import React, {Component} from 'react';
import '../styles/searchbar.css';
import Pricefilter from './Pricefilter';

class Whatshot extends Component{
    state = {
        data:[]
    }




     getTours = async (e) => {
        e.preventDefault();
        // const api_call = await fetch(`https://www.triposo.com/api/20190906/location.json?id=Melbourne&account=2F2LZIL1&token=o304rc0p3kfkh19zd224lunxhzsjtnlt`);
        const api_call = await fetch(`https://www.triposo.com/api/20190906/tour.json?tag_labels=tours&location_ids=Melbourne&count=20&order_by=-score&fields=price,name,vendor_tour_url,images,id&account=2F2LZIL1&token=o304rc0p3kfkh19zd224lunxhzsjtnlt`);
        const data = await api_call.json();
        console.log(data)
        console.log( data.results[0].price.amount);
        this.setState({
            data: data

            
            
        });
    
     }





    render(){
        return(
            
            <div className="wholeinput">
                <h1>
                    Filter prices
                    
                    
                </h1>

                <form>
  <label>
   <h2> Price filter</h2> <br/>
    
  </label>
   
  <label > Filter price
               <select className="form-control" value={this.props.size} onChange={this.props.getTours}>
                            <option value="ALL">ALL</option>
                            <option value="40">$40 or less</option>
                            <option value="60">$60 or less</option>
                            <option value="80">$80 or less</option>
                            <option value="100">$100 or less</option>
                            <option value="120">$120 or less</option>
                            <option value="140">$140 or less</option>
                        </select>
                    </label>
                    <input type="submit" onClick={this.getTours} value="Check availibility"/> 

</form>
    <Pricefilter details={this.state}/>
                
            </div>
            

        )
    }
    
}





export default Whatshot;