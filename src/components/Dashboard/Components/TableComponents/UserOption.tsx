import { getStatusOptions } from "@/utils/getStatusOptions";
import Image from "next/image";
import React from "react";
import { FaRegEdit, FaTrash } from "react-icons/fa";
import LogoRifas from "@/assets/img/logoRifas.svg";

export default function UserOption({ option, index, actions }: any) {
  const { setShowEditUser, setShowScreenDelete } = actions;
  return (
    <tr
      className="table-secondary position-relative   text-left "
      style={{ background: index % 2 === 0 ? "#F2F2F2" : "#fff" }}
    >
      <th scope="row " className="  ">
        <div className="  d-flex justify-content-start align-items-center  icon ms-3 w-full">
          <Image
            width={50}
            height={50}
            src={option.image || LogoRifas}
            alt={option.name}
            className="rounded"
          />
        </div>
      </th>
      <td className="number-dashboardRifas ">{option.full_name}</td>
      <td className="number-dashboardRifas ">{option.email}</td>
      <td className="icon-dashboarRifas  ">
        <FaRegEdit
          onClick={() => {
            setShowEditUser(option);
          }}
          size={18}
          className="me-2"
          color="#2161BD"
        />
        <FaTrash
          onClick={() => {
            setShowScreenDelete(option);
          }}
          size={18}
          className=""
          color="#2161BD"
        />
      </td>
    </tr>
  );
}
