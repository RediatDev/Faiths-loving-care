import React from "react";
import "./ServiceForFront.css";
import AccessibleIcon from "@material-ui/icons/Accessible";
import AssistantIcon from "@material-ui/icons/Assistant";
import MemoryIcon from "@material-ui/icons/Memory";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import EnhancedEncryptionIcon from "@material-ui/icons/EnhancedEncryption";
import AirlineSeatFlatIcon from "@material-ui/icons/AirlineSeatFlat";
function ServicePasser() {
  return (
    <div className="container mainService">
      <h2 className="text-center my-4 serviceTypee">SERVICES</h2>
      <div className="d-flex justify-content-center">
          <div className="serviceBox pt-2">
        <a className="noblue" href="/services">
            <AccessibleIcon style={{ fontSize: 80 }} />
            <h2>Active Retirement </h2>
        </a>
          </div>
          <div className="serviceBox pt-2">
        <a className="noblue" href="/services">
            <AssistantIcon style={{ fontSize: 80 }} />
            <h2>Assisted Living</h2>
        </a>
          </div>
          <div className="serviceBox pt-2">
        <a className="noblue" href="/services">
            <MemoryIcon style={{ fontSize: 80 }} />
            <h2>Memory Care</h2>
        </a>
          </div>
      </div>
      <div className="d-flex justify-content-center ">
          <div className="serviceBox pt-2">
        <a className="noblue" href="/services">
            <AccountBalanceIcon style={{ fontSize: 80 }} />
            <h2>Respite Visits</h2>
        </a>
          </div>
          <div className="serviceBox pt-2">
        <a className="noblue" href="/services">
            <EnhancedEncryptionIcon style={{ fontSize: 80 }} />
            <h2>Medicaition Management</h2>
        </a>
          </div>
          <div className="serviceBox pt-2">
        <a className="noblue" href="/services">
            <AirlineSeatFlatIcon style={{ fontSize: 80 }} />
            <h2>Persona Care</h2>
        </a>
          </div>
      </div>
    </div>
  );
}
export default ServicePasser;