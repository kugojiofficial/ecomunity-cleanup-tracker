/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareNumber0FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquareNumber0FilledIcon(props: SquareNumber0FilledIconProps) {
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
          "M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005.195v12.666c0 1.96-1.537 3.56-3.472 3.662l-.195.005H5.667a3.667 3.667 0 01-3.662-3.472L2 18.333V5.667c0-1.96 1.537-3.56 3.472-3.662L5.667 2h12.666zM12 7a3 3 0 00-2.995 2.824L9 10v4l.005.176a3 3 0 005.99 0L15 14v-4l-.005-.176A3 3 0 0012 7zm0 2a1 1 0 01.993.883L13 10v4l-.007.117a1 1 0 01-1.986 0L11 14v-4l.007-.117A1 1 0 0112 9z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareNumber0FilledIcon;
/* prettier-ignore-end */
