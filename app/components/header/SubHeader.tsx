import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

export default function SubHeader() {
  return (
    <div className="navbar min-h-6 bg-base-200 px-12 lg:px-10 hidden lg:flex">
      <div className="flex-1 px-2 mx-2 justify-between">
        <span className="flex text-sm">
          <span className="text-sm font-bold items-center pr-1">Service Administatif :</span>
            <AiOutlineMail size={20} className="ml-4 mr-1"/>
          <a href="mailto:brahim.elabboubi@elzapower.com">
            Brahim El Abboubi
          </a>
          <AiOutlinePhone size={20} className="ml-4 mr-1"/>
          <a href="tel:+212661388195">+212 661 38 81 95</a>
        </span>
        <span className="flex text-sm">
          <span className="text-sm font-bold items-center pr-1">Service Technique :</span>
            <AiOutlineMail size={20} className="ml-4 mr-1"/>
          <a href="mailto:rachid.zahir@elzapower.com">
            Rachid Zahir
          </a>
          <AiOutlinePhone size={20} className="ml-4 mr-1"/>
          <a href="tel:+212661509553">+212 661 50 95 53</a>
        </span>
      </div>
    </div>
  );
}
// Nos coordonnées :
//  26, Route Bouskoura  Bd Med V, 3ème étage  26100 Berrechid.
// GSM +212 661 38 81 95    « Service Administratif  Mr Brahim EL ABBOUBI e-mail brahim.elabboubi@elzapower.com
// GSM +212 661 50 95 53  « Service technique Mr  Rachid ZAHIR e-mail  rachid.zahir@elzapower.com
// Fax +212 522 322191
