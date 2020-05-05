import React, { Component } from 'react'; 

class Home extends Component {
    render(){
        return (
            <div className="container">
                 <div className="home">   
                     <img src="/images/home1.png" alt="" className="heroSlika"/>
                    <button className="btn">View All</button>
                 </div>
                 <div className="container2">
                    <div className="scnd"> 
                        <img src="/images/torba.png" alt="torba" className="torbaSlika"/>
                        <div className="scnd2">
                            <h2><strong>Vera Bradley</strong></h2>
                            <p>Carry the day in style with this extra-large tote crafted in our chic
                               B.B Collection textured PVC. Featuring colorful faux leather trim,
                               this tote offers a roomy interior plus just enough perfectly placed</p>
                               <button className="btn2">Shop Now</button>
                        </div>
                    </div>
                 </div>
            </div>

            
        )
    }
}

export default Home