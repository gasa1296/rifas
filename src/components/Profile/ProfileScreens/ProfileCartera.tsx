import React from "react";
import { FaBriefcase, FaImage } from "react-icons/fa";
import { useRouter } from "next/router";
import { useAsociatonsStoreDashboard } from "@/store/zustand/DashboardStore";
import HeaderDashboard from "@/components/Dashboard/Components/HeaderDashboard";
import { selectAuthState } from "@/store/slices/auth";
import { useSelector } from "react-redux";
import { parseNumber } from "@/utils/ParseNumber";

function ProfileCartera() {
  const { profile } = useSelector(selectAuthState);
  return (
    <section className=" ">
      <HeaderDashboard screen="Cartera" profile />
      <div className="pt-3 background-dashboard mt-3 px-3 pb-3">
        <div className="d-flex container-cartera  p-3 mt-2">
          <div className="ms-4 text-center">
            <FaBriefcase color="#784B5F" size={30} />
            <p className="value-Cartera mt-2">
              ${parseNumber(Number(profile?.wallet.value))}
            </p>
          </div>

          <div className="ms-4 d-flex flex-column align-items-start justify-content-center ">
            <p className="m-0 saldo-Cartera">Saldo de tu cartera</p>
            <p className="m-0 information-Saldo">
              Este es el saldo aplicado a tu cuenta, no tiene vencimiento y lo
              puedes ocupar para comprar boletos para cualquier rifa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileCartera;
