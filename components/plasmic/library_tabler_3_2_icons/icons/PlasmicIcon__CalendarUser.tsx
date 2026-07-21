/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CalendarUserIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CalendarUserIcon(props: CalendarUserIconProps) {
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
          "M12 21H6a2 2 0 01-2-2V7a2 2 0 012-2h12a2 2 0 012 2v4.5M16 3v4M8 3v4m-4 4h16m-3 6a2 2 0 104 0 2 2 0 00-4 0zm5 5a2 2 0 00-2-2h-2a2 2 0 00-2 2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CalendarUserIcon;
/* prettier-ignore-end */
