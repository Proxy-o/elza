import React from 'react';

const Coordonnees = () => {
    return (
        <div className=" pt-28 pb-20 mx-4 lg:mx-auto text-sm">
          <div className="flex flex-col justify-center items-center px-16 pb-10">
            <h1 className="text-4xl font-bold text-primary">Coordonnées</h1>
          </div>
          <div>
            <p className="flex flex-col lg:flex-row text-slate-800 pl-9 mb-8">
              <span className="text-2xl font-bold mr-2">Adresse: </span>26,
              Route Bouskoura Bd Med V, 3ème étage 26100 Berrechid.
            </p>
            <div className="flex flex-col lg:flex-row w-full">
              <div className="flex text-slate-800 pl-9 text-xl font-bold mr-2">
                Service Administratif:
              </div>
              <div className="lg:ml-auto pl-12">Mr.Brahim EL ABBOUBI</div>
              <span className="text-blue-500 lg:ml-auto lg:mr-3 pt-1 pl-12">
                +212 661 38 81 95
              </span>
            </div>
            <div className="flex flex-col lg:flex-row w-full mt-2">
              <div className="flex text-slate-800 pl-9 text-xl font-bold mr-2">
                Service technique:
              </div>
              <div className="pl-12 lg:ml-auto">Mr.Rachid ZAHIR</div>
              <span className="text-blue-500 lg:ml-auto lg:mr-3 pt-1 pl-12">
                +212 661 50 95 53
              </span>
            </div>
            <div className="flex flex-col lg:flex-row w-full mt-2">
              <p className="text-slate-800 pl-9 text-xl font-bold mr-2">Fax:</p>
              <span className="text-blue-500 lg:ml-auto lg:mr-3 pt-1 pl-12">
                +212 522 32 21 91
              </span>
            </div>
          </div>
        </div>
    )
}

export default Coordonnees