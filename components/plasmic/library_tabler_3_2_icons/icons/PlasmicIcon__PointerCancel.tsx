/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PointerCancelIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PointerCancelIcon(props: PointerCancelIconProps) {
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
          "M15.526 12.97l-.748-.748 3.113-2.09a1.2 1.2 0 00-.309-2.228L4 4l3.904 13.563a1.2 1.2 0 002.228.308l2.09-3.093.714.714M16 19a3 3 0 106 0 3 3 0 00-6 0zm1 2l4-4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PointerCancelIcon;
/* prettier-ignore-end */
