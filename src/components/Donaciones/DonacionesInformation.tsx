import React from 'react'
import Image from 'next/image'
import imagenDonaciones from "@/assets/img/ImagenDonaciones.svg"
import FormGenerator from "../FormGenerator";
import { Field } from "@/types/Component/FormGenerator";
import { useDispatch, useSelector } from "react-redux";
import { Register, selectAuthState } from "@/store/slices/auth";
import { Donation, Donation2 } from "@/types/Model/Profile";
import { setDonationsForm2 } from '@/store/slices/raffles';
export default function DonacionesInformation({ nextStep, backStep }: any) {
    const { loading } = useSelector(selectAuthState);

    const dispatch = useDispatch();

    const submitData = async (data: Donation2) => {
        await dispatch(setDonationsForm2(data) as any);
        nextStep();

    }; const fields: Field[] = [
        {
            label: "2 / 3  Completa la informacion",
            name: "complete_information",
            type: "title",
        },
        {
            label: "¿Cual es el la condicion de tu producto?*",
            name: "product_condition",
            required: true,
            type: "radioButton",
        },

        {
            label: "¿Cuál es el precio de tu producto (En pesos MXN)?*",
            name: "prize_product",
            required: true, type:
                "text"
        },
        {
            label: "¿Quieres asignar tu premio a alguna Asociación?",
            name: "association_award",
            required: false,
            type: "select"
        },
        {
            label: "Agrega las fotos de tu premio",
            name: "association award",
            required: false,
            type: "file"
        },

    ];
    return (
        <div>
            <section className='row m-0 my-3' >
                <div className=' col-12 col-md-6 '>
                    <Image src={imagenDonaciones} alt=".." className='w-75 mx-5' />
                </div>
                <div className='col-12 col-md-6 text-secondary mx-4 mx-md-0 '>
                    <FormGenerator
                        buttonText="Continuar"
                        submitData={submitData}
                        fields={fields}
                        loading={loading}
                    />
                    <div className='d-flex justify-content-between w-75 mw-md-50  my-3'>
                        <button className='btn btn-outline-secondary btn-sm w-25  ' onClick={() => backStep()}> Regresar</button>
                        <button className='btn btn-outline-secondary btn-sm w-25 ' onClick={() => nextStep()}> Continuar</button>

                    </div>
                </div>
            </section>

        </div>
    )
}
