/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MoonStarsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MoonStarsIcon(props: MoonStarsIconProps) {
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
          "M12 3h.393a7.5 7.5 0 007.92 12.446A9 9 0 1112 2.992V3zm5 1a2 2 0 002 2 2 2 0 00-2 2 2 2 0 00-2-2 2 2 0 002-2zm2 7h2m-1-1v2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MoonStarsIcon;
/* prettier-ignore-end */
