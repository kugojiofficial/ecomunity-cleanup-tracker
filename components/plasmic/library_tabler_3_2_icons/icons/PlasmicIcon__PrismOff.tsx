/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PrismOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PrismOffIcon(props: PrismOffIconProps) {
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
          "M12 12v10m5.957-4.048l-4.937 3.703a1.7 1.7 0 01-2.04 0L5 17.17a2.5 2.5 0 01-1-2V4m3-1h12a1 1 0 011 1v11.17c0 .25-.037.495-.109.729"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M12.688 8.7a1.7 1.7 0 00.357-.214L19.7 3.3M3 3l18 18"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PrismOffIcon;
/* prettier-ignore-end */
