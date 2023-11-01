import Layout from "@/components/Layout";
import Rifas from "@/components/Rifas";
import { GetRaffle } from "@/store/slices/raffles";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function RifaPage() {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();

  useEffect(() => {
    const timeoutId = setTimeout(
      () => dispatch(GetRaffle(id || "") as any),
      200
    );

    return () => {
      clearTimeout(timeoutId);
    };

    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <Layout>
        <Rifas />
      </Layout>
    </div>
  );
}
