/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DirectionsOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DirectionsOffIcon(props: DirectionsOffIconProps) {
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
          "M12 21v-4m0-4v-1m0-7V3m-2 18h4M8 8v1h1m4 0h6l2-2-2-2H9m5 9v3H6l-2-2 2-2h7M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DirectionsOffIcon;
/* prettier-ignore-end */
