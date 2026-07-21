/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CaretLeftFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CaretLeftFilledIcon(props: CaretLeftFilledIconProps) {
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
          "M13.883 5.007l.058-.005h.118l.058.005.06.009.052.01.108.032.067.027.132.07.09.065.081.073.083.094.054.077.054.096.017.036.027.067.032.108.01.053.01.06.004.057L15 6v12c0 .852-.986 1.297-1.623.783l-.084-.076-6-6a1 1 0 01-.083-1.32l.083-.094 6-6 .094-.083.077-.054.096-.054.036-.017.067-.027.108-.032.053-.01.06-.01-.001.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CaretLeftFilledIcon;
/* prettier-ignore-end */
