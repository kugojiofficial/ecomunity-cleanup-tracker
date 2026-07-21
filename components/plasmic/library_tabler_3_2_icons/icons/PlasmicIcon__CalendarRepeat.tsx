/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CalendarRepeatIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CalendarRepeatIcon(props: CalendarRepeatIconProps) {
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
          "M12.5 21H6a2 2 0 01-2-2V7a2 2 0 012-2h12a2 2 0 012 2v3m-4-7v4M8 3v4m-4 4h12m4 3l2 2h-3m1 2l2-2m-3 0a3 3 0 102 5.236"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CalendarRepeatIcon;
/* prettier-ignore-end */
