/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RadioactiveIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RadioactiveIcon(props: RadioactiveIconProps) {
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
          "M13.5 14.6l3 5.19A9 9 0 0021 12h-6a3 3 0 01-1.5 2.6zm0-5.2l3-5.19a9 9 0 00-9 0l3 5.19a3 3 0 013 0zm-3 5.2l-3 5.19A9 9 0 013 12h6a3 3 0 001.5 2.6z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default RadioactiveIcon;
/* prettier-ignore-end */
