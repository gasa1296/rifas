import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";
interface Props {
  register: any;
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  maxRange?: number;
  setValue: any;
}

const STEP = 1;
const MIN = 0;

export default function InputSliser({
  label,
  name,
  error,
  maxRange = 10,
  setValue,
  register,
  required,
}: Props) {
  const MAX = maxRange;
  const [range, setRange] = useState([0]);
  return (
    <div className="my-3">
      <label
        className={`form-check-label fw-bold ps-2 fs-6 my-2  ${
          error && "text-danger "
        }`}
        htmlFor={name}
      >
        {label}
      </label>
      <div className="mx-4">
        <Range
          {...register(name, { required })}
          values={range}
          onChange={(values) => {
            setValue(name, values[0]);
            setRange(values);
          }}
          step={STEP}
          min={MIN}
          max={MAX}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: "36px",
                display: "flex",
                width: "100%",
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: "5px",
                  width: "100%",
                  borderRadius: "4px",
                  background: getTrackBackground({
                    values: range,
                    colors: ["#548BF4", "#ccc"],
                    min: MIN,
                    max: MAX,
                  }),
                  alignSelf: "center",
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "42px",
                width: "50px",
                borderRadius: "4px",
                backgroundColor: "#FFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 2px 6px #AAA",
                color: isDragged ? "#548BF4" : "inherit",
              }}
            >
              {range[0]}
            </div>
          )}
        />
      </div>
    </div>
  );
}
