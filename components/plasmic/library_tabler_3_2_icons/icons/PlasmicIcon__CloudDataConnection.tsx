/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CloudDataConnectionIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CloudDataConnectionIcon(props: CloudDataConnectionIconProps) {
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
          "M5 9.897c0-1.714 1.46-3.104 3.26-3.104.275-1.22 1.255-2.215 2.572-2.611 1.317-.397 2.77-.134 3.811.69 1.042.822 1.514 2.08 1.239 3.3h.693A2.42 2.42 0 0119 10.586 2.42 2.42 0 0116.575 13H8.26C6.46 13 5 11.61 5 9.897zM12 13v3m-2 2a2 2 0 104 0 2 2 0 00-4 0zm4 0h7M3 18h7"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CloudDataConnectionIcon;
/* prettier-ignore-end */
