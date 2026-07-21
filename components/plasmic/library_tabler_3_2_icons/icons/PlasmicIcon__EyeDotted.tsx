/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EyeDottedIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EyeDottedIcon(props: EyeDottedIconProps) {
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
          "M10 12a2 2 0 104 0 2 2 0 00-4 0zm11 0h.01M3 12h.01M5 15h.01M5 9h.01M19 15h.01M12 18h.01M12 6h.01M8 17h.01M8 7h.01M16 17h.01M16 7h.01M19 9h.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default EyeDottedIcon;
/* prettier-ignore-end */
