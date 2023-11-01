import Image from "next/image";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillCamera, AiFillDelete, AiFillCloseCircle } from "react-icons/ai";
import { handleGetFiles, isHttp } from "../helper";

interface Props {
  register: any;
  label: string;
  name: string;
  required?: boolean;
  error?: any;
  setValue: any;
  maxFile?: number;
  subLabel: string;
  watch: any;
}
export default function InputFile({
  label,
  name,
  error,
  setValue,
  maxFile,
  subLabel,
  watch,
}: Props) {
  const values: any = watch();
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const MAX_UPLOAD_ITEMS: number = maxFile || 5;

  const fileRef = useRef<HTMLInputElement>(null);

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>): void => {
    const { files: inputFiles } = event.target;
    if (!inputFiles?.length || !inputFiles) return;
    const file = inputFiles[0];

    if (previews?.length === MAX_UPLOAD_ITEMS) {
      toast.error(
        `Solo puedes subir ${MAX_UPLOAD_ITEMS} ${
          MAX_UPLOAD_ITEMS > 1 ? "fotos" : "foto"
        } `
      );
      return;
    }

    const preview: string = URL.createObjectURL(file);
    setValue(name, [...files, file]);
    setFiles((prev) => [...prev, file]);
    setPreviews((prev) => [...prev, preview]);
  };

  const onDelete = (index: number): void => {
    setValue(
      name,
      files.filter((_, key) => key !== index)
    );
    setPreviews((prev) => prev.filter((_, key) => key !== index));
    setFiles((prev) => prev.filter((_, key) => key !== index));
  };

  const handleParseFiles = async () => {
    if (!values[name]) return;
    const files = await handleGetFiles(values[name]);
    setFiles(files as any);

    const previews = values[name].map((image: string) =>
      isHttp(image) ? image : `${process.env.NEXT_PUBLIC_BASE_URL}${image}`
    );
    setPreviews(previews);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleParseFiles();
    }, 200);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <label
        className={`${error && "text-danger"} title-form-generator  mt-2`}
        htmlFor={name}
      >
        {label}
      </label>
      {subLabel === "" ? null : <p className="  fs-6 mb-0">{subLabel}</p>}
      <input
        id={name}
        name={name}
        accept="image/*"
        type="file"
        onChange={(event) => onChangeFile(event)}
        style={{ display: "none" }}
        ref={fileRef}
      />
      <div className="mt-4 w-100 d-flex flex-wrap mb-4">
        {previews.map((preview, index) => (
          <div className="me-2 mb-2 position-relative " key={index}>
            <Image
              width={150}
              height={150}
              style={{ objectFit: "cover" }}
              className="rounded"
              src={preview}
              alt="preview"
              key={index}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                onDelete(index);
              }}
              className="btn position-absolute top-0 end-0  mt-2 me-2 p-1 pt-0"
            >
              <AiFillCloseCircle size={20} color="white" />
            </button>
          </div>
        ))}

        <button
          className=" bg-white"
          style={{ width: "150px", height: "150px", borderStyle: "dashed" }}
          onClick={(e) => {
            e.preventDefault();
            fileRef.current?.click();
          }}
        >
          <AiFillCamera size={40} color="#313131" />
          <p className=" fs-6">Agrega o arrastra tus fotos aquí</p>
        </button>
      </div>
    </div>
  );
}
