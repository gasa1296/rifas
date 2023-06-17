import React from "react";

export default function Layout({ children }: any) {
  return (
    <main className="px-3">
      <nav className="bg-white d-md-flex justify-content-between  mx-5 ">
        <div> logo</div>
        <ul className=" d-md-flex  list-unstyled ">
          <li className=" mx-4">Rifas</li>
          <li className=" mx-4">Donaciones</li>
          <li className="mx-4">Crear Rifa</li>
          <li className="mx-4">Nosotros</li>
          <li className="mx-4">Ingreso</li>
          <li className="mx-4">Registro</li>
        </ul>
      </nav>

      {children}
      {/*  <div className="text-center p-5">
        <div>imagen</div>
        <h1>RIFATE</h1>
        <p>Sumate con amor</p>
      </div> */}

      <footer className=" ">
        <div className=" border-bottom w-auto mx-5 mb-3  "></div>
        <div className="d-md-flex text-center text-md-start justify-content-md-between  p-0 mx-5 ">
          <div className="m-0  ">Logo</div>
          <div>
            <h6 className="">Rifate!</h6>
            <ul className=" list-unstyled">
              <li>Inicia una rifa</li>
              <li>Comprar boletos</li>
              <li>Haz una donacion</li>
              <li>Crear una cuenta</li>
            </ul>
          </div>
          <div>
            <h6 className="">Nosotros</h6>
            <ul className=" list-unstyled">
              <li>Conocenos</li>
              <li>¿Como funciona?</li>
            </ul>
          </div>{" "}
          <div>
            <h6 className="">Legal</h6>
            <ul className=" list-unstyled">
              <li>Terminos y condiciones</li>
              <li>Aviso de privacidad</li>
              <li>Preguntan frecuentes</li>
            </ul>
          </div>{" "}
          <div>
            <h6 className="">Redes!</h6>
            <ul className=" list-unstyled">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>
        <div className="mx-5">
          <p className="m-0">Escribenos</p>
          <p className="">Contacto@rifaconcausa.org</p>
        </div>

        <div className=" border-bottom w-auto mx-5  "></div>

        <p className="mx-5 mt-2">2021 .Todos los derechos reservados</p>
      </footer>
    </main>
  );
}
