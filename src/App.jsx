import React, { createContext, useState, useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";
import {updateObject} from "./utils/helper"

const InfoContext = createContext();
const OnlineContext = createContext();

function Leaf() {
  const info = useContext(InfoContext);
  const { battery, online } = info;
  return (
    <>
      <h1>Battery: {battery}</h1>
      {!online ? "网络正常" : "网络断开"}
    </>
  );
}

function Middle() {
  return <Leaf />;
}

function App() {
  const [info, setInfo] = useState({ battery: 60, online: false });
  const addBattery = () => {
    setInfo(Object.assign({},info,{battery:info.battery + 1}));
  };
  const checkNet = () => {
    setInfo(Object.assign({},info,{online: !info.online}));
  };
  return (
    <div className="App">
      <InfoContext.Provider value={info}>
        <button onClick={addBattery}>充电</button>
        <button onClick={checkNet}>切换网络</button>
        <Middle></Middle>
      </InfoContext.Provider>
    </div>
  );
}

export default App;
