/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UfoOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UfoOffIcon(props: UfoOffIconProps) {
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
          "M16.95 9.01c3.02.739 5.05 2.123 5.05 3.714 0 1.08-.931 2.063-2.468 2.814m-3 1c-1.36.295-2.9.462-4.531.462-5.52 0-10-1.909-10-4.276 0-1.59 2.04-2.985 5.07-3.724"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M14.69 10.686C16.078 10.331 17 9.71 17 9v-.035C17 6.223 14.761 4 12 4c-1.125 0-2.164.37-3 .992M7.293 7.289A4.925 4.925 0 007 8.965V9c0 .961 1.696 1.764 3.956 1.956M15 17l2 3m-8.5-3L7 20m5-6h.01M7 13h.01M17 13h.01M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default UfoOffIcon;
/* prettier-ignore-end */
