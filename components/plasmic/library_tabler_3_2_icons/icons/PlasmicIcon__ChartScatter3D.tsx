/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChartScatter3DIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChartScatter3DIcon(props: ChartScatter3DIconProps) {
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
          "M3 20l9-7m0-10v10l9 7m-4-8v.015m0-8v.015m4 3.985v.015m-9 10.985v.015m-9-7.015v.015m4-4.015v.015M3 4.015v.015"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ChartScatter3DIcon;
/* prettier-ignore-end */
