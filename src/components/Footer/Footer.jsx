import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaLinkedin,
  FaXing,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const iconStyle=
{
    marginRight:"10px",
    fontSize:"24px",
    color:"#fff",
    transition:"transform 0.3s ease-in-out",
}

const hoveredStyle=
{
    transform:"scale(1.2)",
}

const Footer = () => {
    return (
        <div className="flex justify-center lg:justify-start items-center">
        <Link to="#" style={iconStyle}>
          <FaFacebook />
        </Link>
        <Link to="#" style={iconStyle}>
          <FaTwitter/>
        </Link>
        <Link to="#" style={iconStyle}>
          <FaInstagram />
        </Link>
        <Link to="#" style={iconStyle}>
          <FaPinterest />
        </Link>
        <Link to="#" style={iconStyle}>
          <FaLinkedin />
        </Link>
        <Link to="#" style={iconStyle}>
          <FaXing />
        </Link>
        <Link to="#" style={iconStyle}>
          <AiOutlineMail />
        </Link>
      </div>
    );
  };
  
  export default Footer;
  
