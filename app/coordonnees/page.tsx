import React from "react";

export default function Page() {
  return (
    <div className="h-fit flex flex-col lg:flex-row">
      <div className=" pt-28 pb-20 mx-4 lg:mx-auto text-sm">
        <div className="flex flex-col justify-center items-center px-16 pb-10">
          <h1 className="text-4xl font-bold text-primary">Coordonnées</h1>
        </div>
        <div>
          <p className="flex flex-col lg:flex-row text-slate-800 pl-9 mb-8 items-center">
            <span className="text-2xl font-bold mr-2">Adresse: </span>26, Route
            Bouskoura Bd Med V, 3ème étage 26100 Berrechid.
          </p>
          <div className="flex flex-col lg:flex-row w-full">
            <div className="flex text-slate-800 pl-9 text-xl font-bold mr-2">
              Service Administratif:
            </div>
            <div className="m-auto lg:ml-auto">Mr.Brahim EL ABBOUBI</div>
            <span className="text-blue-500 mx-auto lg:ml-auto lg:mr-3 pt-1">
              +212 661 38 81 95
            </span>
          </div>
          <div className="flex flex-col lg:flex-row w-full">
            <div className="flex text-slate-800 pl-9 text-xl font-bold mr-2">
              Service technique:
            </div>
            <div className="m-auto lg:ml-auto">Mr.Rachid ZAHIR</div>
            <span className="text-blue-500 mx-auto lg:ml-auto lg:mr-3 pt-1">
              +212 661 50 95 53
            </span>
          </div>
          <div className="flex flex-col lg:flex-row w-full">
            <p className="text-slate-800 pl-9 text-xl font-bold mr-2">Fax:</p>
            <span className="text-blue-500 mx-auto lg:ml-auto lg:mr-3 pt-1">
              +212 522 32 21 91
            </span>
          </div>
        </div>
      </div>
      <div className=" pt-28 pb-20 mx-4 lg:mx-auto w-[45%]">
        <div className="flex flex-col justify-center items-center px-16 pb-10">
          <h1 className="text-4xl font-bold text-primary">Contactez-nous</h1>
        </div>
        <div className="w-full flex flex-col xl:flex-row ml-11 lg:ml-0">
          <div>
            <div className="w-full">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Nom</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-80"
                />
              </div>
            </div>
            <div>
              <div className="form-control w-80">
                <label className="label">
                  <span className="label-text">Votre Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-80"
                />
              </div>
            </div>
            <div>
              <div className="form-control w-80">
                <label className="label">
                  <span className="label-text">Sujet</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-80"
                />
              </div>
            </div>
          </div>
          <div className="form-control h-64 xl:ml-7 w-80">
            <label className="label">
              <span className="label-text">Your bio</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-full"
              placeholder="Bio"
            ></textarea>
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
