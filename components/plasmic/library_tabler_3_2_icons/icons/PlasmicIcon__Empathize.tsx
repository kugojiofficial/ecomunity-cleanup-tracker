/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EmpathizeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EmpathizeIcon(props: EmpathizeIconProps) {
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
          "M9.5 5.5a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0zM12 21.368l5.095-5.096a3.089 3.089 0 10-4.367-4.367l-.728.727-.728-.727a3.089 3.089 0 10-4.367 4.367L12 21.368z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default EmpathizeIcon;
/* prettier-ignore-end */
