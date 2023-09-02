import React from "react";

import LogoRifas from "@/assets/img/logoRifas.svg";
import Image from "next/image";
import { useNotificationStore } from "@/store/zustand/NotificationStore";
import { usePremioStore } from "@/store/zustand/PremioStore";
import { parseNumber } from "@/utils/ParseNumber";

export default function ModalSelectPremio({ handleSubmit }: any) {
  const isLoading = useNotificationStore((state) => state.isLoading);
  const error = useNotificationStore((state) => state.error);
  const premio = usePremioStore((state) => state.premio);

  return (
    <section className=" ">
      <div className="d-flex  mt-3 mt-lg-4 row">
        {!!isLoading && <p className="m-0">Cargando...</p>}
        {!!error && (
          <p className="m-0 text-danger ">Error al cargar las notificaciones</p>
        )}
        {!isLoading &&
          !error &&
          premio.map((premio: any, index: number) => (
            <div key={index} className="d-flex row mt-3 mt-lg-4 ">
              <div className="col-10 col-sm-4  mx-auto mx-sm-0    p-0 ">
                <Image
                  src={premio.image || LogoRifas}
                  alt="fondo"
                  className="w-100 h-100  rounded "
                />
              </div>
              <div className="ms-3 ms-lg-3 col-8 col-sm-7  mx-auto  mt-3 mt-lg-0">
                <h5> {premio.name}</h5>
                <p className="m-0"> {premio.description}</p>
                <p className="d-flex">
                  Valor del premio:
                  <p className="fw-semibold  ms-2">
                    $ {parseNumber(Number(premio.value))}
                  </p>
                </p>
                <button
                  onClick={() => {
                    handleSubmit({
                      type: "prize",
                      ...premio,
                    });
                  }}
                  className="btn btn-pink"
                >
                  Cambiar premio
                </button>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
