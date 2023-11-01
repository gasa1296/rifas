import React from "react";
import { useForm } from "react-hook-form";
import { Field } from "@/types/Component/FormGenerator";
import { FieldComponents, getDefaultValues } from "./helper";
interface Props {
  fields: Field[];
  submitData: (data: any) => void;
  buttonText?: string;
  loading?: boolean;
  renderButton?: (param: any) => JSX.Element;
}

export default function FormGenerator({
  fields,
  submitData,
  buttonText = "Enviar",
  loading = false,
  renderButton,
}: Props) {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    defaultValues: getDefaultValues(fields),
  });

  return (
    <form className="" onSubmit={handleSubmit(submitData)}>
      {fields.map((field, index) => {
        const FieldComponent = FieldComponents[field.type];

        return (
          <FieldComponent
            key={index}
            error={errors[field.name]}
            register={register}
            setValue={setValue}
            watch={watch}
            {...field}
          />
        );
      })}
      {renderButton ? (
        renderButton(handleSubmit(submitData))
      ) : (
        <button
          disabled={loading}
          className="btn btn-pink w-100 my-4"
          type="submit"
        >
          {buttonText}
        </button>
      )}
    </form>
  );
}
