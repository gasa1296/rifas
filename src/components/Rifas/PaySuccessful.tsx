import React from 'react'
import BuyTickes from './BuyTickes'
import Image from 'next/image'
import { useRouter } from "next/router";
import { BsFacebook, BsTwitter, BsWhatsapp, BsFillShareFill, } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BiHeartCircle } from "react-icons/bi";

export default function PaySuccessful({ initialStep }: any) {
    const router = useRouter();

    return (
        <div className=' d-block justify-content-center d-md-flex mt-5'>
            < div className=' col-12 col-lg-5  '>
                <BuyTickes />

            </div >
            <div className='col-md-6 col-12 mt-3 mt-md-0 text-center '>
                <BiHeartCircle size={60} color='#C3286D' />
                <h3 className="my-2 tank-paySucessfull">  Gracias </h3>
                <p className=" m-0  text-paySucessful ">Estamos muy contentos de conseguir tu valioso amor</p>
                <p className=" mb-3   text-paySucessful"> para gente hermosa</p>
                <p className=" m-0  d-flex justify-content-center  text-paySucessful"> Número de boletos adquiridos: <p className='value-paySucessful m-0'>3</p></p>
                <p className=" m-0  d-flex justify-content-center  text-paySucessful m-0 "> Total pagado:  <p className='value-paySucessful m-0'>  $20,000.00 MXN</p></p>
                <p className=" m-0 d-flex justify-content-center  text-paySucessful"> Número de referencia: <p className='value-paySucessful m-0'>t8zbvmk6.</p></p>
                <p className=" mt-3 mb-0  text-paySucessful ">Ayúdanos a compartir en tus redes sociales y más gente se una a la causa.</p>
                <div>
                    <h6 className=" text-center share-paySucessfull my-2 ">Compartir:</h6>
                    <BsFacebook color=" #C3286D" size={25} className="mx-2 mt-2" />
                    <BsTwitter color=" #C3286D" size={25} className="mx-2" />
                    <MdEmail color=" #C3286D" size={25} className="mx-2" />
                    <BsWhatsapp color=" #C3286D" size={25} className="mx-2" />
                    <BsFillShareFill color=" #C3286D" size={25} className="mx-2" />
                </div>
                <button onClick={() => router.push("/rifas")} className='mt-3 btn btn-border-pink  w-50 '>Ver las rifas disponibles</button>
            </div>

        </div>



    )

}
