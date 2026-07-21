/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Lamp2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Lamp2Icon(props: Lamp2IconProps) {
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
        d={"M5 21h9m-4 0l-7-8 8.5-5.5"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M13 14c-2.148-2.148-2.148-5.852 0-8 2.088-2.088 5.842-1.972 8 0l-8 8z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M11.742 7.574l-1.156-1.156a2 2 0 012.828-2.829l1.144 1.144M15.5 12l.208.274a2.527 2.527 0 003.556 0c.939-.933.98-2.42.122-3.4l-.366-.369"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Lamp2Icon;
/* prettier-ignore-end */
