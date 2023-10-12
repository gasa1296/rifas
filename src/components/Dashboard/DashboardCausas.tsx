import React, { use, useEffect, useState } from "react";
import {
  FaBriefcase,
  FaImage,
  FaRegEdit,
  FaInfoCircle,
  FaDownload,
  FaHandHoldingHeart,
} from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import {
  AiOutlineMenu,
  AiFillDollarCircle,
  AiOutlineUser,
} from "react-icons/ai";
import { MdKeyboardArrowLeft } from "react-icons/md";
import ModalCausasDashboard from "../modal/ModalCausasDashboard";
import CausasOption from "./Components/CausasOption";
import DashboardTable from "./Components/DashboardTable";
import ModalEditCausa from "../modal/ModalEditCausa";
import ModalInformationCausa from "../modal/ModalInformationCausa";
import { useCreateCausesStoreDashboard } from "@/store/zustand/DashboardStore";
import { getCategories } from "@/store/slices/raffles";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
export default function DashboardCausas() {
  const dispatch = useDispatch();
  const [showEdit, setShowEdit] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showScreenCausa, setShowScreenCausa] = useState(false);
  const handleClose = () => setShowScreenCausa(false);

  const isLoading = useCreateCausesStoreDashboard((state) => state.isLoading);
  const error = useCreateCausesStoreDashboard((state) => state.error);
  const cause = useCreateCausesStoreDashboard((state) => state.cause);
  const pagination = useCreateCausesStoreDashboard((state) => state.pagination);
  const getCause = useCreateCausesStoreDashboard((state) => state.getCause);
  const router = useRouter();

  const head = [
    { label: "Imagen" },
    { label: "Titulo" },
    { label: "Fecha alta", width: "115px" },
    { label: "Monto" },
    { label: "Estado" },
    { label: "Acciones" },
  ];
  useEffect(() => {
    dispatch(getCategories({}) as any);
  }, []);

  return (
    <section className="">
      <ModalCausasDashboard
        showScreenCausa={showScreenCausa}
        setShowScreenCausa={setShowScreenCausa}
        handleClose={handleClose}
      />
      <ModalEditCausa show={showEdit} setShow={setShowEdit} />
      <ModalInformationCausa show={showInfo} setShow={setShowInfo} />

      <div className="background-dashboard  d-block d-lg-flex justify-content-between align-items-center p-3 col-12 ">
        <div className=" d-block d-md-flex mt-2 ">
          <p className="title-dashboard mx-2  ">APAC, A.C. /</p>
          <p className="title-dashboard  ">Causas</p>
        </div>
        <div className="d-flex justify-content-between align-items-center ">
          <button
            className=" p-2 me-3 button-dashboard m-0 "
            onClick={() => router.push("/dashboard/")}
          >
            <MdKeyboardArrowLeft />
            Mis asociaciones{" "}
          </button>
          <button
            onClick={() => {
              setShowScreenCausa(true);
            }}
            className="me-3 button-user m-0 p-2  "
          >
            <FaHandHoldingHeart size={20} className="mx-2" />
            Nueva causa
          </button>
        </div>
      </div>

      <DashboardTable
        loading={isLoading}
        head={head}
        options={cause}
        getRequest={(pagination: number) => {
          getCause(router.query.id as string, pagination);
        }}
        pagination={pagination}
        Component={CausasOption}
        actions={{ setShowEdit, setShowInfo }}
      />
    </section>
  );
}
