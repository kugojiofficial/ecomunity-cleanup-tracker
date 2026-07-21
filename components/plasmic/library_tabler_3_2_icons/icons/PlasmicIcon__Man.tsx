/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ManIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ManIcon(props: ManIconProps) {
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
          "M10 16v5m4-5v5M9 9h6l-1 7h-4L9 9zm-4 2c1.333-1.333 2.667-2 4-2m10 2c-1.333-1.333-2.667-2-4-2m-5-5a2 2 0 104 0 2 2 0 00-4 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ManIcon;
/* prettier-ignore-end */
