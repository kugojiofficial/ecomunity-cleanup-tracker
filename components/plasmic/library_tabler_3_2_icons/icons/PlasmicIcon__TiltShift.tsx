/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TiltShiftIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TiltShiftIcon(props: TiltShiftIconProps) {
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
          "M8.56 3.69a9 9 0 00-2.92 1.95M3.69 8.56A9 9 0 003 12m.69 3.44a9 9 0 001.95 2.92m2.92 1.95A9 9 0 0012 21m3.44-.69a9 9 0 002.92-1.95m1.95-2.92A9 9 0 0021 12m-.69-3.44a9 9 0 00-1.95-2.92m-2.92-1.95A9 9 0 0012 3m-2 9a2 2 0 104 0 2 2 0 00-4 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TiltShiftIcon;
/* prettier-ignore-end */
