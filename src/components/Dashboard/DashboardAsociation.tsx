import React from 'react'
import Image from "next/image";
import FondoProfile from "../../assets/img/Contacto-bg.jpg";
import { Field } from "@/types/Component/FormGenerator";
import FormGenerator from "../FormGenerator";
import { useDispatch, useSelector } from 'react-redux';
import { Register, selectAuthState } from '@/store/slices/auth';
import { Profile } from '@/types/Model/Profile';
import { useRouter } from 'next/router';


export default function DashboardAsociation() {
    const dispatch = useDispatch();
    const { loading } = useSelector(selectAuthState);
    const router = useRouter();

    const submitData = async (data: Profile) => {


        router.push(`/dashboard/${data.name}`);

    };

    const fields: Field[] = [
        {
            label: "Selecciona una asociación",
            name: "name",
            required: true,
            type: "select",
            options: [
                {
                    label: "APAC A.C",
                    value: "1"
                },
                {
                    label: "Casa Hogar A.C",
                    value: "2"
                },
                {

                    label: "Rifa con causa",
                    value: "3"
                }



            ]

        },

    ];
    return (

        <section className="mx-0 mx-md-5 position-relative   ">
            <div className="position-absolute top-0 overflow-hidden fondoContacto  ">
                <Image src={FondoProfile} alt="fondoProfile" className="w-100 h-100 " />
            </div>
            <div className=" mx-0 mx-lg-5 mt-3 mt-lg-3  position-relative pt-3  text-center ">
                <h3 className="contacto mx-auto ">Mi cuenta</h3>
            </div>
            <div className='d-flex justify-content-center '>

                <div className=' w-75 mt-4 end-0 p-5 rounded-1  ' style={{ background: "#F1ECEF " }}>


                    <p className='title-dashboardAsosation m-0'>Hola, bienvenido Cuautli</p>
                    <p className='subtitle-DashboarAsociation mt-2'>Selecciona una de tus asociaciones con la que te quieras rifar.</p>
                    <FormGenerator
                        buttonText='Seleccionar Asociacion'
                        submitData={submitData}
                        fields={fields}
                        loading={loading}

                    />
                </div>
            </div>


        </section>
    )
}
