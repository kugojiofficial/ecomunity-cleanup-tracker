/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MaskOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MaskOffIcon(props: MaskOffIconProps) {
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
          "M19.42 19.41A1.999 1.999 0 0118 20H6a2 2 0 01-2-2V6c0-.554.225-1.055.588-1.417M8 4h10a2 2 0 012 2v10"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M9.885 9.872a3 3 0 104.245 4.24m.582-3.396a3.012 3.012 0 00-1.438-1.433M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MaskOffIcon;
/* prettier-ignore-end */
