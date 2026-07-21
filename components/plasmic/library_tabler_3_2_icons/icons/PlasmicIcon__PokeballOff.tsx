/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PokeballOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PokeballOffIcon(props: PokeballOffIconProps) {
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
          "M20.04 16.048A9 9 0 007.957 3.958m-2.32 1.678a9 9 0 0012.737 12.719"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M9.884 9.874a3 3 0 004.24 4.246m.57-3.441a3.012 3.012 0 00-1.41-1.39M3 12h6m7 0h5M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PokeballOffIcon;
/* prettier-ignore-end */
