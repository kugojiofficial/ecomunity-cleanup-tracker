/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CalendarCodeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CalendarCodeIcon(props: CalendarCodeIconProps) {
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
          "M11.5 21H6a2 2 0 01-2-2V7a2 2 0 012-2h12a2 2 0 012 2v6M16 3v4M8 3v4m-4 4h16m0 10l2-2-2-2m-3 0l-2 2 2 2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CalendarCodeIcon;
/* prettier-ignore-end */
