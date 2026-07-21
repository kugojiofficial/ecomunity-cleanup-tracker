/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Flask2OffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Flask2OffIcon(props: Flask2OffIconProps) {
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
          "M6.1 15H15m2.742 2.741A6 6 0 0115.318 21H8.683A6 6 0 0110 10.34v-.326M10 6V3h4v7m.613.598a6 6 0 012.801 2.817M9 3h6M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Flask2OffIcon;
/* prettier-ignore-end */
