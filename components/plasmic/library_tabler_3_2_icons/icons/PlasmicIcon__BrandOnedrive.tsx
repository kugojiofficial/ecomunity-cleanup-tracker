/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandOnedriveIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandOnedriveIcon(props: BrandOnedriveIconProps) {
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
          "M18.456 10.45a6.45 6.45 0 00-12-2.151 4.857 4.857 0 00-3.92 7.063 4.857 4.857 0 004.716 2.622h10.751a3.771 3.771 0 003.048-6.269 3.772 3.772 0 00-2.596-1.263l.001-.002z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandOnedriveIcon;
/* prettier-ignore-end */
