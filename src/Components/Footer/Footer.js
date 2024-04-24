import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer-link pb-2">
      <div className="container d-sm-flex-row justify-content-between d-md-flex ">
        <div>
          <h3 className="my-3">Main Office</h3>
          <p className="pb-2">Location : 2507 167th PL SE Bothell WA 98012</p>
          <p>Contact : +1 (206) 697-8330</p>
        </div>
        <div className="pt-5" >
          <p className="py-2">House Number : 425-489-8201</p>
          <p >Fax: 425-483-3949</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
