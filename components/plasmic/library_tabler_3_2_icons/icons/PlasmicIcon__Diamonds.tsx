/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DiamondsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DiamondsIcon(props: DiamondsIconProps) {
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
          "M10.831 20.413l-5.375-6.91c-.608-.783-.608-2.223 0-3l5.375-6.911a1.457 1.457 0 012.338 0l5.375 6.91c.608.783.608 2.223 0 3l-5.375 6.911a1.457 1.457 0 01-2.338 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DiamondsIcon;
/* prettier-ignore-end */
