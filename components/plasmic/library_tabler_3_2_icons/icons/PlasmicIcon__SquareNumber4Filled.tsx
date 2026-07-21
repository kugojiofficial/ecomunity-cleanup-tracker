/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareNumber4FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquareNumber4FilledIcon(props: SquareNumber4FilledIconProps) {
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
        d={
          "M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005.195v12.666c0 1.96-1.537 3.56-3.472 3.662l-.195.005H5.667a3.667 3.667 0 01-3.662-3.472L2 18.333V5.667c0-1.96 1.537-3.56 3.472-3.662L5.667 2h12.666zM14 7a1 1 0 00-.993.883L13 8v3h-2V8l-.007-.117a1 1 0 00-1.986 0L9 8v3l.005.15a2 2 0 001.838 1.844L11 13h2v3l.007.117a1 1 0 001.986 0L15 16V8l-.007-.117A1 1 0 0014 7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareNumber4FilledIcon;
/* prettier-ignore-end */
