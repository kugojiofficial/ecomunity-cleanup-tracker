/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BombFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BombFilledIcon(props: BombFilledIconProps) {
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
          "M14.499 3.996a2.2 2.2 0 011.556.645l3.302 3.301a2.2 2.2 0 010 3.113l-.567.567.043.192a8.5 8.5 0 01-3.732 8.83l-.23.144a8.5 8.5 0 11-2.687-15.623l.192.042.567-.566a2.2 2.2 0 011.362-.636l.194-.009zM10 9a4 4 0 00-4 4 1 1 0 102 0 2 2 0 012-2 1 1 0 000-2z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M21 2a1 1 0 01.117 1.993L21 4h-1c0 .83-.302 1.629-.846 2.25L19 6.413l-1.293 1.293a1 1 0 01-1.497-1.32l.083-.094L17.586 5c.232-.232.375-.537.407-.86L18 4a2 2 0 011.85-1.995L20 2h1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BombFilledIcon;
/* prettier-ignore-end */
