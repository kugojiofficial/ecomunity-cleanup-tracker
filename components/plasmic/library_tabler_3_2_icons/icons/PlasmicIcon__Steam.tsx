/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SteamIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SteamIcon(props: SteamIconProps) {
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
          "M11 4a1 1 0 102 0 1 1 0 00-2 0zm-8 8a1 1 0 102 0 1 1 0 00-2 0zm16 0a1 1 0 102 0 1 1 0 00-2 0zm-8 8a1 1 0 102 0 1 1 0 00-2 0zM5.5 5.5l3 3m7 7l3 3m0-13l-3 3m-7 7l-3 3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SteamIcon;
/* prettier-ignore-end */
