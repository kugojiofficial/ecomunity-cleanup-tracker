/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Certificate2OffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Certificate2OffIcon(props: Certificate2OffIconProps) {
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
        d={"M12 12a3 3 0 103 3m-4-8h3"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M10 18v4l2-1 2 1v-4m-4 1H8a2 2 0 01-2-2V6m1.18-2.825C7.43 3.063 7.709 3 8 3h8a2 2 0 012 2v9m-.175 3.82A2 2 0 0116 19h-2M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Certificate2OffIcon;
/* prettier-ignore-end */
