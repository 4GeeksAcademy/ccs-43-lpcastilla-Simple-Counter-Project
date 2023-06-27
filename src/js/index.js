//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components

function SecondsCounter (props) {
    return (
        <div className = "container">
            <div className = "counter">
                <div className ="clock">
                    <i className="fa-regular fa-clock"></i>
                </div>
                <div className = "six">{props.digitSix % 10}</div>
                <div className = "five">{props.digitFive % 10}</div>
                <div className = "four">{props.digitFour % 10}</div>
                <div className = "three">{props.digitThree % 10}</div>
                <div className = "two">{props.digitTwo % 10}</div>
                <div className = "one">{props.digitOne % 10}</div>
            </div>
        </div>
        
    )
}

SecondsCounter.propTypes = {
    digitSix: PropTypes.number,
    digitFive: PropTypes.number,
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
};

let counter = 0;
setInterval(function(){
    let six = Math.floor(counter/100000);
    let five = Math.floor(counter/10000);
    let four = Math.floor(counter/1000);
    let three = Math.floor(counter/100);
    let two = Math.floor(counter/10);
    let one = Math.floor(counter/1);
    counter ++;
    ReactDOM.render(
        <SecondsCounter 
            digitOne={one}
            digitTwo={two}
            digitThree={three}
            digitFour={four}
            digitFive={five}
            digitSix={six}
        />, 
        document.querySelector("#app")
    )
},1000);

