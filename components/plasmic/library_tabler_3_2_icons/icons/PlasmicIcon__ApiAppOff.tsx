/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ApiAppOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ApiAppOffIcon(props: ApiAppOffIconProps) {
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
          "M12 15H5.5a2.5 2.5 0 010-5H6m9 5v3.5a2.5 2.5 0 01-5 0V18m3-9h5.5a2.5 2.5 0 010 5H18m-9-2V9m.042-3.957A2.5 2.5 0 0114 5.5V6M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ApiAppOffIcon;
/* prettier-ignore-end */
