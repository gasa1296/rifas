import { getStatusOptions } from "@/utils/getStatusOptions";
import React from "react";

export default function CarteraOption({ option, index }: any) {
  return (
    <tr
      key={index}
      className="table-secondary   position-relative border text-left "
      style={{ background: index % 2 === 0 ? "#F2F2F2" : "#fff" }}
    >
      <th scope="row ps-2">
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
      <td>
        <h6 className="text-cartera ">{option.provider}</h6>
        <p className="parraf-cartera">{option.informacion}</p>
      </td>
      <td className="number-dashboardRifas">
        {new Date(option.created_at).toLocaleDateString()}
      </td>
      <td style={{ width: "120px" }} className="number-dashboardRifas ">
        {option.total}
      </td>
      <td
        style={{ color: getStatusOptions(option.estado) }}
        className="number-dashboardRifas"
      >
        {option.estado}
      </td>
    </tr>
  );
}
