import React, { useState } from "react";
import {
  TbTruckDelivery,
  TbBuildingWarehouse,
  TbFiles,
  TbHeartHandshake,
  TbChartHistogram,
} from "react-icons/tb";

export const Third_Screen = () => {
  const [box_1, setBox_1] = useState(false);
  const [box_2, setBox_2] = useState(false);
  const [box_3, setBox_3] = useState(false);
  const [box_4, setBox_4] = useState(false);
  const [box_5, setBox_5] = useState(false);

  return (
    <div className="third screen" id="third">
      <p className="title_services">
        НАШИ <span className="orange">УСЛУГИ</span>
      </p>
      <div className="sevice_cards">
        {/* first card */}
        <div
          className="sevice_card"
          onMouseOut={() => setBox_1(true)}
          onMouseLeave={() => setBox_1(false)}
          onClick={() => setBox_1(!box_1)}
        >
          <TbTruckDelivery className= "icon_card " />
          {box_1 ? (
            <p className="card_text">
             et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
          ) : (
            <>
              <p className="card_title">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
              <p className="card_text">sed do eiusmod tempor incididunt ut labore</p>
            </>
          )}
        </div>

        {/* second card */}
        <div className="sevice_card"
        onMouseOut={() => setBox_2(true)}
        onMouseLeave={() => setBox_2(false)}
        onClick={() => setBox_2(!box_2)}>
          <TbBuildingWarehouse className="icon_card" />

          {box_2 ? (
            <p className="card_text">
             et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
          ) : (
            <>
              <p className="card_title">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
              <p className="card_text">sed do eiusmod tempor incididunt ut labore</p>
            </>
          )}
        </div>

        {/* third card */}
        <div className="sevice_card"
        onMouseOut={() => setBox_3(true)}
        onMouseLeave={() => setBox_3(false)}
        onClick={() => setBox_3(!box_3)}>
          <TbFiles className="icon_card" />
          {box_3 ? (
            <p className="card_text">
             et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
          ) : (
            <>
              <p className="card_title">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
              <p className="card_text">sed do eiusmod tempor incididunt ut labore</p>
            </>
          )}
        </div>
      </div>
      <div className="secondary_card">
        {/* fourth card */}
        <div className="sevice_card"
        onMouseOut={() => setBox_4(true)}
        onMouseLeave={() => setBox_4(false)}
        onClick={() => setBox_4(!box_4)}>
          <TbHeartHandshake className="icon_card" />
          {box_4 ? (
            <p className="card_text">
             et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
          ) : (
            <>
              <p className="card_title">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
              <p className="card_text">sed do eiusmod tempor incididunt ut labore</p>
            </>
          )}
        </div>

        {/* fifth card */}
        <div className="sevice_card"
        onMouseOut={() => setBox_5(true)}
        onMouseLeave={() => setBox_5(false)}
        onClick={() => setBox_5(!box_5)}>
          <TbChartHistogram className="icon_card" />
          {box_5 ? (
            <p className="card_text">
             et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
          ) : (
            <>
              <p className="card_title">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
              <p className="card_text">sed do eiusmod tempor incididunt ut labore</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Third_Screen;
