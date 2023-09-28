import React from 'react'
import { Field } from "@/types/Component/FormGenerator";
import FormGenerator from "../FormGenerator";
import { useDispatch, useSelector } from "react-redux";
import { Register, selectAuthState } from "@/store/slices/auth";
import { Profile } from '@/types/Model/Profile';

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
        <section className=' mx-0 mx-lg-4'>
            <FormGenerator
                buttonText="Actualizar Perfil"
                submitData={submitData}
                fields={fields}
                loading={loading}
            />

        </section>
    )
}
