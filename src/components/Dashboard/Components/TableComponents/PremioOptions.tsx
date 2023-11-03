import {
  getStatusColor,
  getStatusColorPrizes,
  getStatusValuePrizes,
} from "@/utils/getStatusColor";
import Image from "next/image";
import React from "react";
import { FaRegEdit } from "react-icons/fa";
import LogoRifas from "@/assets/img/logoRifas.svg";

export default function PremioOptions({ option, index, actions }: any) {
  const { setShowEdit, setShowInfo } = actions;

  return (
    <tr
      className="border position-relative text-left"
      style={{ background: index % 2 === 0 ? "#F2F2F2" : "#fff" }}
    >
      <th scope="row text-center ">
        <div
          className="position-absolute top-0 start-0 borderLateral-Rifas "
          style={{ backgroundColor: getStatusColorPrizes(option.status) }}
        ></div>
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

      <td>
        <h6 className="text-cartera px-2 ">{option.name}</h6>
        <p className="parraf-cartera px-2">{option.informacion}</p>
      </td>
      <td className="number-dashboardRifas ">
        {new Date(option.created_at).toLocaleDateString()}
      </td>
      <td className="number-dashboardRifas ">{option.value}</td>
      <td
        style={{ color: getStatusColorPrizes(option.status) }}
        className="number-dashboardRifas px-3"
      >
        {getStatusValuePrizes(option.status)}
      </td>
      <td className="icon-dashboarRifas ">
        <FaRegEdit
          onClick={() => {
            setShowEdit(option);
          }}
          color="#2161BD"
          size={18}
        />
      </td>
    </tr>
  );
}
