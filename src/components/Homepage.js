import React from 'react';
import '../styles/afterlogin.css';
import Apidisplays from './Apidisplays'



// export default function Navbar(props) {
//     return(
//         <div>
//             <h1>Welcome to Melbourne locations</h1>
//             <form onSubmit={this.props.getTours}>
//                 <button className="getTourButton">Get tours</button>
//             </form>

//         </div>
//     );
// }



class Homepage extends React.Component {

    state = {
        
    }


    getTours = async (e) => {
        e.preventDefault();
        // const api_call = await fetch(`https://www.triposo.com/api/20190906/location.json?id=Melbourne&account=2F2LZIL1&token=o304rc0p3kfkh19zd224lunxhzsjtnlt`);
        const api_call = await fetch(`https://www.triposo.com/api/20190906/tour.json?tag_labels=tours&location_ids=Melbourne&count=20&order_by=-score&fields=price,vendor,name,vendor_tour_url,attribution,score,images,id&account=2F2LZIL1&token=o304rc0p3kfkh19zd224lunxhzsjtnlt`);
        const data = await api_call.json();
        console.log(data)
        console.log( data.results[0].price.amount);
        console.log(data.results[0].vendor_tour_url)
        if (api_call) {
            this.setState({
                price: data.results[0].price.amount,
                name: data.results[0].name,
                vendor: data.results[0].vendor,
                tour_url: data.results[0].vendor_tour_url,
                images: data.results[0].images[0].sizes.medium.url,
                price1: data.results[1].price.amount,
                name1: data.results[1].name,
                vendor1: data.results[1].vendor,
                tour_url1: data.results[1].vendor_tour_url,
                images1: data.results[1].images[0].sizes.medium.url,
                price2: data.results[2].price.amount,
                name2: data.results[2].name,
                vendor2: data.results[2].vendor,
                tour_url2: data.results[2].vendor_tour_url,
                images2: data.results[2].images[0].sizes.medium.url,
                price3: data.results[3].price.amount,
                name3: data.results[3].name,
                vendor3: data.results[3].vendor,
                tour_url3: data.results[3].vendor_tour_url,
                images3: data.results[3].images[0].sizes.medium.url,
                price4: data.results[4].price.amount,
                name4: data.results[4].name,
                vendor4: data.results[4].vendor,
                tour_url4: data.results[4].vendor_tour_url,
                images4: data.results[4].images[0].sizes.medium.url,
                price5: data.results[5].price.amount,
                name5: data.results[5].name,
                vendor5: data.results[5].vendor,
                tour_url5: data.results[5].vendor_tour_url,
                images5: data.results[5].images[0].sizes.medium.url,

                
            });
        } else {
            this.setState({
                price: undefined,
                name: undefined,
                vendor: undefined,
                tour_url: undefined,
                images: undefined,
                price1: undefined,
                name1: undefined,
                vendor1: undefined,
                tour_url1: undefined,
                images1: undefined,
                price2: undefined,
                name2: undefined,
                vendor2: undefined,
                tour_url2: undefined,
                images2: undefined,
                price3: undefined,
                name3: undefined,
                vendor3: undefined,
                tour_url3: undefined,
                images3: undefined,
                price4: undefined,
                name4: undefined,
                vendor4: undefined,
                tour_url4: undefined,
                images4: undefined,
                price5: undefined,
                name5: undefined,
                vendor5: undefined,
                tour_url5: undefined,
                images5: undefined,
            });
        }
    }
        
    render() {
        // console.log(props.price)
        return(
            <div>
                <h1>Welcome to Melbourne locations</h1>
                <form onSubmit={this.getTours}>
                    <button className="getTourButton">All tours now!</button>
                </form>
                {/* <p>{this.state.price}</p> */}

                <Apidisplays
                    price={this.state.price}
                    name={this.state.name}
                    vendor={this.state.vendor}
                    tour_url={this.state.tour_url}
                    images={this.state.images}
                    price1={this.state.price1}
                    name1={this.state.name1}
                    vendor1={this.state.vendor1}
                    tour_url1={this.state.tour_url1}
                    images1={this.state.images1}
                    price2={this.state.price2}
                    name2={this.state.name2}
                    vendor2={this.state.vendor2}
                    tour_url2={this.state.tour_url2}
                    images2={this.state.images2}
                    price3={this.state.price3}
                    name3={this.state.name3}
                    vendor3={this.state.vendor3}
                    tour_url3={this.state.tour_url3}
                    images3={this.state.images3}
                    price4={this.state.price4}
                    name4={this.state.name4}
                    vendor4={this.state.vendor4}
                    tour_url4={this.state.tour_url4}
                    images4={this.state.images4}
                    price5={this.state.price5}
                    name5={this.state.name5}
                    vendor5={this.state.vendor5}
                    tour_url5={this.state.tour_url5}
                    images5={this.state.images5}
                />
             

            </div>
        );
    }
}

export default Homepage