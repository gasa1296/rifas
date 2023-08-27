import React from 'react'
import useSWR from 'swr'
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import portadarifa1 from "@/assets/img/portada-rifa1.jpg"
import { AiOutlineCheckCircle, } from 'react-icons/ai'
import { Api } from '@/services';


const fetcher = (url: string) => Api({ endpoint: url, method: "GET" });
export default function ModalNotification({ showNotification }: any) {


    const { data, error, isLoading } = useSWR('/notifications/', fetcher)

    console.log(data)

    return (
        <>
            {showNotification &&
                <div className='container-modalNotification rounded-3 shadow'>
                    <div className=' contenedor border-bottom border rounded-3'>
                        <div className=' d-flex justify-content-around  pt-2 '>
                            <p className=' z-3 notification '>Notificaciones (5)</p>
                            <p className='z-3 leido-notification '>marcar todo como leido</p>
                        </div>
                    </div>

                    {/*     <div className=" border-bottom my-2 w-100"></div> */}
                    <div className='mt-3 row m-0 border-bottom'>
                        {!!isLoading && <p className='m-0'>Cargando...</p>}
                        {!!error && <p className='m-0 text-danger '>Error al cargar las notificaciones</p>}
                        {!isLoading && !error && data?.data.map((notifications: any) => (
                            <section>
                                <p className='name-notifications m-0'>{notifications.id}</p>
                                <div className='d-flex justify-content-between   row m-0 '>
                                    <div className='col-10 col-lg-4  p-0   '>
                                        <Image className=' mt-1 size-imagenNotifications w-100 h-auto  rounded' src={portadarifa1} alt='portadarifa1' />
                                    </div>
                                    <p className='col-12 col-lg-7 px-3 parraf-notifications mt-3 mt-lg-0 '>{notifications.message}</p>

                                    <div className='col-12 col-lg-1 p-0 d-flex justify-content-center  align-items-center mb-5 '><AiOutlineCheckCircle size={30} /></div>
                                </div>
                            </section>
                        ))}
                    </div>


                </div>}
        </>
    )
}
