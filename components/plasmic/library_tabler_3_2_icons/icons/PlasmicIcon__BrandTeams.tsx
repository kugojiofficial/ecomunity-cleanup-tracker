/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandTeamsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandTeamsIcon(props: BrandTeamsIconProps) {
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
        d={"M3 7h10v10H3V7zm3 3h4m-2 0v4"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M8.104 17c.47 2.274 2.483 4 4.896 4a5 5 0 005-5V9h-5m5 9a4 4 0 004-4V9h-4m-4.997-.17a3 3 0 10-1.833-1.833m4.66 1.363a2.5 2.5 0 10.594-4.117"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandTeamsIcon;
/* prettier-ignore-end */
