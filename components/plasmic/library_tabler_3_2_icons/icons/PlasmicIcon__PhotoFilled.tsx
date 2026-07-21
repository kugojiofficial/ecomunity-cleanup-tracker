/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhotoFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhotoFilledIcon(props: PhotoFilledIconProps) {
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
          "M8.813 11.612c.457-.38.918-.38 1.386.011l.108.098 4.986 4.986.094.083a1 1 0 001.403-1.403l-.083-.094L15.415 14l.292-.293.106-.095c.457-.38.918-.38 1.386.011l.108.098 4.674 4.675a4 4 0 01-3.775 3.599L18 22H6a4 4 0 01-3.98-3.603l6.687-6.69.106-.095zM18 2a4 4 0 013.995 3.8L22 6v9.585l-3.293-3.292-.15-.137c-1.256-1.095-2.85-1.097-4.096-.017l-.154.14-.307.306-2.293-2.292-.15-.137c-1.256-1.095-2.85-1.097-4.096-.017l-.154.14L2 15.585V6a4 4 0 013.8-3.995L6 2h12zm-2.99 5l-.127.007a1 1 0 000 1.986L15 9l.127-.007a1 1 0 000-1.986L15.01 7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PhotoFilledIcon;
/* prettier-ignore-end */
