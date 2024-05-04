import React from "react";
import {Calculate} from '../../Components';
import second_img from '../../Images/Second_img.png'

export const Second_Screen = ()=>{
    return (<div className="second screen" id="second">
        <img className="calc_img" src={second_img}/>
        <Calculate/>
        </div>)
}

export default Second_Screen;