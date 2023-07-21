import Layout from "@/components/Layout";
import CreateAccount from "@/components/Registro/CreateAccount";
import BoletosRifas from "@/components/Rifas/BoletosRifas";
import MetodosPagoRifa from "@/components/Rifas/MetodosPagoRifa";
import RifaPago from "@/components/Rifas/RifaPago";
import PaySuccessful from "@/components/Rifas/PaySuccessful";
import Tabs from "@/components/Tab";
import { setRaffle } from "@/store/slices/raffles";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AllRifas from "@/components/Rifas/AllRifas";

export default function RifasDetails() {
  const router = useRouter();

  const { id } = router.query;

  const dispatch = useDispatch();

  const tabs = [
    { label: "Crear una cuenta", Component: BoletosRifas },
    { label: "Registro una AC", Component: MetodosPagoRifa },
    { label: "Crear rifa", Component: RifaPago },
    { label: "Crear rifa", Component: PaySuccessful },
    { label: "Crear rifa", Component: AllRifas },

  ];

  useEffect(() => {
    dispatch(setRaffle(id) as any);
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <Layout>
        <Tabs tabs={tabs} hasHeader={false} />
      </Layout>
    </div>
  );
}
