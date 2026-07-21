/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SchemaOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SchemaOffIcon(props: SchemaOffIconProps) {
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
          "M6 2h4v4M6 6H5V5m10 6v-1h5v4h-2M5 18h5v4H5v-4zm0-8h5v4H5v-4zm5 2h2M7.5 7.5V10m0 4v4M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SchemaOffIcon;
/* prettier-ignore-end */
