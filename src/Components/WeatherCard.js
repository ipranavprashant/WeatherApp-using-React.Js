import React, { useEffect, useState } from 'react'
import './WeatherCard.css'

const WeatherCard = () => {

    const [cityName,setCityName]=useState("Muzaffarpur");
    const [cityName1,setCityName1]=useState(""); //while typing I will store the string in here and then finally on click I will copy the entire city name at once into the main cityName
    const [temperatureDetails,setTemperatureDetails]=useState({});
    const [locationDetails,setLocationDetails]=useState({});
    const [conditionDetails,setConditionDetails]=useState({});
    const handleFetch=async()=>{
        try{
        const response=await fetch("https://api.weatherapi.com/v1/current.json?key=dcbc3a49f1a44d8a9b1184038230301&q=" + cityName + "&aqi=yes")
        const convertedJson=await response.json();
        console.log(convertedJson); //ab isko dekhte dekhte details extract karo
        setLocationDetails(convertedJson.location);
        setTemperatureDetails(convertedJson.current);
        setConditionDetails(convertedJson.current.condition);
        console.log(conditionDetails);
        }catch(error){
            console.log("An error occured while fetching!"+error);
        }
    }

    const handleClick=()=>{
        setCityName(cityName1);
    }

    const handleNewDelhi=()=>{
        setCityName("New Delhi");
    }

    const handleMumbai=()=>{
        setCityName("Mumbai");
    }

    const handleNewYork=()=>{
        setCityName("New York");
    }

    const handleCalifornia=()=>{
        setCityName("California");
    }

    useEffect(()=>{
        handleFetch();
    },[cityName])
  return (
    <>
<div className="container-fluid px-1 px-sm-3 py-5 mx-auto">
    <div className="row d-flex justify-content-center">
        <div className="row card0">
            <div className="card1 col-lg-8 col-md-7">
                <small>the.reactweatherapp</small>
                <div className="text-center">
                    <img className="image mt-5" src="https://i.imgur.com/M8VyA2h.png" alt="unloaded.png"/>
                </div>
                <div className="row px-3 mt-3 mb-3">
                    <h1 className="large-font mr-3">{temperatureDetails.temp_c}&#176;</h1>
                    <div className="d-flex flex-column mr-3">
                        <h2 className="mt-3 mb-0">{locationDetails.name}</h2>
                        <small>{locationDetails.localtime}</small>
                    </div>
                    <div className="d-flex flex-column text-center">
                        <h3 className="fa fa-sun-o mt-4">{conditionDetails.text}</h3>
                        <small>Made by Pranav Prashant</small>
                    </div>
                </div>
            </div>
            <div className="card2 col-lg-4 col-md-5">
                <div className="row px-3">
                    <input type="text" name="location" placeholder="Another location" className="mb-5" onChange={(e)=>setCityName1(e.target.value)}/>
                    <div className="fa fa-search mb-5 text-center" onClick={handleClick}>click!</div>
                </div>
                <div className="mr-5">
                    <p className="light-text suggestion" onClick={handleNewDelhi}>New Delhi</p>
                    <p className="light-text suggestion" onClick={handleMumbai}>Mumbai</p>
                    <p className="light-text suggestion" onClick={handleNewYork}>New York</p>
                    <p className="light-text suggestion" onClick={(handleCalifornia)}>California</p>

                    <div className="line my-5"></div>

                    <p>Weather Details</p>
                    <div className="row px-3">
                        <p className="light-text">Clouds</p>
                        <p className="ml-auto">{temperatureDetails.cloud}</p>
                    </div>
                    <div className="row px-3">
                        <p className="light-text">Humidity</p>
                        <p className="ml-auto">{temperatureDetails.humidity}</p>
                    </div>
                    <div className="row px-3">
                        <p className="light-text">Wind</p>
                        <p className="ml-auto">{temperatureDetails.wind_kph}</p>
                    </div>
                    <div className="row px-3">
                        <p className="light-text">Rain</p>
                        <p className="ml-auto">{temperatureDetails.precip_mm}</p>
                    </div>

                    <div className="line mt-3"></div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default WeatherCard