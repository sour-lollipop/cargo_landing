import React from "react";
import First_img from "../../Images/First_img.png";


export const First_Screen = ()=>{
    function scrollThird() {
        const third = document.getElementById("third");
        if (third) {
            third.scrollIntoView({ behavior: "smooth" });
        }
      }

    return (<div className="first screen" id="first">
        <div className="content">
            <div>
            <p className="first_text">Lorem ipsum </p>
            <p className="first_text bold">dolor sit amet, consec</p>
            </div>
            {window.innerWidth<700 ? (<img className='track' src={First_img}/>): null}
            <div>
            <p className="second_text">adipiscing elit,</p>
            <p className="second_text orange"> sed do eiusmod tempor </p>
            <p className="second_text">ut labore et dolore</p>
            </div>
            <button className="btn_services" onClick={()=>scrollThird()}>
                <a href="#">Подробнее</a>
            </button>
        </div>
        {window.innerWidth>700 ? (<img className='track' src={First_img}/>): null}

        {/* <img className='track' src={First_img}/> */}
        </div>)
}

export default First_Screen;
