import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import Card from "../components/Card";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <Card />
    </div>
  );
};

export default Home;
