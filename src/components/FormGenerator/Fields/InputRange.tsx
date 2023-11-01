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
  watch: any;
  customChange: any;
}

const STEP = 1;
const MIN = 0;

export default function InputRange({
  label,
  name,
  error,
  maxRange = 10,
  setValue,
  register,
  required,
  customChange,
  watch,
}: Props) {
  const values: any = watch();
  const MAX = maxRange;

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
          values={[values[name]] || [0]}
          onChange={(valuesChange) => {
            setValue(name, valuesChange[0]);
            customChange({ setValue, newValue: valuesChange[0], values });
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
                    values: [values[name]] || [0],
                    colors: ["#C3286D", "#ccc"],
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
                color: isDragged ? "#C3286D" : "inherit",
              }}
            >
              {values[name] || [0]}
            </div>
          )}
        />
      </div>
    </div>
  );
}
