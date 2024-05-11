import React, { useEffect, useState } from "react";
import ProfilePic from "../../public/mars.png";

const DailyUniverse = (props) => {
  const { data } = props;
  return (
    <div className="daily-Pic-section">
      <>
        <div className="work-section-top">{/* Your content here */}</div>
        <div className="testimonial-section-bottom">
          <h2
            className="primary-subheading"
            style={{ color: "black", marginBottom: "2rem" }}
          >
            {data.title || "Title"}
          </h2>
          <img src={data.hdurl} alt={data.title || "bg-img"} />
          <p>{data.explanation} </p>
          <p className="primary-subheading">{data.date}</p>
        </div>
      </>
    </div>
  );
};

export default DailyUniverse;
