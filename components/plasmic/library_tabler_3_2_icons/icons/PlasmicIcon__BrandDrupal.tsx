/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandDrupalIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandDrupalIcon(props: BrandDrupalIconProps) {
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
        d={"M12 2c0 4.308-7 6-7 12a7 7 0 1014 0c0-6-7-7.697-7-12z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M12 11.33a65.832 65.832 0 01-2.012 2.023C8.988 14.31 8 15.32 8 17c0 2.17 1.79 4 4 4s4-1.827 4-4c0-1.676-.989-2.685-1.983-3.642-.42-.404-2.259-2.357-5.517-5.858l3.5 3.83z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandDrupalIcon;
/* prettier-ignore-end */
