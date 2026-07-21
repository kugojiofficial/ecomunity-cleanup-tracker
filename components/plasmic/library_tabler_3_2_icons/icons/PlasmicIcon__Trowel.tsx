/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TrowelIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TrowelIcon(props: TrowelIconProps) {
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
          "M14.42 9.058l-5.362 5.363a1.978 1.978 0 01-3.275-.773L3.101 5.604a1.978 1.978 0 012.502-2.502l8.045 2.682a1.979 1.979 0 01.772 3.274zM10 10l6.5 6.5m2.847.075l1.08 1.079a1.96 1.96 0 01-2.773 2.772l-1.08-1.079a1.96 1.96 0 012.773-2.772z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TrowelIcon;
/* prettier-ignore-end */
