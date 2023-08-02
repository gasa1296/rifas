import React, { useState } from "react";
import imagenPrueba from "@/assets/img/imagePrueba.svg"
import Image from 'next/image'
import { Field } from "@/types/Component/FormGenerator";
import FormGenerator from "../FormGenerator";
import { selectAuthState } from "@/store/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { Profile } from "@/types/Model/Profile";

export default function DefinicionRifa({ step, setStep }: any) {
    /*   const dispatch = useDispatch();
      const { loading } = useSelector(selectAuthState); */



    const submitData = async (data: Profile) => {
    };


    const fields: Field[] = [

        {
            label: " 1. Selecciona una de tus asociaciones a la que quieres apoyar.",
            name: "selectAsociacion",
            required: true,
            type: "subtitle"
        },
        {
            label: " Fecha de inicio",
            name: "dateStart",
            required: true,
            type: "date",


        },
        {
            label: " Fecha de Fin",
            name: "dateEnd",
            required: true,
            type: "date",


        },

        {
            label: "2. Informacion de tu rifa",
            name: "seubtitle",
            type: "subtitle"
        },
        {
            label: "Título de la rifa",
            name: "titleRifa",
            required: true,
            type: "text"
        },
        {
            label: "Escribe la frase promocional de tu rifa",
            name: "frasePromocional",
            required: true,
            type: "text"
        },
        {
            label: "Escribe la descripción de tu rifa",
            name: "descripcionRifa",
            required: true,
            type: "textarea"
        },
        {
            label: "3. Método de entrega",
            name: "seubtitle",
            type: "subtitle"
        },
        {
            label: "Elige como quieres entregar tu premio",
            name: "seubtitle",
            type: "subtitle"
        },

        {
            label: "En persona",
            name: "eleccionPremio",
            required: true,
            type: "radioButton",

        },



    ];

    return (
        <div className='  px-5 shadow'>

            <div className="row">
                <FormGenerator
                    buttonText="Continuar"
                    submitData={submitData}
                    fields={fields}
                    loading={false}
                />

                {/*    <p className='text-secondary fs-5'> 1. Selecciona una de tus asociaciones a la que quieres apoyar.</p> */}
                {/* <div className='d-flex  '>
                    <div className='col-5 d-md-block d-block  col-md-7' >
                        <p className='m-0 fw-bold'>Fecha de inicio</p>
                        <input type='date' className='' />
                    </div>
                    <div className='col-5 col-md-5' >
                        <p className='m-0 fw-bold'> Fecha de fin </p>
                        <input type='date' className='' />
                    </div>
                </div> */}
                <p className='text-secondary fs-5 mt-3'>2. Información de tu rifa</p>
                <label className='text-secondary p-0 '>Título de la rifa</label>
                <input className='form-control   ' type="text" />
                <label className='text-secondary p-0 '>Escribe la frase promocional de tu rifa</label>
                <input className='form-control   ' type="text" />

                <label className='text-secondary p-0 '>Escribe la descripción de tu rifa</label>
                <textarea />
                <p className='text-secondary fs-5 p-0 mt-3 m-0 fw-semibold '>3. Método de entrega</p>
                <p className='text-secondary fs-6 p-0 '>Elige cómo entregarás el premio</p>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                    <label className="form-check-label" >En persona</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                    <label className="form-check-label" >Envío por paquetería</label>
                </div> <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                    <label className="form-check-label" >Acordar con el ganador</label>
                </div>
                <p className='text-secondary fs-5 p-0 mt-3 m-0 fw-semibold '>Ficha promocional de tu rifa</p>
                <p className='p-0'>La ficha promocional se utiliza para promover la rifa en las redes sociales.</p>
                <Image src={imagenPrueba} alt='' className='border border-alert-danger  w-50 h-50 ' />
                <p className='text-secondary fs-5 p-0 mt-3 m-0 fw-semibold '>Banner promocional de tu rifa</p>
                <p className='p-0'>El banner promocional se utiliza para promover la rifa en nuestros catálogos y micro sitios.</p>
                <Image src={imagenPrueba} alt='' className='border border-alert-danger  w-50 h-50 ' />
                <div className=' w-100 my-5 '>
                    <button className='btn btn-outline-dark  w-100' onClick={() => setStep(3)} > Continuar</button>
                </div>
            </div>

        </div>
    );
}
