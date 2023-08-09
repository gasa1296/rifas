import React from "react";
import logo from "@/assets/img/Logo.svg";

import Image from "next/image";
import Nav from "./Nav";
import Footer from "./Footer";
$white: "#0000";
export default function Layout({ children, home }: any) {
  return (
    <main
      className=" position-relative  "
      style={{ maxWidth: "1440px", paddingTop: "62px" }}
    >
      <div>
        <Nav home={home} />
        <div className="">{children}</div>
        <Footer />
      </div>
    </main>
  );
}
