/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareAsteriskFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquareAsteriskFilledIcon(props: SquareAsteriskFilledIconProps) {
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
          "M19 2a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h14zm-7 5.5a1 1 0 00-1 1v1.631l-1.445-.963-.101-.06a1 1 0 00-1.009 1.724L10.195 12l-1.75 1.169-.093.07a1 1 0 001.203 1.594L11 13.868V15.5l.007.117A1 1 0 0013 15.5v-1.631l1.445.963.101.06a1 1 0 001.009-1.724l-1.752-1.169 1.752-1.167.093-.07a1 1 0 00-1.203-1.594L13 10.13V8.5l-.007-.117A1 1 0 0012 7.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareAsteriskFilledIcon;
/* prettier-ignore-end */
