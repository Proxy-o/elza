import React from "react";

export default function Page() {
  return (
    <div>
      <div className="grid grid-cols-1 pt-28 pb-20">
        <div className="flex flex-col justify-start items-start px-16">
          <h1 className="text-4xl font-bold text-slate-800 ">Coordonnées</h1>
            <p className="text-slate-800 text-lg pl-9">
                Adresse: 26, Route Bouskoura  Bd Med V, 3ème étage  26100 Berrechid.
            </p>
            <div className="flex-col lg:flex w-full">
                <p className="text-slate-800 text-lg pl-9">
                    Service Administratif:  Mr Brahim EL ABBOUBI
                </p>
                <span className="text-blue-500 ml-auto mr-[40%]">+212 661 38 81 95</span>
            </div>
            <div className="flex-col lg:flex w-full">
                <p className="text-slate-800 text-lg pl-9">
                Service technique Mr Rachid ZAHIR e-mail
                </p>
               <span className="text-blue-500 ml-auto mr-[40%]">+212 661 50 95 53</span>
            </div>
            <div className="flex-col lg:flex w-full">
                <p className="text-slate-800 text-lg pl-9">
                    Fax: 
                </p>
                <span className="text-blue-500 ml-auto mr-[40%]">+212 522 32 21 91</span>
            </div>
        </div>
      </div>
    </div>
  );
}
// 26, Route Bouskoura  Bd Med V, 3ème étage  26100 Berrechid.
// GSM +212 661 38 81 95    « Service Administratif  Mr Brahim EL ABBOUBI e-mail brahim.elabboubi@elzapower.com 
// GSM +212 661 50  95 53  « Service technique Mr  Rachid ZAHIR e-mail  rachid.zahir@elzapower.com
// Fax +212 522 322191