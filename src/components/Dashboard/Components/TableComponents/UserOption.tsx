import { getStatusOptions } from "@/utils/getStatusOptions";
import React from "react";
import { FaRegEdit, FaTrash } from "react-icons/fa";

export default function UserOption({ option, index, actions }: any) {
  const { setShowEditUser, setShowScreenDelete } = actions;
  return (
    <tr
      className="table-secondary position-relative border  "
      style={{ background: index % 2 === 0 ? "#F2F2F2" : "#fff" }}
    >
      <th scope="row " className="  ">
        <div
          className="position-absolute top-0 start-0 borderLateral-Rifas "
          style={{
            backgroundColor: getStatusOptions(option.estado),
          }}
        ></div>
        <div
          style={{ width: "42px", height: "42px" }}
          className="  d-flex justify-content-center  align-items-center bg-white  icon ms-3 "
        >
          {option.icon}
        </div>
      </th>
      <td className="number-dashboardRifas ">{option.nombre}</td>
      <td className="number-dashboardRifas ">{option.apellido}</td>
      <td className="number-dashboardRifas ">{option.correo}</td>
      <td className="icon-dashboarRifas ">
        <FaRegEdit
          onClick={() => {
            setShowEditUser(true);
          }}
          color="#2161BD"
          size={18}
          className="mx-1"
        />{" "}
        <FaTrash
          onClick={() => {
            setShowScreenDelete(true);
          }}
          size={18}
          className=""
          color="#2161BD"
        />
      </td>
    </tr>
  );
}
