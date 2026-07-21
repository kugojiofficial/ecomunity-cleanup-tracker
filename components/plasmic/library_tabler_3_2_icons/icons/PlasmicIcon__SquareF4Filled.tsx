/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareF4FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquareF4FilledIcon(props: SquareF4FilledIconProps) {
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
          "M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005.195v12.666c0 1.96-1.537 3.56-3.472 3.662l-.195.005H5.667a3.667 3.667 0 01-3.662-3.472L2 18.333V5.667c0-1.96 1.537-3.56 3.472-3.662L5.667 2h12.666zM16 8a1 1 0 00-.993.883L15 9v2h-1V9l-.007-.117a1 1 0 00-1.986 0L12 9v2l.005.15a2 2 0 001.838 1.844L14 13h1v2l.007.117a1 1 0 001.986 0L17 15V9l-.007-.117A1 1 0 0016 8zm-6 0H8l-.117.007a1 1 0 00-.876.876L7 9v6l.007.117a1 1 0 00.876.876L8 16l.117-.007a1 1 0 00.876-.876L9 15v-2h1l.117-.007a1 1 0 000-1.986L10 11H9v-1h1l.117-.007a1 1 0 000-1.986L10 8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareF4FilledIcon;
/* prettier-ignore-end */
