import { parseNumber } from "@/utils/ParseNumber";
import React, { useEffect } from "react";
interface Props {
  register: any;
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  watch: any;
}
export default function ResumeRaffle({
  register,
  label,
  name,
  required,
  error,
  watch,
}: Props) {
  const values: any = watch();

  return (
    <div className="my-3">
      <label className={`form-check-label fw-bold ps-2 fs-6 my-2`}>
        Calculadora del costo por boleto
      </label>
      <div className="d-flex justify-content-between  border-bottom  text-secondary  shadow-sm p-2  ">
        <p className="m-0 text-calculadora-boletos">Número de boletos</p>
        <p className="m-0 value-calculadora-boletos">
          {parseNumber(values.ticket_number)}
        </p>
      </div>
      <div className="d-flex justify-content-between  border-bottom  text-secondary shadow-sm p-2  ">
        <p className="m-0 text-calculadora-boletos">Costo por boleto</p>
        <p className="m-0 value-calculadora-boletos">
          $ {parseNumber(values.ticket_price)}
        </p>
      </div>{" "}
      <div className="d-flex justify-content-between  border-bottom  text-secondary shadow-sm p-2 ">
        <p className="m-0 text-calculadora-boletos">Monto a recaudar</p>
        <p className="m-0 value-calculadora-boletos">
          $ {parseNumber(values.price)}
        </p>
      </div>{" "}
      <div className="d-flex justify-content-between  border-bottom  text-secondary shadow-sm p-2 ">
        <p className="m-0 text-calculadora-boletos">Valor del premio</p>
        <p className="m-0 value-calculadora-boletos">
          $ {parseNumber(values?.prize?.value || 0)}
        </p>
      </div>{" "}
      <div className="d-flex justify-content-between  border-bottom  text-secondary shadow-sm p-2 ">
        <p className="m-0 text-calculadora-boletos">Cuota de recuperación</p>
        <p className="m-0 value-calculadora-boletos">
          $ {parseNumber(values.price - values.price * 0.8)}
        </p>
      </div>{" "}
      <div className="d-flex justify-content-between  border-bottom  text-secondary shadow-sm p-2 ">
        <p className="m-0 text-calculadora-boletos">Ingreso total generado</p>
        <p className="m-0 value-calculadora-boletos">
          $ {parseNumber(values.price - values.price * 0.2)}
        </p>
      </div>
      <div className=" w-100 mb-3 mt-3 "></div>
    </div>
  );
}
