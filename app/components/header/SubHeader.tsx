import React from "react";
import { AiOutlineLinkedin, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

export default function SubHeader() {
  return (
    <div className="navbar min-h-6 bg-base-200 px-12 lg:px-10 hidden lg:flex">
      <div className="flex-1 px-2 mx-2 justify-between">
        <span className="flex text-sm">
          <span className="text-sm font-bold items-center pr-1">
            Service Administatif :
          </span>
          Brahim El Abboubi
          <a href="mailto:brahim.elabboubi@elzapower.com">
            <AiOutlineMail size={20} className="ml-1 mr-1" />
          </a>
          <a href="tel:+212661388195">
            <AiOutlinePhone size={20} className="ml-1 mr-1" />
          </a>
        </span>
        <span className="flex text-sm">
          <span className="text-sm font-bold items-center pr-1">
            Service Technique :
          </span>
          Rachid Zahir
          <a href="mailto:rachid.zahir@elzapower.com">
            <AiOutlineMail size={20} className="ml-1 mr-1" />
          </a>
          <a href="tel:+212661509553">
            <AiOutlinePhone size={20} className="ml-1 mr-1" />
          </a>
        </span>
        <span className="flex text-sm">
          <span className="text-sm font-bold items-center pr-1">Fax :</span>
          <a href="tel:+212522322191">
            <AiOutlinePhone size={20} className="ml-1 mr-1" />
          </a>
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
