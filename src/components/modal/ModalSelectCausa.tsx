import React from 'react'
import historiasFondo from "@/assets/img/Historias-img.jpg";
import Image from "next/image";
import { useNotificationStore } from '@/store/zustand/NotificationStore';
import { useCausesStore } from '@/store/zustand/CausesStore';

export default function ModalSelectCausa({ handleSubmit }: any) {

    const isLoading = useNotificationStore((state) => state.isLoading);
    const error = useNotificationStore((state) => state.error);
    const causes = useCausesStore((state) => state.causes);

    return (
        <section className=''>
            <div className=''>
                {!!isLoading && <p className="m-0">Cargando...</p>}
                {!!error && (
                    <p className="m-0 text-danger ">
                        Error al cargar las notificaciones
                    </p>
                )}
                {!isLoading && !error && causes.map((causes: any) => (
                    <div className='d-flex my-4 px-3 row'>
                        <div className="col-12 col-lg-4 p-0 ">
                            <Image
                                src={historiasFondo}
                                alt="fondo"
                                className="w-100 h-100  rounded "
                            />
                            {/*  {causes.image} */}
                        </div>
                        <div className='ms-0 ms-lg-3 col-12 col-lg-8 mt-3 mt-lg-0'>
                            <h5> {causes.name}</h5>
                            <p className='d-flex px-1 '>  {causes.description} <p className='fw-semibold'>{/* {causes.prize}  */}</p> </p>
                            <button onClick={() => {
                                handleSubmit({
                                    type: "cause",
                                    ...causes,
                                });
                            }} className='btn btn-pink'>Cambiar Causa</button>
                        </div>
                    </div>




                ))}
            </div>


        </section>
    )
}
