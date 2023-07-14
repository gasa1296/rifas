import React from 'react'
import BuyTickes from './BuyTickes'
import Image from 'next/image'
import { useRouter } from "next/router";

import { BiHeartCircle } from "react-icons/bi";

export default function PaySuccessful({ initialStep }: any) {
    const router = useRouter();

    return (
        <div className=' d-block justify-content-center d-md-flex mt-5'>
            < div className='col-md-4 col-12 text-secondary  bg-body-secondary opacity-75 p-4 mx-2' >
                <BuyTickes />

            </div >
            <div className='col-md-5 col-12  mx-4 text-center '>
                <BiHeartCircle size={60} />
                <h3 className="mt-3 mb-3">  Gracias </h3>
                <p className=" m-0 lh-1 fs-3  ">Estamos muy contentos de </p>
                <p className="  m-0 lh-1 fs-3 ">conseguir tu valioso amor </p>
                <p className=" m-0  lh-1 fs-3  "> para gente hermosa</p>

                <button onClick={() => router.push("/rifas")} className='text-secondary btn btn-light border border-light-subtle  border-2 w-50 p-3 mt-5'>Volver a Rifas</button>
            </div>


        </div>
    )

}
