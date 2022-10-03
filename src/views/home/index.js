import moment from "moment";
import React, { useEffect, useState } from "react";
import {
  IoMdRainy,
  // IoMdSnow,
  // IoMdSunny,
  // IoMdPartlySunny,
  // IoMdThunderstorm,
  IoMdCloudy,
} from "react-icons/io";
import SideBar from "../sidebar";

export default function Home() {
  const [city, setCity] = useState("Bekasi");
  const [temp, setTemp] = useState("30");
  const [weather, setWeather] = useState("Clouds");
  const [dataWeather, setDataWeather] = useState();

  useEffect(() => {
    if (weather === "Clouds") {
      setDataWeather({
        bgImg: "bg-cloudy",
        name: "Cloudy",
      });
    } else {
      setDataWeather({
        bgImg: "bg-rainy",
        name: "Rainy",
      });
    }
  }, [weather]);

  return (
    <>
      <div
        className={`flex bg-rainy bg-cover ${dataWeather?.bgImg} justify-between text-white`}
      >
        <div className="px-32 py-24">
          {/* Header */}
          <div className="md:h-2/3">
            <h1 className="font-bold text-xl ">rdev.weather</h1>
          </div>
          <div className="md:h-1/3 flex items-center">
            {/* Derajat */}
            <p className="text-9xl mr-6 font-bold">{Math.floor(temp)}&#176;</p>

            {/* Kota */}
            <div className="flex flex-col items-center mr-10">
              <p className="text-6xl font-medium">{city}</p>
              <p>{moment().format("HH:MM - dddd, D MMM  'YY")}</p>
            </div>

            {/* Icon */}
            <div className="flex flex-col items-center">
              <p>
                {dataWeather?.name === "Cloudy" && <IoMdCloudy size={50} />}
                {dataWeather?.name === "Rainy" && <IoMdRainy size={50} />}
              </p>
              <p>{dataWeather?.name}</p>
            </div>
          </div>
        </div>

        <SideBar setCity={setCity} setTemp={setTemp} setWeather={setWeather} />
      </div>
    </>
  );
}
