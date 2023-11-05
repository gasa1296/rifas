import React, { useEffect } from "react";
import FooterMicrositio from "./FooterMicrositio";
import HeaderMicrositio from "./HeaderMicrositio";
import RifasActivas from "../Rifas/RifasActivas";
import RifasTerminadas from "./RifasTerminadas";
import NavMicrositio from "./NavMicrositio";
import GalleryMicrositio from "./GalleryMicrositio";
import { useAsociatonsStoreDashboard } from "@/store/zustand/DashboardStore";
import { useRouter } from "next/router";

export default function Microsite() {
  const router = useRouter();
  const getSite = useAsociatonsStoreDashboard((state) => state.getSite);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      getSite(router.query.id as string);
    }, 200);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section>
      <NavMicrositio />
      <HeaderMicrositio />
      <RifasActivas all />
      <RifasTerminadas all />
      <GalleryMicrositio />
      <FooterMicrositio />
    </section>
  );
}
