import React, { useState, useEffect } from "react";
import { FaImage, FaUsers } from "react-icons/fa";
import { BsLink45Deg } from "react-icons/bs";
import { MdKeyboardArrowLeft } from "react-icons/md";

import ModalAddUser from "../../modal/ModalAddUser";
import ModalDeleteUser from "../../modal/ModalDeleteUser";
import ModalAsociarUser from "../../modal/ModalAsociarUser";
import ModalEditUser from "../../modal/ModalEditUser";
import DashboardTable from "../Components/DashboardTable";

import { useRouter } from "next/router";
import UserOption from "../Components/TableComponents/UserOption";
import { useAsociatonsStoreDashboard } from "@/store/zustand/DashboardStore";

export default function DasboardUsers() {
  const [showScreen, setShowScreen] = useState(false);
  const [showScreenDelete, setShowScreenDelete] = useState(false);
  const [showAsociarusuario, setShowAsociarUsuario] = useState(false);
  const [showEditUser, setShowEditUser] = useState(false);
  const handleClose = () => setShowScreen(false);
  const handleCloseDelete = () => setShowScreenDelete(false);
  const handleCloseAsociacion = () => setShowAsociarUsuario(false);
  const handleCloseEdit = () => setShowEditUser(false);
  const router = useRouter();
  const getUser = useAsociatonsStoreDashboard((state) => state.getUser);
  const user = useAsociatonsStoreDashboard((state) => state.user);
  const pagination = useAsociatonsStoreDashboard((state) => state.pagination);

  const options = [
    {
      icon: <FaImage size={30} className="mt-3 mx-2" />,
      nombre: "Jesús",
      apellido: "Beltran Parra",
      correo: "parra.beltran12@gmail.com",
    },
    {
      icon: <FaImage size={30} className="mt-3 mx-2" />,
      nombre: "Liliana",
      apellido: "Fernandez Estrada",
      correo: "liliana1fernandez@yahoo.com",
    },
    {
      icon: <FaImage size={30} className="mt-3 mx-2" />,
      nombre: "Cuautli",
      apellido: "Martinez Martinez",
      correo: "cuautli.martinez@gmail.com",
    },
  ];

  const head = [
    { label: "Imagen" },
    { label: "Nombre" },
    { label: "Apellidos" },
    { label: "Correo" },
    { label: "Acciones" },
  ];

  return (
    <section className="">
      <ModalAddUser
        setShowScreen={setShowScreen}
        showScreen={showScreen}
        handleClose={handleClose}
      />
      <ModalDeleteUser
        setShowScreenDelete={setShowScreenDelete}
        showScreenDelete={showScreenDelete}
        handleCloseDelete={handleCloseDelete}
      />
      <ModalAsociarUser
        showAsociarusuario={showAsociarusuario}
        setShowAsociarUsuario={setShowAsociarUsuario}
        handleCloseAsociacion={handleCloseAsociacion}
      />
      <ModalEditUser
        showEditUser={showEditUser}
        setShowEditUser={setShowEditUser}
        handleCloseEdit={handleCloseEdit}
      />
      <div className="background-dashboard  d-block d-lg-flex justify-content-between p-3  align-items-center  col-12 ">
        <div className=" d-block d-md-flex  mt-2">
          <p className="title-dashboard mx-2  ">APAC, A.C. /</p>
          <p className="title-dashboard ">Usuarios</p>
        </div>
        <div className="d-flex justify-content-between align-items-center ">
          <button
            className=" button-dashboard m-0 p-1  "
            onClick={() => router.push("/dashboard/")}
          >
            <MdKeyboardArrowLeft size={20} className="" />
            Mis asociaciones{" "}
          </button>

          <button
            onClick={() => {
              setShowAsociarUsuario(true);
            }}
            className="button-user  mx-2  p-1 "
          >
            <BsLink45Deg size={20} className="mx-1" />
            Asociar usuario{" "}
          </button>
          <button
            onClick={() => {
              setShowScreen(true);
            }}
            className=" button-user   p-1 "
          >
            <FaUsers className="mx-2" />
            Nuevo usuario{" "}
          </button>
        </div>
      </div>

      <DashboardTable
        title="Detalle de movimientos"
        disableFilter
        pagination={pagination}
        head={head}
        getRequest={(pagination: number) => {
          getUser(router.query.id as string, pagination);
        }}
        options={user}
        Component={UserOption}
        actions={{ setShowEditUser, setShowScreenDelete }}
      />
    </section>
  );
}
