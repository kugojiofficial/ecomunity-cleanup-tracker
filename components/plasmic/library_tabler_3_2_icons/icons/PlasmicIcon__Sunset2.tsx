/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Sunset2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Sunset2Icon(props: Sunset2IconProps) {
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
          "M3 13h1m16 0h1M5.6 6.6l.7.7m12.1-.7l-.7.7M8 13a4 4 0 118 0M3 17h18M7 20h5m4 0h1M12 5V4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Sunset2Icon;
/* prettier-ignore-end */
