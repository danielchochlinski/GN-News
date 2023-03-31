import React from "react";
import "./App.scss";
import MainTemplate from "./template/MainTemplate";
import MainView from "./features/Main/MainView";
import { Route, Routes } from "react-router-dom";
import CountryView from "./features/Country/CountryView";

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
