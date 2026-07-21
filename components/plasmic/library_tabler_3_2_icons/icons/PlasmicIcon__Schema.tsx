/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SchemaIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SchemaIcon(props: SchemaIconProps) {
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
          "M5 2h5v4H5V2zm10 8h5v4h-5v-4zM5 18h5v4H5v-4zm0-8h5v4H5v-4zm5 2h5M7.5 6v4m0 4v4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SchemaIcon;
/* prettier-ignore-end */
