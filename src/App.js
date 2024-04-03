import React from "react";
import "./App.css";
import Header from "./Header";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
const App = () => {
  return (
    <div className="app ">
      <Header></Header>
      <Banner></Banner>
      <Row title="Popular Movies" fetchUrl={requests.discover_popular}></Row>
      <Row title="Kids Movies" fetchUrl={requests.discover_kids}></Row>
      <Row title="Top Rated Movies" fetchUrl={requests.discover_drama}></Row>
    </div>
  );
};

export default App;
