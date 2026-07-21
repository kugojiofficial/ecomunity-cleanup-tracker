/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TimelineEventPlusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TimelineEventPlusIcon(props: TimelineEventPlusIconProps) {
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
          "M10 20a2 2 0 104 0 2 2 0 00-4 0zm0 0H4m10 0h6m-8-5l-2-2H7a1 1 0 01-1-1V4a1 1 0 011-1h10a1 1 0 011 1v8a1 1 0 01-1 1h-3l-2 2zm-2-7h4m-2-2v4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TimelineEventPlusIcon;
/* prettier-ignore-end */
