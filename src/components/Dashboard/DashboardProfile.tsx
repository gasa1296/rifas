import React from 'react'
import { Field } from "@/types/Component/FormGenerator";
import FormGenerator from "../FormGenerator";
import { useDispatch, useSelector } from "react-redux";
import { Register, selectAuthState } from "@/store/slices/auth";
import { Profile } from '@/types/Model/Profile';
import { MdKeyboardArrowLeft } from "react-icons/md";

export default function DashboardProfile({ nextStep }: any) {
    const { loading } = useSelector(selectAuthState);
    const dispatch = useDispatch();

    const submitData = async (data: Profile) => {
        const { payload } = await dispatch(Register(data) as any);

        if (payload) {
            nextStep();
        }
    };
    const fields: Field[] = [
        {
            label: "Nombre",
            name: "name",
            required: true,
            type: "text",
        },
        {
            label: "Apellido Paterno",
            name: "last-name",
            required: true,
            type: "text",
        },
        { label: "Apellido Materno", name: "mother-lastname", required: true, type: "text" },
        { label: "Contraseña", name: "password", required: true, type: "password" },
        {
            label: "Numero de celular",
            name: "phone",
            required: false,
            type: "number",
        },
        {
            label: "Numero de telefono",
            name: "phoneNumber",
            required: false,
            type: "number",
        },
        {
            label: "Correo electronico",
            name: "email",
            required: true,
            type: "email",
        },

        {
            label: "Sexo",
            name: "sex",
            required: true,
            type: "subtitle",
        },
        {
            label: "femenino",
            name: "sex",
            required: true,
            type: "checkbox",
        },
        {
            label: "masculino",
            name: "sex",
            required: true,
            type: "checkbox",
        },
        {
            label: "Agregar foto de perfil",
            name: "photo",
            required: false,
            type: "file",
        }, {
            label: "Cambiar contraseña",
            name: "resetPassword",
            required: true,
            type: "password",
        },
    ];
    return (
        <section className=' '>
            <div className='background-dashboard  d-block d-lg-flex justify-content-between align-items-center p-3 col-12'>
                <div className=' d-block d-md-flex mt-2'>
                    <p className='title-dashboard mx-2  '>APAC, A.C. /</p>
                    <p className='title-dashboard '>Mi perfil</p>
                </div>

                <button className='me-0 me-3 button-dashboard m-0 p-2 '><MdKeyboardArrowLeft />Mis asociaciones </button>
            </div>
            <div className='pt-3 background-dashboard mt-3 px-3'>

                <FormGenerator
                    buttonText="Actualizar Perfil"
                    submitData={submitData}
                    fields={fields}
                    loading={loading}
                />
            </div>


        </section>
    )
}
