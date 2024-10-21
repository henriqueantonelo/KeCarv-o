import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr]  my-10 mt-20 text-sm">
        <div>
          {/* <img src={assets.logo} className="mb-5 w-32 alt=" /> */}
          {/* <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea officia
          </p> */}
        </div>
        <div>
          <p className="text-xl font-medium mb-5">CONTATO</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>contact@gmail.com</li>
          </ul>
        </div>
        <p className="fixed right-5 bottom-5 text-gray-600">
          Pagamento na entrega.
        </p>
      </div>
    </div>
  );
};

export default Footer;
