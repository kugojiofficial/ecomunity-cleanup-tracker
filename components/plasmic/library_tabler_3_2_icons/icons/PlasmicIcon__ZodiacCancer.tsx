/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ZodiacCancerIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ZodiacCancerIcon(props: ZodiacCancerIconProps) {
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
        d={"M3 12a3 3 0 106 0 3 3 0 00-6 0zm12 0a3 3 0 106 0 3 3 0 00-6 0z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M3 12c-.148-1.124.157-2.254.885-3.278.728-1.025 1.854-1.908 3.266-2.564 1.413-.656 3.064-1.062 4.79-1.177 1.727-.115 3.47.064 5.059.519m4 6.5c.148 1.124-.157 2.254-.885 3.278-.728 1.025-1.854 1.908-3.266 2.564-1.413.656-3.064 1.062-4.79 1.177A14.92 14.92 0 017 18.5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ZodiacCancerIcon;
/* prettier-ignore-end */
