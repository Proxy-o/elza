import React from "react";

const ContactUs = () => {
    return (
        <div className=" pt-28 pb-20 mx-4 lg:mx-auto text-sm">
          <div className="flex flex-col justify-center items-center px-16 pb-10">
            <h1 className="text-4xl font-bold text-primary">Contactez-nous</h1>
          </div>
          <div className="w-full flex flex-col xl:flex-row ml-11 lg:ml-0 h-full">
            <div>
              <div className="w-full">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Nom</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-80"
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
                    className="input input-bordered input-primary w-80"
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
                    className="input input-bordered input-primary w-80"
                  />
                </div>
              </div>
            </div>
            <div className="form-control h-64 xl:ml-7 w-80">
              <label className="label">
                <span className="label-text">Your bio</span>
              </label>
              <textarea
                className="textarea textarea-bordered textarea-primary h-full resize-none"
                placeholder="Bio"
              ></textarea>
            </div>
          </div>
        </div>
    )
}

export default ContactUs