import React, { useState, useEffect } from "react";
import Image from "next/image";
import FondoProfile from "../../assets/img/Contacto-bg.jpg";

import { useAsociatonsStoreDashboard } from "@/store/zustand/DashboardStore";
import { optionScreen, optionsSidebar } from "./helper";

export default function Profile() {
  const [showScreen, setShowScreen] = useState<string>("1");
  const getAsociations = useAsociatonsStoreDashboard(
    (state) => state.getAsociations
  );

  const Component = optionScreen[showScreen];

  useEffect(() => {
    getAsociations();

    //eslint-disable-next-line
  }, []);

  return (
    <section className="mx-0 mx-md-4 position-relative    ">
      <div className="position-absolute top-0 overflow-hidden mx-auto mt-2">
        <Image
          src={FondoProfile}
          alt="fondo-Profile"
          className="w-100  fondo-Profile"
        />
      </div>
      <div className=" mx-0 mx-lg-5 mt-3 mt-lg-2 position-relative pt-4  text-center ">
        <h3 className="contacto w-100  mt-2 "> Mi Cuenta</h3>
      </div>

      <section className="row d-flex z-3 mt-5 pt-4 pt-md-0 container-Dashboard justify-content-between   m-0">
        <div className="col-12 col-lg-2 mt-3  container-sidebar px-3">
          {optionsSidebar.map((option, index) => (
            <div
              key={index}
              onClick={() => setShowScreen(option.value)}
              className="d-flex justify-content-start mx-auto   py-2   container-boxSidebar my-2 "
            >
              <p className="m-0 ms-2 "> {option.icon} </p>
              <p className=" m-0 ms-2">{option.label}</p>
            </div>
          ))}
        </div>
        <div className="col-12 col-lg-10 mt-2 mt-md-0   m-0">
          <div className="">
            <Component setShowScreen={setShowScreen} />
          </div>
        </div>
      </section>
    </section>
  );
}
