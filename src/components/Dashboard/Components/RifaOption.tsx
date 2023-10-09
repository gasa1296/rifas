import { getStatusColor } from "@/utils/getStatusColor";
import React, { useState } from "react";

import { FaRegEdit, FaInfoCircle, FaDownload } from "react-icons/fa";

export default function RifaOption({ option, index, actions }: any) {
  const { setShowEdit, setShowInfo } = actions;
  return (
    <tr
      className=" position-relative border "
      style={{ background: index % 2 === 0 ? "#F2F2F2" : "#fff" }}
    >
      <th scope="row ">
        <div
          className="position-absolute top-0 start-0 borderLateral-Rifas  "
          style={{ backgroundColor: getStatusColor(option.estado) }}
        ></div>
        <div
          style={{ width: "42px", height: "42px" }}
          className="  d-flex justify-content-center  align-items-center bg-white  icon ms-3 "
        >
          {option.icon}
        </div>
      </th>

      <td>
        <h6 className="text-cartera px-2 ">{option.titulo}</h6>
        <p className="parraf-cartera px-2">{option.informacion}</p>
      </td>
      <td style={{ width: "120px" }} className="number-dashboardRifas mt-3">
        {option.recaudado}
      </td>
      <td className="number-dashboardRifas px-3">{option.fecha}</td>
      <td className="number-dashboardRifas">{option.precio}</td>
      <td
        style={{ width: "", color: getStatusColor(option.estado) }}
        className="number-dashboardRifas"
      >
        {option.estado}
      </td>
      <td className="icon-dashboarRifas">
        <FaRegEdit
          onClick={() => setShowEdit(true)}
          color="#2161BD"
          size={18}
        />{" "}
        <FaInfoCircle
          onClick={() => setShowInfo(true)}
          color="#2161BD"
          size={18}
        />{" "}
        <FaDownload color="#2161BD" size={18} />
      </td>
    </tr>
  );
}
