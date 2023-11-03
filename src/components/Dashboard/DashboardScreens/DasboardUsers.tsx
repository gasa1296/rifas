import React, { useState } from "react";
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
import HeaderDashboard from "../Components/HeaderDashboard";

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

  const head = [
    { label: "Imagen" },
    { label: "Nombre" },
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

      <HeaderDashboard
        screen="Usuarios"
        renderButton={() => (
          <>
            {" "}
            <button
              onClick={() => {
                setShowAsociarUsuario(true);
              }}
              className="button-user  mx-2  p-1 px-2 "
            >
              <BsLink45Deg size={20} className="mx-1" />
              Asociar usuario{" "}
            </button>
            <button
              onClick={() => {
                setShowScreen(true);
              }}
              className=" button-user   p-1 px-2 "
            >
              <FaUsers className="mx-2" />
              Nuevo usuario{" "}
            </button>
          </>
        )}
      />

      <DashboardTable
        title="Detalle de movimientos"
        disableFilter
        pagination={pagination}
        head={head}
        getRequest={(pagination: number) => {
          console.log("TEst asdads");
          getUser(router.query.id as string, pagination);
        }}
        options={user}
        Component={UserOption}
        actions={{ setShowEditUser, setShowScreenDelete }}
      />
    </section>
  );
}
