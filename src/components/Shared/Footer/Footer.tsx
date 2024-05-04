import React from "react";
const currentYear = new Date().getFullYear();
const Footer = () => {
  return (
    <div className="mt-20 px-6  pb-8 border-gray-600 border-t">
      <div className="mt-6">
        <p className="font-semibold text-lg text-[#ffffff] text-center">
          ©Copyright {currentYear}, All Rights Reserved by Zamirul Kabir
        </p>
      </div>
    </div>
  );
};

export default Footer;
