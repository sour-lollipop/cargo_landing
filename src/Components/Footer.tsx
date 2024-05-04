import React from "react";
// import footer_L from "../Images/Footer_web.png";
// import footer_S from "../Images/Footer_mobile.png";
import {
  TbBrandTelegram,
  TbBrandWhatsapp,
  TbBrandMailgun,
} from "react-icons/tb";
export const Footer = () => {
  return (
    <div className="footer" >
      {/* <img src={footer_L}/> */}
      <div className="footer_content">
        <p className="footer_title">Наши контакты</p>
        <div className="contact_content">
          <div className="icons_footer">
            <TbBrandTelegram />
            <TbBrandWhatsapp />
          </div>
          <a>+70000000000</a>
        </div>
        <div className="contact_content">
          <div className="icons_footer">
            <TbBrandTelegram />
            <TbBrandWhatsapp />
          </div>
          <a>+70000000000</a>
        </div>
        <div className="contact_content">
          <div className="icons_footer">
            <TbBrandMailgun />
          </div>
          <a>simple@gmail.com</a>
        </div>
        <div className="contact_end">
        <p id="footer" className="footer_title end">TOO “Cargo&Logistic”</p>
        <a id="footer" href='https://github.com/sour-lollipop' className="footer_title end lolipop">Rазработано sour-lolipop</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
