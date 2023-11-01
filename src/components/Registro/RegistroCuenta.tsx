import React, { useEffect } from "react";
import camara from "@/assets/img/camara.png";
import FormGenerator from "../FormGenerator";
import { CreateAsociacion, selectAuthState } from "@/store/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { registerFields } from "./helper";
import { useRouter } from "next/router";
export default function RegistroCuenta({ nextStep, backStep }: any) {
  const { loading, profile } = useSelector(selectAuthState);
  const [success, setSuccess] = React.useState(false);
  const [pending, setPending] = React.useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const submitData = async (data: any) => {
    const { payload } = await dispatch(CreateAsociacion(data) as any);
    if (payload) setSuccess(true);
  };

  useEffect(() => {
    if (profile?.hasAssociation) {
      setPending(true);
    }
  }, [profile]);
  if (success || pending)
    return (
      <div className="row mt-5 ">
        <div className="col-12 col-lg-7 mx-auto text-center">
          <h3 className="tittle-registroSucessfull">
            ¡Casi estamos listos para rifarnos!
          </h3>

          <div className=" my-5 p-5 pb-2 text-center shadow col-11 col-lg-8 mx-auto">
            <h3 className="text-secondary pt-5" style={{ fontSize: "21px" }}>
              En un plazo máximo de 24 horas, revisaremos los datos
              proporcionados, y estarás listo para rifarte.
            </h3>

            <h3 className="text-secondary pt-5" style={{ fontSize: "21px" }}>
              Agradecemos tu paciencia, pronto estaremos en contacto por correo
              electrónico.
            </h3>
            <button
              onClick={() => router.push("/rifas")}
              className="btn  btn-outline-pink w-100 mt-5"
            >
              Participar en una Rifa
            </button>

            <button
              onClick={() => router.push("/donaciones")}
              className="btn btn-pink w-100 mt-3"
            >
              Donar un premio
            </button>
            <p onClick={() => router.push("/")} className="volver-inicio mt-5 ">
              Prefiero volver al inicio
            </p>
          </div>
        </div>
      </div>
    );

  return (
    <section className="text-secondary row  ">
      <div className="col-md-8  col-12 mx-auto mt-5">
        <h3 className="tittle-registroSucessfull text-center">
          Ayúdanos a completar los datos de tu asociación.
        </h3>
        <p className="text-center fw-light  fs-5 mt-3 mx-md-5">
          Comenzamos el camino para rifarnos. Es importante verificar la
          información de tu asociación, por lo que te pedimos que llenes con
          cuidado este formulario.
        </p>
      </div>

      <div
        className="bg-white pt-3 my-3 text-secondary border  shadow rounded mx-auto px-5"
        style={{ maxWidth: "600px", width: "100%" }}
      >
        <FormGenerator
          buttonText="Registrar"
          submitData={submitData}
          fields={registerFields}
          loading={loading}
        />
      </div>

      <div className=" text-dark text-center ">
        <button
          className=" my-2 w-50 btn btn-outline-secondary"
          type="button"
          onClick={() => router.push("/")}
        >
          ir al inicio
        </button>
      </div>
    </section>
  );
}
