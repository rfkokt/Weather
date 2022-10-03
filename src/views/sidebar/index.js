import React, { useEffect, useState } from "react";
import { Input } from "@material-tailwind/react";
import { IoMdSearch } from "react-icons/io";
import { getCity, getLatlong } from "../../Global/api";
let firstRender = true;

export default function SideBar({ setCity, setTemp, setWeather }) {
  const [valCity, setValCity] = useState([
    {
      value: "Chicago",
      label: "Chicago",
    },
    {
      value: "New York",
      label: "New York",
    },
    {
      value: "London",
      label: "London",
    },
    {
      value: "Paris",
      label: "Paris",
    },
  ]);
  const [valueInput, setValueInput] = useState("bekasi");
  const [dataWeather, setDataWeather] = useState();
  const handleGetData = async () => {
    try {
      const { data } = await getCity(valueInput);
      const dataLatlon = data.list[0]?.coord;
      if (data.list.length > 0) {
        handleGetLatlon(dataLatlon.lat, dataLatlon.lon);
        setCity(data.list[0]?.name);
        setValCity(data.list);
        firstRender = false;
      }
    } catch (error) {
      return error;
    }
  };

  const handleGetLatlon = async (lat, lon) => {
    try {
      const { data } = await getLatlong(lat, lon);
      setDataWeather(data);
      setTemp(data.current?.temp);
      setWeather(data.current?.weather[0].main);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    if (firstRender) {
      handleGetData(valueInput);
    }
  });
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleGetData(valueInput);
    }
  };

  return (
    <div className="md:w-4/12 min-h-screen bg-transparan backdrop-blur-sm	pl-20">
      <div className="flex justify-between">
        <div className="pt-12 w-9/12">
          <Input
            variant="standard"
            size="lg"
            label="Another Location"
            className="text-white"
            onChange={(e) => setValueInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div
          className="content-end cursor-pointer"
          onClick={() => handleGetData(valueInput)}
        >
          <div className="bg-col_rainy w-24 h-24 flex items-center justify-center">
            <IoMdSearch size={50} />
          </div>
        </div>
      </div>
      <div className="mt-16">
        {valCity.map((item, index) => (
          <p
            className="mb-4 text-col_rainy cursor-pointer"
            onClick={() => {
              setCity(item.name);
              handleGetLatlon(item.coord.lat, item.coord.lon);
            }}
            key={index}
          >
            {item.name}
          </p>
        ))}
      </div>
      {/* Line */}
      <div className="relative flex w-11/12 py-5 items-center">
        <div className="flex-grow border-t border-col_rainy"></div>
      </div>
      {/* Weather Details */}
      <div className="mt-12 pr-20">
        <p className="font-bold mb-16">Weather Details</p>
        <div className="flex justify-between mb-10">
          <p className="mb-4 text-col_rainy">Cloudy</p>
          <p className="mb-4 text-col_rainy">{dataWeather?.current.clouds}%</p>
        </div>
        <div className="flex justify-between mb-10">
          <p className="mb-4 text-col_rainy">Wind</p>
          <p className="mb-4 text-col_rainy">
            {dataWeather?.current.wind_speed} m/s
          </p>
        </div>
        <div className="flex justify-between mb-10">
          <p className="mb-4 text-col_rainy">Humidity</p>
          <p className="mb-4 text-col_rainy">
            {dataWeather?.current.humidity}%
          </p>
        </div>
        <div className="flex justify-between mb-10">
          <p className="mb-4 text-col_rainy">Visibility</p>
          <p className="mb-4 text-col_rainy">
            {dataWeather?.current.visibility / 1000} km
          </p>
        </div>
      </div>
      {/* Line */}
      {/* <div className="relative flex w-11/12 py-5 items-center">
        <div className="flex-grow border-t border-col_rainy"></div>
      </div> */}
    </div>
  );
}
