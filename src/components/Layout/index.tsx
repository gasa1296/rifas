import React from "react";
import logo from "@/assets/img/Logo.svg";

import Image from "next/image";
import Nav from "./Nav";
import Footer from "./Footer";
export default function Layout({ children, home }: any) {
  return (
    <main
      className=" position-relative mx-auto"
      style={{ maxWidth: "1440px", paddingTop: "62px" }}
    >
      <div>
        <Nav />
        <div className="">{children}</div>
        <Footer />
      </div>
    </main>
  );
}
