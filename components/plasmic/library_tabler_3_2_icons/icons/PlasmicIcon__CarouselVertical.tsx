/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CarouselVerticalIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CarouselVerticalIcon(props: CarouselVerticalIconProps) {
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
          "M19 8v8a1 1 0 01-1 1H6a1 1 0 01-1-1V8a1 1 0 011-1h12a1 1 0 011 1zM7 22v-1a1 1 0 011-1h8a1 1 0 011 1v1m0-20v1a1 1 0 01-1 1H8a1 1 0 01-1-1V2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CarouselVerticalIcon;
/* prettier-ignore-end */
