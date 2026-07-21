/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CarouselHorizontalFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CarouselHorizontalFilledIcon(
  props: CarouselHorizontalFilledIconProps
) {
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
          "M16 4H8a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2zm6 2a1 1 0 01.117 1.993L22 8h-1v8h1a1 1 0 01.117 1.993L22 18h-1a2 2 0 01-1.995-1.85L19 16V8a2 2 0 011.85-1.995L21 6h1zM3 6a2 2 0 011.995 1.85L5 8v8a2 2 0 01-1.85 1.995L3 18H2a1 1 0 01-.117-1.993L2 16h1V8H2a1 1 0 01-.117-1.993L2 6h1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CarouselHorizontalFilledIcon;
/* prettier-ignore-end */
