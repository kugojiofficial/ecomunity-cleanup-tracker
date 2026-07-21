/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CalendarQuestionIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CalendarQuestionIcon(props: CalendarQuestionIconProps) {
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
          "M15 21H6a2 2 0 01-2-2V7a2 2 0 012-2h12a2 2 0 012 2v4m-4-8v4M8 3v4m-4 4h16m-1 11v.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M19 19a2.003 2.003 0 00.914-3.782 1.98 1.98 0 00-2.414.483"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CalendarQuestionIcon;
/* prettier-ignore-end */
