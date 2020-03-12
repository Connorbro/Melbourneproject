import React from 'react';
import '../styles/afterlogin.css';
import Apidisplays from './Apidisplays'



class Homepage extends React.Component {

    state = {
        data:[]
    }


    getTours = async (e) => {
        e.preventDefault();
        // const api_call = await fetch(`https://www.triposo.com/api/20190906/location.json?id=Melbourne&account=2F2LZIL1&token=o304rc0p3kfkh19zd224lunxhzsjtnlt`);
        const api_call = await fetch(`https://www.triposo.com/api/20190906/tour.json?tag_labels=tours&location_ids=Melbourne&count=20&order_by=-score&fields=price,vendor,name,vendor_tour_url,attribution,score,images,id&account=2F2LZIL1&token=o304rc0p3kfkh19zd224lunxhzsjtnlt`);
        const data = await api_call.json();
        
        console.log(data.results[0].images[0].sizes.medium.url)
        // console.log( data.results[0].price.amount);
        // console.log(data.results[0].vendor_tour_url)
        
            this.setState({
                data: data

                
                
            });
        }
        
   
        
    render() {
        // console.log(props.price)
        console.log(this.state.data);
        return(
            <div>
                <h1>Welcome to Melbourne locations</h1>
                <form onSubmit={this.getTours}>
                    <button className="getTourButton">All tours now!</button>
                </form>

                <Apidisplays details={this.state}/>
            </div>
        );
    }
}

export default Homepage