/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TreadmillIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TreadmillIcon(props: TreadmillIconProps) {
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
          "M10 3a1 1 0 102 0 1 1 0 00-2 0zM3 14l4 1 .5-.5M12 18v-3l-3-2.923L9.75 7"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M6 10V8l4-1 2.5 2.5 2.5.5m6 12a1 1 0 00-1-1H4a1 1 0 00-1 1m15-1l1-11 2-1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TreadmillIcon;
/* prettier-ignore-end */
