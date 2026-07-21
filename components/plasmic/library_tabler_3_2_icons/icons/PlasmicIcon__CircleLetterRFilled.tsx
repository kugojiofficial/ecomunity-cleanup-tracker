/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CircleLetterRFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CircleLetterRFilledIcon(props: CircleLetterRFilledIconProps) {
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
          "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 5h-2a1 1 0 00-1 1v8a1 1 0 001 1l.117-.007A1 1 0 0011 16v-2.332l2.2 2.932a1 1 0 001.4.2l.096-.081A1 1 0 0014.8 15.4l-1.903-2.538.115-.037A3.001 3.001 0 0012 7zm0 2a1 1 0 110 2h-1V9h1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CircleLetterRFilledIcon;
/* prettier-ignore-end */
