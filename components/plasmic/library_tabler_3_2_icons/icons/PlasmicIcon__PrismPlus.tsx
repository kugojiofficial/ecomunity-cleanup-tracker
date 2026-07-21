/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PrismPlusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PrismPlusIcon(props: PrismPlusIconProps) {
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
          "M12 9v13m1.02-.345a1.7 1.7 0 01-2.04 0L5 17.17a2.5 2.5 0 01-1-2V4a1 1 0 011-1h14a1 1 0 011 1v8"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M4.3 3.3l6.655 5.186a1.7 1.7 0 002.09 0L19.7 3.3M16 19h6m-3-3v6"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PrismPlusIcon;
/* prettier-ignore-end */
