import React from "react";
import Image from 'next/image'
import camara from "@/assets/img/camara.png"

export default function CreateAccount({ nextStep, backStep }: any) {
  return (
    <section className='text-secondary row'>
      <div className='col-md-8 col-10 m-auto'>
        <h2 className="text-center text-secondary">Para comenzar a rifarte necesitas crear </h2>
        <h2 className="text-center text-secondary">una cuenta.</h2>
        <p className='text-center fw-semibold '>si eres una asociacion o quieres donar un premio es necesario crear una cuenta </p>
      </div>
      <div className="  mb-3 col-10 col-md-5 m-auto  text-secondary shadow rounded">
        <div className='m-auto col-md-10 col-12 py-2'>
          <div className=" text-center text-secondary fw-bold">Registra tu cuenta</div>
          <label>Nombre completo</label>
          <input type='text' className='w-100 form-control my-2 ' />
          <label>Correo electronico</label>
          <input type='email' className='w-100   form-control my-2 ' />
          <label>Empresa (Opcional)</label>
          <input type='text' className='w-100  form-control my-2 ' />
          <label>Contrasena</label>
          <input type='password' className='w-100  form-control my-2 ' />
          <label>Confirmar contrasena</label>
          <input type='password' className='w-100  form-control my-2 ' />
          <div className="form-check  m-auto col-md-10 col-12 ">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label fw-bold ">
              He leido y acepto los terminos
            </label>
          </div>
          <div className="d-grid gap-2 col-10 mx-auto my-3">
            <button className="btn btn-secondary" type="button" onClick={() => nextStep()}>Registrate</button>
            <p className='text-center fw-bold mt-2'>O registrate con tus redes sociales</p>
            <button className="btn btn-secondary" type="button"> Resgitrate con Facebook</button>
            <button className="btn btn-secondary my-2" type="button">Registrate con Google</button>
          </div>

        </div>
      </div>
    </section>
    /*  <div className="row mt-5 ">
       <div className="col-10 col-lg-6 mx-auto">
         <h2 className="text-center text-secondary">!Es momento de rifarnos!</h2>
 
         <div className=" my-5 p-5 text-center shadow">
           <h3 className="text-secondary"> Muchas gracias </h3>
           <h3 className="text-secondary">
             {" "}
             Ahora es momento de crear tu rifa.{" "}
           </h3>
 
           <p className="mt-5 mb-0  text-secondary">?a quien ayudaremos?</p>
           <p className="text-secondary ">
             Cuentanos todo acerca de tu rifa y pongamonos manos a la obra.
           </p>
           <button
             onClick={() => nextStep()}
             className="btn btn-success w-100 mt-5"
           >
             Continuar
           </button>
           <button
             onClick={() => backStep()}
             className="btn btn-outline-secondary    w-100 mt-3"
           >
             ir al inicio
           </button>
         </div>
       </div>
     </div> */
  );
}
