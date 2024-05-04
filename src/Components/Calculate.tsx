import React, { useState, ChangeEvent, useEffect, useRef } from "react";
import {
  TbMapPin,
  TbBoxSeam,
  TbArrowNarrowRight,
  TbArrowNarrowLeft,
  TbMoneybag,
  TbArrowsDiagonal2,
  TbBrandMailgun,
  TbUser,
  TbPhone,
} from "react-icons/tb";

export const Calculate = () => {
  const [selectedLocation, setSelectedLocation] = useState("urumqi");
  const [selectedLocation2, setSelectedLocation2] = useState("bishkek");
  const [selectedCategory, setSelectedCategory] = useState("auto");
  const [delivery_cost, setDelivery_cost] = useState(" ");
  const [result, setResult] = useState(false);

  const [user_email, setUser_email] = useState(" ");
  const [user_name, setUser_name] = useState(" ");
  const [user_phone, setUser_phone] = useState(" ");
  const [loading, setLoading] = useState(false);
  const [weight, setWeight] = useState<string>("");
  const [volume, setVolume] = useState<string>("");

  const handleSubmit = async (e:any) => {
      alert("Успешно отправлено");
  };

  const handleSubmitDelivery = async (e:any) => {
    const numericWeight = parseFloat(weight);
    const numericVolume = parseFloat(volume);

    if (isNaN(numericWeight) || isNaN(numericVolume)) {
      // Обработка случая, если введены некорректные данные
      setDelivery_cost('NaN')
      alert("Введите корректные значения веса и объема");
    }

    const volumetricWeight = numericVolume / 100; // Коэффициент объемного веса 100 кг/м³
    const chargeableWeight = Math.max(volumetricWeight, numericWeight);

    let deliveryCost;

    if (chargeableWeight <= 100) {
      // Стоимость за кубический метр
      deliveryCost = numericVolume * (selectedLocation == "urumqi" ? 150 : 190);
    } else if (chargeableWeight <= 130) {
      // Стоимость за килограмм
      deliveryCost =
        chargeableWeight * (selectedLocation == "urumqi" ? 1.4 : 1.7);
    } else if (chargeableWeight <= 150) {
      // Стоимость за килограмм
      deliveryCost =
        chargeableWeight * (selectedLocation == "urumqi" ? 1.3 : 1.6);
    } else if (chargeableWeight <= 180) {
      // Стоимость за килограмм
      deliveryCost =
        chargeableWeight * (selectedLocation == "urumqi" ? 1.2 : 1.5);
    } else if (chargeableWeight <= 200) {
      // Стоимость за килограмм
      deliveryCost =
        chargeableWeight * (selectedLocation == "urumqi" ? 1.15 : 1.4);
    } else if (chargeableWeight <= 250) {
      // Стоимость за килограмм
      deliveryCost =
        chargeableWeight * (selectedLocation == "urumqi" ? 1.1 : 1.3);
    } else if (chargeableWeight <= 300) {
      // Стоимость за килограмм
      deliveryCost =
        chargeableWeight * (selectedLocation == "urumqi" ? 1 : 1.2);
    } else if (chargeableWeight <= 350) {
      // Стоимость за килограмм
      deliveryCost =
        chargeableWeight * (selectedLocation == "urumqi" ? 0.9 : 1.1);
    } else if (chargeableWeight <= 400) {
      // Стоимость за килограмм
      deliveryCost =
        chargeableWeight * (selectedLocation == "urumqi" ? 0.85 : 1);
    } else if (chargeableWeight <= 500) {
      // Стоимость за килограмм
      deliveryCost =
        chargeableWeight * (selectedLocation == "urumqi" ? 0.8 : 0.95);
    } else if (chargeableWeight <= 700) {
      // Стоимость за килограмм
      deliveryCost =
        chargeableWeight * (selectedLocation == "urumqi" ? 0.75 : 0.9);
    } else if (chargeableWeight <= 1000) {
      // Стоимость за килограмм
      deliveryCost =
        chargeableWeight * (selectedLocation == "urumqi" ? 0.7 : 0.85);
    } else {
      deliveryCost =
        chargeableWeight * (selectedLocation == "urumqi" ? 0.65 : 0.8);
    }
    // setDelivery_cost(deliveryCost.toFixed(2))
    // return deliveryCost.toFixed(2); // Округление до двух знаков после запятой
    const formattedDeliveryCost = deliveryCost.toFixed(2);
    setDelivery_cost(formattedDeliveryCost);
    setResult(true);
    // return formattedDeliveryCost;
  };

  const handleLocationChange = (event: any) => {
    setSelectedLocation(event.target.value);
    console.log("event.target.value:", event.target.value);
  };
  const handleLocationChange2 = (event: any) => {
    setSelectedLocation2(event.target.value);
    console.log("event.target.value:", event.target.value);
  };

  const handleCategoryChange = (event: any) => {
    setSelectedCategory(event.target.value);
    console.log("event.target.value:", event.target.value);
  };
  const handleWeightChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWeight(e.target.value);
  };

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVolume(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser_email(e.target.value);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser_name(e.target.value);
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser_phone(e.target.value);
  };

  

  return (
    <div className="calc">
      <div className="calc_text">Калькулятор</div>
      <div className="calculation">
        {result ? (
          <>
            <div className="place order">
              <p className="title">Мы свяжемся с вами</p>
              <div className="input_form">
                <TbBrandMailgun className="MapPin" />
                <input
                  onChange={handleEmailChange}
                  type="email"
                  placeholder="Почта"
                />
              </div>
              <div className="input_form">
                <TbUser className="MapPin" />
                <input onChange={handleNameChange} placeholder="ФИО" />
              </div>
              <div className="input_form">
                <TbPhone className="MapPin" />
                <input
                  onChange={handlePhoneChange}
                  placeholder="+7 777 123 45 67"
                />
              </div>
              <p className="title">Стоимость доставки:</p>
              <p className="title delivery_cost">
                <span className="orange">{delivery_cost}</span> $
              </p>
            </div>
            <div className="calcs_btns">
              <button
                className="btn_calc"
                onClick={() => {
                  setResult(false);
                }}
              >
                <TbArrowNarrowLeft className="calc_btn" />
              </button>
              <button
                className="btn_calcR"
                disabled={loading}
                onClick={handleSubmit}
              >
                Отправить
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="place order">
              <p className="title">Место доставки</p>
              <div className="input_form">
                <TbMapPin className="MapPin" />
                <select
                  value={selectedLocation}
                  onChange={handleLocationChange}
                >
                  <option value="urumqi">Урумчи</option>
                  <option value="guangzhou">Гуанжоу</option>
                  <option value="iwu">Иву</option>
                </select>
              </div>
              <div className="input_form">
                <TbMapPin className="MapPin" />
                {/* <input placeholder="Куда" /> */}
                <select
                  value={selectedLocation}
                  onChange={handleLocationChange2}
                >
                  <option value="bishkek">Бишкек</option>
                </select>
              </div>
            </div>

            <div className="kategory order">
              <p className="title">Что вы отправляете?</p>
              <div className="input_form">
                <TbBoxSeam className="MapPin" />
                {/* <input placeholder="Категория товара" /> */}
                <select
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <option value="headwear">Головные уборы</option>
                  <option value="toys">
                    Игрушки и канцелярские принадлежности
                  </option>
                  <option value="furniture">Мебель и фурнитура</option>
                  <option value="auto">Автозапчасти и аксессуары</option>
                  <option value="lighting">Освещение</option>
                  <option value="textiles">
                    Текстиль и постельные принадлежности
                  </option>
                  <option value="tableware">Посуда</option>
                  <option value="gardening">Садовый инвентарь</option>
                  <option value="hardware">
                    Строительные материалы и крепеж
                  </option>
                  <option value="fabrics">Ткани и швейная фурнитура</option>
                  <option value="awnings">Навесы и палатки</option>
                  <option value="baby">Детские товары</option>
                  <option value="footwear">Части для обуви и зонты</option>
                  <option value="socks">Чулочно-носочные изделия</option>
                  <option value="electric-vehicles">
                    Электрические транспортные средства
                  </option>
                </select>
              </div>
            </div>

            <div className="grid">
              <div className="kategory order">
                <p className="title">Вес</p>
                <div className="input_form">
                  <TbMoneybag className="MapPin" />
                  <input
                    className="input_num"
                    type="number"
                    step="any"
                    placeholder="123.123"
                    value={weight}
                    onChange={handleWeightChange}
                  />
                  <div className="num_value">кг</div>
                </div>
              </div>
              <div className="kategory order">
                <p className="title">Обьем</p>
                <div className="input_form">
                  <TbArrowsDiagonal2 className="MapPin" />
                  <input
                    className="input_num"
                    type="number"
                    step="any"
                    placeholder="1.23"
                    value={volume}
                    onChange={handleVolumeChange}
                  />
                  <div className="num_value">куб</div>
                </div>
              </div>
            </div>
            <button
              className="btn_calc"
              onClick={handleSubmitDelivery}
            >
              <TbArrowNarrowRight className="calc_btn" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Calculate;
