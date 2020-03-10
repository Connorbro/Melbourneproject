import React from 'react'
import '../styles/price.css'

class Apidisplays extends React.Component {
    render() {
        // console.log(props.price)
        return(
            <div>
        <div className="wholecard">

            <div className="name">
                {
                    this.props.name && <h2>{ this.props.name}</h2>
                    

                }
                <div className="vendor">
                {
                    this.props.vendor && <p>  Vendored by {this.props.vendor}
                    </p>
                }
            <div className="price">
                {
                    this.props.price && <p> Price: 
                        $<span>{this.props.price}</span>
                    </p>
                }
            <div className="tour_url">
                {
                this.props.tour_url && <a
                    href={this.props.tour_url}>Click here to book now </a>              
                    
                }

                <div className="images">
                {
                    this.props.images && <p> 
                        {/* <span>{this.props.images}</span> */}
                        <img src={this.props.images} alt="" />
                    </p>
                }
                </div>
            
            </div>
            </div>
            </div>
            </div>
            </div>


            <div className="wholecard1">

            <div className="name1">
                {
                    this.props.name1 && <h2>{ this.props.name1}</h2>

                }
                <div className="vendor1">
                {
                    this.props.vendor1 && <p>  Vendored by {this.props.vendor1}
                    </p>
                }
            <div className="price1">
                {
                    this.props.price1 && <p> Price: 
                        $<span>{this.props.price1}</span>
                    </p>
                }
                <div className="tour_url1">
                {
                this.props.tour_url1 && <a
                    href={this.props.tour_url1}>Click here to book now </a>              
                    
                }


                <div className="images1">
                {
                    this.props.images1 && <p> 
                        {/* <span>{this.props.images}</span> */}
                        <img src={this.props.images1} alt="" />
                    </p>
                }
                </div>
            
            </div>
            </div>
            </div>
            </div>
            </div>
            <div className="wholecard2">

                <div className="name2">
    {
        this.props.name2 && <h2>{ this.props.name2}</h2>

    }
            <div className="vendor2">
    {
        this.props.vendor2 && <p>  Vendored by {this.props.vendor2}
                    </p>
    }
            <div className="price2">
    {
             this.props.price2 && <p> Price: 
            $<span>{this.props.price2}</span>
            </p>
    }
    <div className="tour_url2">
                {
                this.props.tour_url2 && <a
                    href={this.props.tour_url2}>Click here to book now </a>              
                    
                }

            <div className="images2">
    {
            this.props.images2 && <p> 
            {/* <span>{this.props.images}</span> */}
            <img src={this.props.images2} alt="" />
            </p>
    }
    </div>

            </div>
            </div>
            </div>
            </div>
            </div>
            <div className="wholecard3">

<div className="name3">
    {
        this.props.name3 && <h2>{ this.props.name3}</h2>

    }
    <div className="vendor3">
    {
        this.props.vendor3 && <p>  Vendored by {this.props.vendor3}
                    </p>
    }
<div className="price3">
    {
        this.props.price3 && <p> Price: 
            $<span>{this.props.price3}</span>
        </p>
    }
    <div className="tour_url3">
                {
                this.props.tour_url3 && <a
                    href={this.props.tour_url3}>Click here to book now </a>              
                    
                }


    <div className="images3">
    {
        this.props.images3 && <p> 
            {/* <span>{this.props.images}</span> */}
            <img src={this.props.images3} alt="" />
        </p>
    }
    </div>

        </div>
        </div>
        </div>
        </div>
        </div>

        <div className="wholecard4">

<div className="name4">
    {
        this.props.name4 && <h2>{ this.props.name4}</h2>

    }
    <div className="vendor4">
    {
        this.props.vendor4 && <p>  Vendored by {this.props.vendor4}
                    </p>
    }
<div className="price4">
    {
        this.props.price4 && <p> Price: 
            $<span>{this.props.price4}</span>
        </p>
    }
    <div className="tour_url4">
                {
                this.props.tour_url4 && <a
                    href={this.props.tour_url4}>Click here to book now </a>              
                    
                }


    <div className="images4">
    {
        this.props.images4 && <p> 
            {/* <span>{this.props.images}</span> */}
            <img src={this.props.images4} alt="" />
        </p>
    }
    </div>

        </div>
        </div>
        </div>
        </div>
        </div>


        <div className="wholecard5">

<div className="name5">
    {
        this.props.name5 && <h2>{ this.props.name5}</h2>

    }
    <div className="vendor5">
    {
        this.props.vendor5 && <p>  Vendored by {this.props.vendor5}
                    </p>
    }
<div className="price5">
    {
        this.props.price5 && <p> Price: 
            $<span>{this.props.price5}</span>
        </p>
    }
    <div className="tour_url5">
                {
                this.props.tour_url5 && <a
                    href={this.props.tour_url5}>Click here to book now </a>              
                    
                }


    <div className="images5">
    {
        this.props.images4 && <p> 
            {/* <span>{this.props.images}</span> */}
            <img src={this.props.images5} alt="" />
        </p>
    }
    </div>

        </div>
        </div>
        </div>
        </div>
        </div>












            </div>
            
        );
    }
}

export default Apidisplays;