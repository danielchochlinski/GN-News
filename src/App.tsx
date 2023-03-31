import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { useState } from "react";
import MainTemplate from "./template/MainTemplate";
import MainView from "./features/Main/MainView";
import { Route, Routes } from "react-router-dom";
import CountryView from "./features/Country/CountryView";

const mock = ["1", "2"];
function App() {
  return (
    <div className="App">
      <MainTemplate>
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path="/hello" element={<div>hello</div>} />
          <Route path="news/country/:id" element={<CountryView />} />
        </Routes>
      </MainTemplate>
    </div>
  );
}

export default App;
