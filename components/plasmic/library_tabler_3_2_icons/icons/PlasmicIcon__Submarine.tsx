/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SubmarineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SubmarineIcon(props: SubmarineIconProps) {
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
          "M3 11v6h2l1-1.5L9 17h10a3 3 0 000-6H9l-3 1.5L5 11H3zm14 0l-1-3h-5l-1 3m3-3V6a1 1 0 011-1h1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SubmarineIcon;
/* prettier-ignore-end */
