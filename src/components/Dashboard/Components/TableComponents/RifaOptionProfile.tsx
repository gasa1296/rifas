import { getStatusColor, getStatusValue } from "@/utils/getStatusColor";
import Image from "next/image";
import React from "react";
import LogoRifas from "@/assets/img/logoRifas.svg";

import { FaRegEdit } from "react-icons/fa";

export default function RifaOptionProfile({ option, index, actions }: any) {
  const { setShowEdit, setShowInfo } = actions;

  console.log("TEst", option);
  return (
    <tr
      className=" position-relative border text-center "
      style={{ background: index % 2 === 0 ? "#F2F2F2" : "#fff" }}
    >
      <th scope="row ">
        <div
          className="position-absolute top-0 start-0 borderLateral-Rifas  "
          style={{ backgroundColor: getStatusColor(option.estado) }}
        ></div>
        <div className="  d-flex justify-content-center  align-items-center  icon ms-3 w-full">
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
        <p className="parraf-cartera px-2">{option.short_description}</p>
      </td>
      <td style={{ width: "120px" }} className="number-dashboardRifas mt-3">
        {option.tickets.length * option.ticket_number}
      </td>
      <td className="number-dashboardRifas px-3">
        {" "}
        {new Date(option.start_date).toLocaleDateString()}
      </td>
      <td className="number-dashboardRifas">{option.ticket_price}</td>
      <td
        style={{ width: "", color: getStatusColor(option.status) }}
        className="number-dashboardRifas"
      >
        {getStatusValue(option.status)}
      </td>
    </tr>
  );
}
