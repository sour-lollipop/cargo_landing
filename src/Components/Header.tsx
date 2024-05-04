import React, {useState} from "react";
import { TbWorld, TbMenu2, TbX } from "react-icons/tb";
import logo_img from "../Images/Logo.png";
export const Header = () => {
  const [popup, setPopup] = useState(false);
  function scrollFooter() {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div className="header">
        {/* <> */}
          <div className="logo">
            <img src={logo_img} />
            {/* <p>Logistic&Cargo</p> */}
            <p>Карго и Логистика</p>
          </div>
      {window.innerWidth > 700 ? (
          <div className="buttons">
            <a href="#first">Главная</a>
            <a href="#second">Калькулятор</a>
            <a href="#third">О нас</a>
            <div className="translate">
              <TbWorld  size={"1.5em"} />
              <p>RU</p>
            </div>
            <button onClick={()=>scrollFooter()} className="btn_contacts">Связаться с нами</button>
          </div>
        // </>
      ) : (popup? (
        <TbX className='icon_header'size={"1.5em"} onClick={() => setPopup(false)}/>

      ):(
        <TbMenu2 className='icon_header'size={"1.5em"} onClick={() => setPopup(true)}/>
        )
        
      )}
    {popup ? (
      <div className="popup_header">
        <a href="#first" onClick={() => setPopup(false)}>Главная</a>
        <a href="#second" onClick={() => setPopup(false)}>Калькулятор</a>
        <a href="#third" onClick={() => setPopup(false)}>О нас</a>
        <div className="translate" onClick={() => setPopup(false)}>
          <TbWorld  size={"1.5em"} />
          <p>RU</p>
        </div>
        <button onClick={()=>{scrollFooter();setPopup(false)}}  className="btn_contacts">Связаться с нами</button>
      </div>
    ):null}
    </div>
  );
};

export default Header;
