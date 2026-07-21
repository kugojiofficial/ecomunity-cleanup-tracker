/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GlassChampagneIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GlassChampagneIcon(props: GlassChampagneIconProps) {
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
          "M9 21h6m-3-5v5M8 5c0 .53.421 1.04 1.172 1.414C9.922 6.79 10.939 7 12 7c1.06 0 2.078-.21 2.828-.586C15.578 6.04 16 5.53 16 5c0-.53-.421-1.04-1.172-1.414C14.078 3.21 13.061 3 12 3c-1.06 0-2.078.21-2.828.586C8.422 3.96 8 4.47 8 5z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M8 5c0 6.075 1.79 11 4 11s4-4.925 4-11"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default GlassChampagneIcon;
/* prettier-ignore-end */
