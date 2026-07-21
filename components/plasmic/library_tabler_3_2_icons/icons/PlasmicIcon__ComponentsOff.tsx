/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ComponentsOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ComponentsOffIcon(props: ComponentsOffIconProps) {
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
          "M3 12l3 3 3-3-3-3-3 3zm15.5 2.5L21 12l-3-3-2.5 2.5m-3.001-2.999L15 6l-3-3-2.5 2.5M9 18l3 3 3-3-3-3-3 3zM3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ComponentsOffIcon;
/* prettier-ignore-end */
