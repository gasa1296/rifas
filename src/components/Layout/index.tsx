import React, { useEffect, useState } from "react";
import logo from "@/assets/img/Logo.svg";

import Image from "next/image";
import Nav from "./Nav";
import Footer from "./Footer";
import ModalForgotPassword from "../modal/ModalForgotPassword";
import ModalRecoverPassword from "../modal/ModalRecoverPassword";
import { useRouter } from "next/router";

export default function Layout({ children, home }: any) {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  useEffect(() => {
    if (router?.query?.recoverPassword) setShow(true);

    //eslint-disable-next-line
  }, []);

  return (
    <main
      className=" position-relative mx-auto"
      style={{ maxWidth: "1440px", paddingTop: "62px" }}
    >
      <ModalForgotPassword />
      <ModalRecoverPassword handleClose={handleClose} show={show} />
      <div>
        <Nav />
        <div className="">{children}</div>
        <Footer />
      </div>
    </main>
  );
}
