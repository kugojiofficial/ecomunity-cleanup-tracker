/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShieldDownIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShieldDownIcon(props: ShieldDownIconProps) {
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
          "M12.444 20.876c-.147.044-.295.085-.444.124A12 12 0 013.5 6 12 12 0 0012 3a12 12 0 008.5 3 12 12 0 01.117 6.343M19 16v6m3-3l-3 3-3-3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ShieldDownIcon;
/* prettier-ignore-end */
