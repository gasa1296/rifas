import React from 'react'
import FormGenerator from "../FormGenerator";
import { Field } from "@/types/Component/FormGenerator";
import { Profile } from '@/types/Model/Profile';
export default function DashboardMicrositioBanners({ handleChangeRaffle }: any) {

    const submitData = async (data: Profile) => {
        handleChangeRaffle(data);
    };
    const fields: Field[] = [

        {
            subLabel: "Agrega el logotipo de tu asociación",
            name: "about",
            required: true,
            type: "file",
        },

        {
            subLabel: "Agrega la imagen principal de tu asociación (1024x1024px)",
            name: "FF",
            required: true,
            type: "file",
        },
        {
            subLabel: "Agrega las imagenes o videos para tu galería (1024x 768 px), hasta 10 imágenes o videos",
            name: "streetAndPhone",
            required: true,
            type: "file",
        },

    ];
    return (
        <section className='px-4 py-3 container-cartera '>

            <h6 className='title-micrositio'> 1. Imagenes generales de tu Asociación</h6>

            <FormGenerator
                buttonText="Continuar"
                submitData={submitData}
                fields={fields}
                loading={false}
            />
        </section>
    )
}
