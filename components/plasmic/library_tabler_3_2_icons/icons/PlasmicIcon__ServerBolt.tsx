/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ServerBoltIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ServerBoltIcon(props: ServerBoltIconProps) {
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
          "M3 7a3 3 0 013-3h12a3 3 0 013 3v2a3 3 0 01-3 3H6a3 3 0 01-3-3V7zm12 13H6a3 3 0 01-3-3v-2a3 3 0 013-3h12M7 8v.01M7 16v.01M20 15l-2 3h3l-2 3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ServerBoltIcon;
/* prettier-ignore-end */
