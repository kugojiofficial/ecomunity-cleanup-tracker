/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type View360NumberIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function View360NumberIcon(props: View360NumberIconProps) {
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
          "M14 6a1 1 0 00-1-1h-2a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 00-1-1h-3M3 5h2.5A1.5 1.5 0 017 6.5v1A1.5 1.5 0 015.5 9m0 0H4m1.5 0A1.5 1.5 0 017 10.5v1A1.5 1.5 0 015.5 13H3m14-6v4a2 2 0 004 0V7a2 2 0 10-4 0zM3 16c0 1.657 4.03 3 9 3s9-1.343 9-3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default View360NumberIcon;
/* prettier-ignore-end */
