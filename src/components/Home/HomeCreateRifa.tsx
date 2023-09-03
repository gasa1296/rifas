import React from "react";
import Image from "next/image";
import fondo from "@/assets/img/Comienza-la-historia.png";
import { useRouter } from "next/router";

export default function HomeCreateRifa() {
  const router = useRouter();

  return (
    <div className=" mx-3 mx-lg-5">
      <section
        className="row m-0 d-flex justify-align-content-between"
        style={{ marginBottom: "120px" }}
      >
        <div className="col-12 col-lg-4  text-secondary  ">
          <h5 className=" home-title-createRaffle">
            ¡Aqui comienza la esperanza!
          </h5>
          <p className="home-subtitle-create">
            Sigue las instrucciones para crear tu rifa
          </p>
          <p className=" home-sub-title-create">paso 1</p>
          <p className="fs-6">
            Registrate contesta el formulario. Agrega el premio que ganaran los
            participantes.¿No cuentas con un premio?, puedes elegir entre los
            donados por nuestros benefactores
          </p>
          <p>
            De acuerdo al premio elegido nuestra plataforma cuenta con una
            calculadores que te indicara la cantidad y precios de los boletos
            que necesitas para recaudar el monto
          </p>
          <p>
            Una vez enviada sera revisada por nuestro equipo para hacer
            recomendaciones o si esta lista para publicarse
          </p>
          <a
            href="#"
            className="btn fs-6 btn-pink w-100 fw-normal mt-5 mx-auto" onClick={() => router.push("/rifas/crear_rifas")}
          >
            Iniciar Rifa
          </a>
        </div>
        <div className="col-12 col-lg-7 mt-4 mt-lg-1  ">
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
