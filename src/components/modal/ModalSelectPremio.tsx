import React from 'react'
import imagenselectPremio from "@/assets/img/Premio-donar.jpg";
import Image from "next/image";
import { useNotificationStore } from '@/store/zustand/NotificationStore';
import { usePremioStore } from '@/store/zustand/PremioStore';

export default function ModalSelectPremio({ handleSubmit }: any) {
    const isLoading = useNotificationStore((state) => state.isLoading);
    const error = useNotificationStore((state) => state.error);
    const premio = usePremioStore((state) => state.premio);
    return (
        <section className=' '>
            <div className='d-flex  mt-3 mt-lg-4 row'>
                {!!isLoading && <p className="m-0">Cargando...</p>}
                {!!error && (
                    <p className="m-0 text-danger ">
                        Error al cargar las notificaciones
                    </p>
                )}
                {!isLoading && !error && premio.map((premio: any) => (
                    <div className='d-flex row mt-3 mt-lg-4 '>
                        <div className="col-8 col-sm-5  m-auto   p-0 ">
                            <Image
                                src={imagenselectPremio}
                                alt="fondo"
                                className="w-100 h-100  rounded "
                            />
                            {/*    {premio.image} */}
                        </div>
                        <div className='ms-0 ms-lg-3 col-12 col-sm-8 mt-3 mt-lg-0'>
                            <h5> {premio.name}</h5>
                            <p className='m-0'>  {premio.descriotion}</p>
                            <p className='d-flex'>Valor del premio: <p className='fw-semibold  ms-2'> {premio.value}</p> </p>
                            <button onClick={() => {
                                handleSubmit({
                                    type: "prize",
                                    ...premio,
                                });
                            }} className='btn btn-pink'>Cambiar premio</button>

                        </div>

                    </div>




                ))}

            </div>
            {/*    <div className='d-flex mt-3 mt-lg-4'>
                <div className="col-12 col-lg-5    p-0 ">
                    <Image
                        src={imagenselectPremio}
                        alt="fondo"
                        className="w-100 h-100  rounded "
                    />
                </div>
                <div className='ms-4'>
                    <h5>iPhone 14 Pro Max</h5>
                    <p>iPhone de última generación! Valor del premio: $32,000.00</p>
                    <button className='btn btn-pink'>Cambiar Causa</button>

                </div>
            </div>
 */}

        </section>
    )
}
