/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareF7FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquareF7FilledIcon(props: SquareF7FilledIconProps) {
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
          "M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005.195v12.666c0 1.96-1.537 3.56-3.472 3.662l-.195.005H5.667a3.667 3.667 0 01-3.662-3.472L2 18.333V5.667c0-1.96 1.537-3.56 3.472-3.662L5.667 2h12.666zM16 8h-3l-.117.007A1 1 0 0012 9l.007.117A1 1 0 0013 10h1.718l-1.188 4.757-.022.115a1 1 0 001.962.37l1.5-6 .021-.11A1 1 0 0016 8zm-6 0H8l-.117.007A1 1 0 007 9v6l.007.117A1 1 0 008 16l.117-.007A1 1 0 009 15v-2h1l.117-.007A1 1 0 0010 11H9v-1h1l.117-.007A1 1 0 0010 8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareF7FilledIcon;
/* prettier-ignore-end */
