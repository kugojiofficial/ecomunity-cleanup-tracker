/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MushroomIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MushroomIcon(props: MushroomIconProps) {
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
          "M20 11.1C20 6.626 16.418 3 12 3s-8 3.626-8 8.1a.9.9 0 00.9.9h14.2a.9.9 0 00.9-.9zM10 12v7a2 2 0 004 0v-7"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MushroomIcon;
/* prettier-ignore-end */
