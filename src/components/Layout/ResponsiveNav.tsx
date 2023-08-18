import React, { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/router";

interface Props {
  selectOptions: { label: string; path: string; onClick?: () => void }[];
}
export default function ResponsiveNav({ selectOptions }: Props) {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  return (
    <div>
      <AiOutlineMenu
        className="d-flex d-md-none position-absolute top-0 end-0 mx-4 mt-4"
        size={28}
        style={{ cursor: "pointer" }}
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div className="home-navbar d-md-none position-absolute z-1 flex-column w-100 py-2 text-center top-75 start-0 mt-3  bg-light  shadow p-3 mb-5 bg-body-tertiary">
          <ul className="  list-unstyled text-secondary align-items-center justify-content-center m-0">
            {selectOptions.map((option, index) => (
              <li
                key={index}
                className=" mx-4 my-2 cursor-pointer"
                onClick={() =>
                  option.onClick ? option.onClick() : router.push(option.path)
                }
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
