import React from "react";
import "./FrontText.css";
import family1 from "../../image/fromUnsplash/family1.jpg";
import family2 from "../../image/fromUnsplash/wecare.jpg";

function FrontText() {
  return (
    <div className="my-3 frontTextContainer">
      <h1 className="text-center my-3 faith">Welcome Home</h1>
      <div className="d-sm-column d-md-flex">
        <div className="">
          <p className="frontTextDetail">
            At Faith's Loving Care, our community’s culture is built on helping
            our residents find their happiest, healthiest selves. No matter
            where you are in life’s journey, home is meant to be a place of
            comfort and enjoyment. Our neighborhood offers a beautiful blend of
            privacy, safety, security and community to create a warm and
            familiar environment.
          </p>
          <h1 className="d-none d-md-block feels  text-center ">Feels Like Home</h1>
        </div>
        <div>
          <div className=" d-none d-md-none d-xl-block mx-3 frontP">
            <img className="frontPic" src={family1} alt="adult family home"></img>
          </div>
          <div className="container">
            <img
              src={family2}
              alt="adult family home"
              className=" family2 d-sm-block d-md-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontText;
