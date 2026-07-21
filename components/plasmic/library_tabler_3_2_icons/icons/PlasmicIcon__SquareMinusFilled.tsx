/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareMinusFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquareMinusFilledIcon(props: SquareMinusFilledIconProps) {
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
          "M19 2a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h14zm-4 9H9l-.117.007A1 1 0 009 13h6l.117-.007A1 1 0 0015 11z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareMinusFilledIcon;
/* prettier-ignore-end */
