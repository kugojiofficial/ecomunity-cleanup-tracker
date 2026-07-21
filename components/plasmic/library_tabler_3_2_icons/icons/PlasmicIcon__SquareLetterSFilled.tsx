/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareLetterSFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquareLetterSFilledIcon(props: SquareLetterSFilledIconProps) {
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
          "M19 2a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h14zm-6 5h-2a2 2 0 00-2 2v2a2 2 0 002 2h2v2h-2a1 1 0 00-2 0 2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2V9h2l.007.117A1 1 0 0015 9a2 2 0 00-2-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareLetterSFilledIcon;
/* prettier-ignore-end */
