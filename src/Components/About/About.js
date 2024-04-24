import React from "react";
import "./About.css";
function About() {
  return (
    <div className="container mainAbout">
      <i><h3 className=" titles py-1">About Us</h3></i>
      <i><h5 className="titles py-2 ">Our Vision</h5></i>
      <p className="forJustify tsehufe">
        At Faith's Adult Family Home, we aim to enhance the
        quality of life of our residents through supportive assisted living
        services, and a creative balance of physical wellness programs and
        dynamic social interaction.
      </p>
      <i><h5 className="titles">Our Commitment</h5></i>
      <p className="forJustify tsehufe">
      We are dedicated to providing a comfortable, friendly, and loving
      environment with expert quality care. We believe in providing activities
      and opportunities for our residents to maintain a happy and healthy
      lifestyle. We have healthcare experts behind the planning of activities
      and care plans to guarantee the satisfaction of our elders.
      </p>
      <i><h5 className="titles">Our Service Principles</h5></i>
      <p className="forJustify tsehufe">
      Committed to our vision, we abide by the following principles:
      </p>
      <ul className="tsehufe">
          <li>Celebrating the individuality of each of our residents</li>
          <li>Respecting their right to privacy and independence</li>
          <li>Preserving the dignity of each person in our care</li>
          <li>Involving family and loved ones in care planning and implementation</li>
      </ul>
      <i>
      <h5 className="titles tsehufe pt-3 forJustify">
       If you want to learn more about us, come visit us at 2507 167th PL SE Bothell WA 98012 or call us at +1 (206) 697-8330. We'll be more than happy to show you around.
       </h5>
        </i> 
    </div>
  );
}

export default About;
