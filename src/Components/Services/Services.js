import React from "react";
import "./Services.css";
function Services() {
  return (
    <div className="maincontService  mt-4 ">
      <h2 className="text-center S">Services</h2>
      <div className="d-md-flex subAkafi ">
        <div className="sizing">
          <h3 className="text-center serviceTitle">Personalized Care</h3>
          <p className="spacing">
            After a thorough assessment, we strive to give personalized
            activities for your loved ones which can be done individually or in
            a group setting and can be active or passive. Faith’s Loving Care
            incorporates your loved one’s five senses.
          </p>
        </div>
        <div className="sizing">
          <h3 className="text-center serviceTitle">Medication Management</h3>
          <p className="spacing">
            Under the active supervision of our medical staff, we can administer
            and assist your loved ones with taking their prescribed medication.
          </p>
        </div>
      </div>
      <div className="d-md-flex subAkafi">
        <div className="sizing">
          <h3 className="text-center serviceTitle">Active Retirement</h3>
          <p className="spacing">
            Active retirement living gives more emphasis on the well-being of
            your health which can be mental or physical. To center
            your days around good health, tailored with your unique needs and
            enjoyment in mind.
          </p>
        </div>
        <div className="sizing">
          <h3 className="text-center serviceTitle">Memory Care</h3>
          <p className="spacing">
            Faith’s Loving Care has an active follow-up and supervision by
            senior staff, we are able to administer and assist your loved one by
            giving special care and attention to those in need of special care
            regarding their memory.
          </p>
        </div>
      </div>
      <div className="sizingg subAkafi2">
        <h3 className="text-center serviceTitle">Assisted Living</h3>
        <p className="spacing">
          In Faith’s Loving Care community, luxury living and modern amenities
          offer the convenience and fun you deserve. Along with plenty of
          friends to enjoy it all with you!
        </p>
      </div>
    </div>
  );
}
export default Services;
