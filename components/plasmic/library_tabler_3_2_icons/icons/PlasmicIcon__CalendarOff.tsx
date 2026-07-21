/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CalendarOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CalendarOffIcon(props: CalendarOffIconProps) {
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
          "M9 5h9a2 2 0 012 2v9m-.184 3.839A2 2 0 0118 21H6a2 2 0 01-2-2V7a2 2 0 011.158-1.815M16 3v4M8 3v1m-4 7h7m4 0h5M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CalendarOffIcon;
/* prettier-ignore-end */
