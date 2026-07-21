/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShovelIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShovelIcon(props: ShovelIconProps) {
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
          "M17 4l3 3m-1.5-1.5l-8 8m-2.224-2.216l4.44 4.44a.97.97 0 010 1.369l-2.704 2.704a4.108 4.108 0 01-5.809-5.81l2.704-2.703a.968.968 0 011.37 0h-.001z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ShovelIcon;
/* prettier-ignore-end */
