import React, { useEffect, useRef, useState } from "react";

import LogoRifas from "@/assets/img/logoRifas.svg";
import Image from "next/image";

import { usePremioStore } from "@/store/zustand/PremioStore";
import { parseNumber } from "@/utils/ParseNumber";
import { useInView } from "react-intersection-observer";

export default function ModalSelectPremio({ handleSubmit }: any) {
  const {
    isLoading,
    error,
    premio,
    getPremio,
    paginacion,
    setFilterPremios,
    filterPremios,
  } = usePremioStore();
  const [search, setSearch] = useState("");
  const [ref, inView] = useInView({
    triggerOnce: false, // Cambia a false si necesitas que se dispare más de una vez
  });

  useEffect(() => {
    if (inView) {
      paginacion && getPremio(paginacion);
    }

    //eslint-disable-next-line
  }, [inView]);
  const allPremios = search === "" ? premio : filterPremios;

  return (
    <section>
      <div className="d-flex  mt-3 mt-lg-4 row">
        {!!isLoading && !premio.length && <p className="m-0">Cargando...</p>}
        {!!error && (
          <p className="m-0 text-danger ">Error al cargar las notificaciones</p>
        )}
        <input
          placeholder="Buscar causa"
          type="text"
          value={search}
          onChange={(e) => {
            setFilterPremios(e.target.value);
            setSearch(e.target.value);
          }}
          className={`w-100 form-control my-2 fs-5 m-0 ${
            error && "border-danger "
          }`}
        />
        {!error &&
          allPremios.map((premio: any, index: number) => (
            <div key={index} className="d-flex row mt-3 mt-lg-4 ">
              <div className="col-10 col-sm-4  mx-auto mx-sm-0    p-0 ">
                <Image
                  src={premio.image || LogoRifas}
                  alt="fondo"
                  className="w-100 h-100  rounded "
                  width={100}
                  height={100}
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

        <div ref={ref} />
      </div>
    </section>
  );
}
