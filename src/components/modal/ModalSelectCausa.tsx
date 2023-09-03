import React, { useEffect } from "react";
import LogoRifas from "@/assets/img/logoRifas.svg";
import Image from "next/image";
import { useCausesStore } from "@/store/zustand/CausesStore";
import { useInView } from "react-intersection-observer";

export default function ModalSelectCausa({ handleSubmit }: any) {
  const { isLoading, error, causes, getCauses, paginacion } = useCausesStore();

  const [ref, inView] = useInView({
    triggerOnce: false, // Cambia a false si necesitas que se dispare más de una vez
  });

  useEffect(() => {
    if (inView) {
      paginacion && getCauses(paginacion);
    }

    //eslint-disable-next-line
  }, [inView]);

  return (
    <section className="">
      <div className="">
        {!!isLoading && <p className="m-0">Cargando...</p>}
        {!!error && (
          <p className="m-0 text-danger ">Error al cargar las notificaciones</p>
        )}
        {!isLoading &&
          !error &&
          causes.map((causes: any, index: number) => (
            <div key={index} className="d-flex my-4 px-3 row">
              <div className="col-10 col-sm-4 p-0 ">
                <Image
                  src={LogoRifas}
                  alt="fondo"
                  className="w-100 h-100  rounded "
                />
                {/*  {causes.image} */}
              </div>
              <div className="ms-0 ms-lg-3 col-8 col-sm-7  mt-3 mt-lg-0">
                <h5> {causes.name}</h5>
                <p className="d-flex px-1 ">
                  {" "}
                  {causes.description}{" "}
                  <p className="fw-semibold">{/* {causes.prize}  */}</p>{" "}
                </p>
                <button
                  onClick={() => {
                    handleSubmit({
                      type: "cause",
                      ...causes,
                    });
                  }}
                  className="btn btn-pink"
                >
                  Cambiar Causa
                </button>
              </div>
            </div>
          ))}

        <div ref={ref} />
      </div>
    </section>
  );
}
