/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TimeDuration30IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TimeDuration30Icon(props: TimeDuration30IconProps) {
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
          "M14 10.5v3a1.5 1.5 0 103 0v-3a1.5 1.5 0 10-3 0zM8 9h1.5a1.5 1.5 0 010 3m0 0H9m.5 0a1.5 1.5 0 110 3H8m-5-3v.01M7.5 4.2v.01m0 15.59v.01M4.2 16.5v.01m0-9.01v.01M12 21a9 9 0 000-18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TimeDuration30Icon;
/* prettier-ignore-end */
