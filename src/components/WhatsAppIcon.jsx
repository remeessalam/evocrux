import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { clientDetails } from "../constants";

const WhatsAppIcon = () => {
  return (
    <Link
      title="WhatsApp"
      rel="noreferrer"
      target="_blank"
      to={
        "https://api.whatsapp.com/send/?phone=%2B919110829254&text&type=phone_number&app_absent=0"
      }
      className="w-[4rem] z-30 hover:-translate-y-1 h-[4rem] cursor-pointer rounded-full border-4 border-white bg-[#25D366] hover:bg-primary fixed bottom-[3rem] animate-bounce hover:animate-none right-7 flex items-center justify-center transition-all duration-300"
    >
      <FaWhatsapp className="text-white text-4xl" />
    </Link>
  );
};

export default WhatsAppIcon;
