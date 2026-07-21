/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WindElectricityIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WindElectricityIcon(props: WindElectricityIconProps) {
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
          "M20 7l-3 5h4l-3 5M3 16h4a2 2 0 110 4m-4-8h8a2 2 0 000-4M3 8h3a2 2 0 100-4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default WindElectricityIcon;
/* prettier-ignore-end */
