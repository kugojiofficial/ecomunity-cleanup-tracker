/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquaresFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquaresFilledIcon(props: SquaresFilledIconProps) {
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
        d={"M19 7a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9a3 3 0 013-3h9z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M14 2a3 3 0 013 2.999L10 5a5 5 0 00-5 5l-.001 7-.175-.005A3 3 0 012 14V5a3 3 0 013-3h9z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquaresFilledIcon;
/* prettier-ignore-end */
