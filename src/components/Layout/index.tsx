import React from "react";
import logo from "@/assets/img/Logo.svg";

import Image from "next/image";
import Nav from "./Nav";
import Footer from "./Footer";
$white: "#0000";
export default function Layout({ children, home }: any) {
  return (
    <main
      className="mx-3 mx-lg-5 position-relative "
      style={{ maxWidth: "1440px", paddingTop: "62px" }}
    >
      <Nav home={home} />
      <div>{children}</div>
      <Footer />
    </main>
  );
}
