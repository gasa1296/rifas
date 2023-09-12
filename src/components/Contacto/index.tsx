import React, { useState } from "react";
import FormGenerator from "../FormGenerator";
import { Field } from "@/types/Component/FormGenerator";
import { useDispatch, useSelector } from "react-redux";
import { Register, selectAuthState } from "@/store/slices/auth";
import { Profile } from "@/types/Model/Profile";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import logo from "../../assets/img/logo-contacto.png";
import FondoContacto from "../../assets/img/Contacto-bg.jpg";
import Image from "next/image";


export default function Contacto() {
  const { loading } = useSelector(selectAuthState);
  const [sucess, setSucces] = useState(false);
  const dispatch = useDispatch();
  const submitData = async (data: Profile) => {
    const { payload } = await dispatch(Register(data) as any);

    if (payload) {
      setSucces(true);
    }
  };

  const fields: Field[] = [
    {
      label: "Nombre completo",
      name: "name_Contacto",
      required: true,
      type: "text",
    },
    {
      label: "Correo electronico",
      name: "email_contact",
      required: true,
      type: "text",
    },
    { label: "Empresa (Opcional)", name: "company_contact0", type: "text" },

    {
      label: "Mensaje",
      name: "mesagge",
      required: true,
      type: "textarea",
    },
    {
      label: "Confirma que no eres un robot",
      name: "captchap",
      required: true,
      type: "captchap",
    },
  ];
  return (
    <div className="mx-4 position-relative   ">
      <div className="position-absolute top-0 overflow-hidden fondoContacto ">
        <Image src={FondoContacto} alt="fondo-contacto" className="w-100 h-100 " />
      </div>
      <div className=" mx-0 mx-lg-5 mt-3 mt-lg-3 position-relative pt-3  text-center ">
        <h3 className="contacto mx-auto ">Contacto</h3>
      </div>
      <div className="row m-0 d-flex justify-content-center mt-3 mt-lg-5 pt-3  ">
        <div className="col-12 col-lg-5  shadow rounded p-4">
          <FormGenerator
            buttonText="Contactanos"
            submitData={submitData}
            fields={fields}
            loading={loading}
          />
        </div>
        <div className=" col-12 col-lg-4 mt-5 mt-lg-0 text-center text-lg-start  ms-0 ms-lg-5">
          <h2 className="help-contacto">¿Necesitas ayuda?</h2>
          <h2 className="help-contacto">Contáctanos</h2>
          <p className="informacion mt-0 mt-lg-4">
            <MdEmail color="#C3286D" className="me-3" />
            contact@info.com
          </p>
          <p className="informacion">
            <BsFillTelephoneFill color="#C3286D" className="me-3" />
            929-242-6868
          </p>
          <Image src={logo} alt="logo-Contacto" className="mt-4" />
        </div>
      </div>
    </div>
  );
}
