import React, { useState, useEffect } from "react";
import BannerBackground from "../assets/background.jpg";
import BannerImage from "../assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { useAuth } from "../contexts/authContext";
import DailyUniverse from "./DailyUniverse";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const NasaKey = import.meta.env.VITE_NASA_API_KEY;
  const [data, setData] = useState(null);
  console.log(NasaKey);
  useEffect(() => {
    async function fetchAPiData() {
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NasaKey}`;
      const today = new Date().toDateString();
      const localKey = `Nasa-${today}`;
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        console.log("local data", apiData);
        setData(apiData);
        return;
      }
      localStorage.clear();
      try {
        const response = await fetch(url);
        const apiData = await response.json();
        localStorage.setItem(localKey, JSON.stringify(apiData));
        console.log("Api data", apiData);
        setData(apiData);
        console.log("api data", data);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchAPiData();
  }, []);

  const { currentUser } = useAuth();
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            Cosmic Explorers of Infinite Possibilities
          </h1>
          <p className="primary-text">
            Welcome to COSO, where we traverse the boundless expanse of the
            cosmos, unlocking the mysteries of the universe.
          </p>
          <button
            onClick={() => navigate("/Mars")}
            className="secondary-button"
          >
            Explore Now <FiArrowRight />{" "}
          </button>
        </div>
      </div>
      {data && <DailyUniverse data={data} />}
    </div>
  );
};

export default Home;
