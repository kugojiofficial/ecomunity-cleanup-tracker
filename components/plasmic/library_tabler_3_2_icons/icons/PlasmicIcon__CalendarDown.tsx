/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CalendarDownIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CalendarDownIcon(props: CalendarDownIconProps) {
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
          "M12.5 21H6a2 2 0 01-2-2V7a2 2 0 012-2h12a2 2 0 012 2v5m-1 4v6m3-3l-3 3-3-3m0-16v4M8 3v4m-4 4h16"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CalendarDownIcon;
/* prettier-ignore-end */
