import Layout from "@/components/Layout";

import MetodosPagoRifa from "@/components/Rifas/MetodosPagoRifa";
import RifaPago from "@/components/Rifas/RifaPago";
import PaySuccessful from "@/components/Rifas/PaySuccessful";
import Tabs from "@/components/Tab";
import { GetRaffle, selectRaffleState } from "@/store/slices/raffles";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AllRifas from "@/components/Rifas/AllRifas";
import BoletosRifas from "@/components/Rifas/BoletosRifas";

export default function RifasDetails() {
  const router = useRouter();

  const { id } = router.query;
  const { raffle } = useSelector(selectRaffleState);
  const dispatch = useDispatch();

  const tabs = [
    { label: "Crear una cuenta", Component: BoletosRifas },
    { label: "Registro una AC", Component: MetodosPagoRifa },
    { label: "Crear rifa", Component: RifaPago },
    { label: "Crear rifa", Component: PaySuccessful },
    { label: "Crear rifa", Component: AllRifas },
  ];

  useEffect(() => {
    const timeoutId = setTimeout(
      () => dispatch(GetRaffle(id || "") as any),
      200
    );

    return () => clearTimeout(timeoutId);

    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <Layout>
        {raffle ? (
          <Tabs tabs={tabs} hasHeader={false} />
        ) : (
          <div style={{ height: "600px" }}> </div>
        )}
      </Layout>
    </div>
  );
}
