import React from "react";
import {
  AiOutlineMenu,
  AiFillDollarCircle,
  AiOutlineUser,
} from "react-icons/ai";
import {
  FaHandHoldingHeart,
  FaGift,
  FaBriefcase,
  FaUsers,
} from "react-icons/fa";
import { BsWindowSidebar } from "react-icons/bs";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/router";
export default function ProfileResume({ setShowScreen }: any) {
  const router = useRouter();

  return (
    <section className="">
      <div className="background-dashboard  d-block d-lg-flex justify-content-between align-items-center py-3 col-12">
        <div className=" d-block d-md-flex ">
          <p className="title-dashboard ms-3 ">Resumen</p>
        </div>
      </div>
      <div className="row m-0 d-flex flex-wrap mt-3 background-dashboard  py-2">
        <div className="container-resumen col-9 col-md-3 mx-4 my-2 text-center py-3">
          <AiFillDollarCircle color="#784B5F" size={30} />
          <p className="title-resumen m-0">Rifas</p>
          <p className="informationRaffle-resumen m-0 mb-2 ">
            73 rifas creadas
          </p>
          <button
            onClick={() => {
              setShowScreen(2);
            }}
            className="button-Resumen p-2 px-3 m-0"
          >
            Ver Rifas
          </button>
        </div>
        <div className="container-resumen col-9 col-md-3 mx-4 my-2 text-center py-3">
          <FaGift color="#784B5F" size={30} />
          <p className="title-resumen m-0">Premios</p>
          <p className="informationRaffle-resumen m-0 mb-2 ">
            62 Premios creados
          </p>
          <button
            onClick={() => {
              setShowScreen(3);
            }}
            className="button-Resumen p-2 px-3 m-0"
          >
            Ver Premios
          </button>
        </div>
        <div className="container-resumen col-9 col-md-3 mx-4 my-2 text-center py-3">
          <FaBriefcase color="#784B5F" size={30} />
          <p className="title-resumen m-0">Cartera</p>
          <button
            onClick={() => {
              setShowScreen(4);
            }}
            className="button-Resumen p-2 px-3 m-0"
          >
            Ver Cartera
          </button>
        </div>

        <div className="container-resumen col-9 col-md-3 mx-4 my-2 text-center py-3">
          <AiOutlineUser color="#784B5F" size={30} />
          <p className="title-resumen m-0">Mi perfil</p>

          <button
            onClick={() => {
              setShowScreen(5);
            }}
            className="button-Resumen p-2 px-3 m-0"
          >
            Ver perfil
          </button>
        </div>
      </div>
    </section>
  );
}
