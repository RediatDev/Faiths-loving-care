import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import contactLogo from "../../image/logo/logo.png";
import { sendForm } from "emailjs-com";

const Contact = () => {
  const [show, setshow] = useState("disnon");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_7ar0n6p",
        "template_j7u5ol9",
        form.current,
        "z0K3WSyeJcgYbxSTm"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
    setshow("disnow");
  };
  useEffect(() => {
    setTimeout(() => {
      setshow("disnon");
    }, 3000);
  }, [show]);
  return (
    <div className="my-3 mainContact ">
      <h2 className="contactText text-center">Contact Us</h2>
      <div className="d-md-flex contactakafi d-sm-row  justify-content-center container">
        <div className="cont">
          <h3 className="text-center">Contact Us</h3>
          <form ref={form} onSubmit={sendEmail} className=" tohide container">
            <label>Name</label>
            <input type="text" name="user_name" required />
            <label>Email</label>
            <input type="text" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
            <h4 className={show}>Email sent! Thank you for your visit</h4>
          </form>
        </div>
        <div className="location text-center">
          <h3 className="located">We Are Located :</h3>
          <i>
            <h4 className="located pb-3">2507 167th PL SE Bothell WA 98012</h4>
          </i>
          {/* <Direction/> */}
          <a className="linkToMap" href="https://goo.gl/maps/mvGNzvU9zda3BtCb6">
            CLICK HERE TO GET GOOGLE MAP LOCATION
          </a>
          <a href="/home">
          <img className="imgContact" src={contactLogo} alt="contact page for adult family home" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
