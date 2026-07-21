/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CarouselVerticalFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CarouselVerticalFilledIcon(
  props: CarouselVerticalFilledIconProps
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
          "M18 6H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2zm-2 13a2 2 0 011.995 1.85L18 21v1a1 1 0 01-1.993.117L16 22v-1H8v1a1 1 0 01-1.993.117L6 22v-1a2 2 0 011.85-1.995L8 19h8zm1-18a1 1 0 01.993.883L18 2v1a2 2 0 01-1.85 1.995L16 5H8a2 2 0 01-1.995-1.85L6 3V2a1 1 0 011.993-.117L8 2v1h8V2a1 1 0 011-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CarouselVerticalFilledIcon;
/* prettier-ignore-end */
