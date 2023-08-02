import React from "react";
interface Props {
    register: any;
    label: string;
    name: string;
    required?: boolean;
    error?: string;
}
export default function InputCustom({
    register,
    label,
    name,
    required,
    error,
}: Props) {
    return (
        <div className="my-3">

            <div className="d-flex justify-content-between  border-bottom  text-secondary  shadow-sm p-2  ">
                <p className="m-0">Número de boletos</p>
                <p className="m-0 fw-bold">1</p>
            </div>
            <div className="d-flex justify-content-between  border-bottom  text-secondary shadow-sm p-2  ">
                <p className="m-0">Costo por boleto</p>
                <p className="m-0 fw-bold">$ 0.00</p>
            </div>{" "}
            <div className="d-flex justify-content-between  border-bottom  text-secondary shadow-sm p-2 ">
                <p className="m-0">Monto a recaudar</p>
                <p className="m-0 fw-bold">$ 0.00</p>
            </div>{" "}
            <div className="d-flex justify-content-between  border-bottom  text-secondary shadow-sm p-2 ">
                <p className="m-0">Valor del premio</p>
                <p className="m-0 fw-bold">$ 0.00</p>
            </div>{" "}
            <div className="d-flex justify-content-between  border-bottom  text-secondary shadow-sm p-2 ">
                <p className="m-0">Cuota de recuperación</p>
                <p className="m-0 fw-bold">$ 0.00</p>
            </div>{" "}
            <div className="d-flex justify-content-between  border-bottom  text-secondary shadow-sm p-2 ">
                <p className="m-0">Ingreso total generado</p>
                <p className="m-0 fw-bold">$ 0.00</p>
            </div>
            <div className=" w-100 mb-3 mt-3 "></div>

        </div>
    );
}