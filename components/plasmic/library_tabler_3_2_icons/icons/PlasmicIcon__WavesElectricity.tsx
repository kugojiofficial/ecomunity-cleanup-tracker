/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WavesElectricityIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WavesElectricityIcon(props: WavesElectricityIconProps) {
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
          "M3 12c.576-.643 1.512-1.017 2.5-1 .988-.017 1.924.357 2.5 1 .576.643 1.512 1.017 2.5 1 .988.017 1.924-.357 2.5-1M3 16c.576-.643 1.512-1.017 2.5-1 .988-.017 1.924.357 2.5 1 .576.643 1.512 1.017 2.5 1 .988.017 1.924-.357 2.5-1M3 8c.576-.643 1.512-1.017 2.5-1 .988-.017 1.924.357 2.5 1 .576.643 1.512 1.017 2.5 1 .988.017 1.924-.357 2.5-1m7-1l-3 5h4l-3 5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default WavesElectricityIcon;
/* prettier-ignore-end */
