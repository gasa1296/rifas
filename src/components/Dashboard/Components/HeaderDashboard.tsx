import { useAsociatonsStoreDashboard } from "@/store/zustand/DashboardStore";
import { useRouter } from "next/router";
import React from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";

interface Props {
  renderButton?: () => JSX.Element;
  screen: string;
  profile?: any;
}

export default function HeaderDashboard({
  renderButton,
  screen,
  profile,
}: Props) {
  const router = useRouter();
  const associations = useAsociatonsStoreDashboard(
    (state) => state.asociations
  );

  const filterAssociation = associations.find(
    (association) => association.id === Number(router.query.id)
  );

  return (
    <div className="background-dashboard  d-block d-lg-flex justify-content-between align-items-center p-3 col-12 ">
      <div className=" d-block d-md-flex mt-2 ">
        <p className="title-dashboard mx-2  ">
          {!profile && `${filterAssociation?.association_name} / `}
          {screen}
        </p>
      </div>

      <div className="d-flex justify-content-between align-items-center ">
        {!profile && (
          <button
            className=" p-2 me-3 button-dashboard m-0 "
            onClick={() => router.push("/dashboard/")}
          >
            <MdKeyboardArrowLeft />
            Mis asociaciones
          </button>
        )}

        {renderButton && renderButton()}
      </div>
    </div>
  );
}
