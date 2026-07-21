/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ZoomQuestionFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ZoomQuestionFilledIcon(props: ZoomQuestionFilledIconProps) {
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
          "M14 3.072a8 8 0 012.32 11.834l5.387 5.387a1 1 0 01-1.414 1.414l-5.388-5.387A8 8 0 012 10l.005-.285A8 8 0 0114 3.072zM10 12a1 1 0 00-.993.883L9 13.01a1 1 0 001.993.117L11 13a1 1 0 00-1-1zM8.1 6.877a1 1 0 001.433 1.389l.088-.09A.5.5 0 1110 9a1 1 0 10-.002 2 2.5 2.5 0 10-1.9-4.123"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ZoomQuestionFilledIcon;
/* prettier-ignore-end */
