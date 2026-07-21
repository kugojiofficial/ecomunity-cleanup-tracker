/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Armchair2OffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Armchair2OffIcon(props: Armchair2OffIconProps) {
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
          "M5 10V6a3 3 0 01.128-.869m2.038-2.013C7.43 3.04 7.71 3 8 3h8a3 3 0 013 3v4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M16.124 12.145a3 3 0 113.756 3.724M19 19H5v-3a3 3 0 113-3v2m0-3h4m-5 7v2m10-2v2M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Armchair2OffIcon;
/* prettier-ignore-end */
