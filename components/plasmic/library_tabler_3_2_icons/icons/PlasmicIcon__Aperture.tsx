/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ApertureIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ApertureIcon(props: ApertureIconProps) {
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
          "M3 12a9 9 0 1018.001 0A9 9 0 003 12zm.6 3h10.55M6.551 4.938l3.26 10.034m7.221-10.336l-8.535 6.201m12.062 3.673l-8.535-6.201m.233 12.607l3.261-10.034"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ApertureIcon;
/* prettier-ignore-end */
