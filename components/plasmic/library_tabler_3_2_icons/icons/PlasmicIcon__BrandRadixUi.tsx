/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandRadixUiIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandRadixUiIcon(props: BrandRadixUiIconProps) {
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
          "M14 5.5a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0zM6 3h5v5H6V3zm5 8v10a5 5 0 01-.217-9.995L11 11z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandRadixUiIcon;
/* prettier-ignore-end */
