/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EggsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EggsIcon(props: EggsIconProps) {
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
          "M13 22c-3 0-4.868-2.118-5-5 0-3 2-5 5-5 4 0 8.01 2.5 8 5 0 2.5-4 5-8 5z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M8 18c-3.03-.196-5-2.309-5-5.38C3 8.313 5.75 3.995 8.5 4c2.614 0 5.248 3.915 5.5 8"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default EggsIcon;
/* prettier-ignore-end */
