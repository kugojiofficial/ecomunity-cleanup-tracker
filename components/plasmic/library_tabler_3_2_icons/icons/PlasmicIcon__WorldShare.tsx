/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WorldShareIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WorldShareIcon(props: WorldShareIconProps) {
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
          "M20.94 13.045A9 9 0 1011.987 21M3.6 9h16.8M3.6 15H13M11.5 3a17 17 0 000 18m1-18a16.99 16.99 0 012.529 10.294M16 22l5-5m0 4.5V17h-4.5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default WorldShareIcon;
/* prettier-ignore-end */
