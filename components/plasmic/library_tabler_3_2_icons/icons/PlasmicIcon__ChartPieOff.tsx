/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChartPieOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChartPieOffIcon(props: ChartPieOffIconProps) {
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
          "M5.63 5.643a9 9 0 1012.742 12.715m1.674-2.29c.335-.656.588-1.35.754-2.068a1 1 0 00-1-1H17m-4 0a2 2 0 01-2-2m0-4V4a.899.899 0 00-1-.8 9 9 0 00-2.057.749M15 3.5A9 9 0 0120.5 9H16a1 1 0 01-1-1V3.5zM3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ChartPieOffIcon;
/* prettier-ignore-end */
