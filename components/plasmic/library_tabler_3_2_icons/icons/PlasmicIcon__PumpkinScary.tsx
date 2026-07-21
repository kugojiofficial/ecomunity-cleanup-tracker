/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PumpkinScaryIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PumpkinScaryIcon(props: PumpkinScaryIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M9 15l1.5 1 1.5-1 1.5 1 1.5-1m-5-4h.01M14 11h.01"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M17 6.082c2.609.588 3.627 4.162 2.723 7.983-.903 3.82-2.75 6.44-5.359 5.853a3.355 3.355 0 01-.774-.279c-.497.236-1.04.36-1.59.361-.556 0-1.09-.127-1.59-.362-.245.125-.505.22-.774.28-2.609.588-4.456-2.033-5.36-5.853-.903-3.82.115-7.395 2.724-7.983 1.085-.244 1.575.066 2.585.787C10.301 6.315 11.125 6 12 6c.876 0 1.699.315 2.415.87 1.01-.722 1.5-1.032 2.585-.788z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M12 6c0-1.226.693-2.346 1.789-2.894L14 3"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PumpkinScaryIcon;
/* prettier-ignore-end */
