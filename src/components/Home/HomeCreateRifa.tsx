import React from "react";
import Image from "next/image";
import fondo from "@/assets/img/Comienza-la-historia.png";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectAuthState } from "@/store/slices/auth";
import HomeCreateRifaStep from "./HomeCreateRifaSteps";

export default function HomeCreateRifa() {
  const router = useRouter();

  const { authenticated } = useSelector(selectAuthState);

  const route = authenticated ? "/rifas/crear_rifas" : "/registro";

  return (
    <div className=" mx-3 mx-lg-0 mt-5">
      <section
        className="row m-0 d-flex justify-content-between"
        style={{ marginBottom: "120px" }}
      >
        <div className="col-12 col-lg-5  text-secondary p-0 ">
          <h5 className=" home-title-createRaffle">
            ¡Aqui comienza la esperanza!
          </h5>
          <p className="home-subtitle-create">
            Sigue las instrucciones para crear tu rifa
          </p>
          <HomeCreateRifaStep />
          <button
            className="btn fs-6 btn-pink w-50 fw-normal  mx-auto"
            onClick={() => router.push(route)}
          >
            Iniciar Rifa
          </button>
        </div>
        <div className="col-12 col-lg-6 mt-4 mt-lg-1 p-0  ">
          <div className="col-md-12">
            <Image
              src={fondo}
              alt="fondo"
              className="w-100 h-100 d-block mx-auto "
            />
          </div>
        </div>
      </section>
    </div>
  );
}
