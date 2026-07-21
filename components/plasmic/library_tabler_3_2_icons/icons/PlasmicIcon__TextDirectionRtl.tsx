/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TextDirectionRtlIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TextDirectionRtlIcon(props: TextDirectionRtlIconProps) {
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
        d={"M16 4H9.5a3.5 3.5 0 100 7h.5m4 4V4m-4 11V4M5 19h14M7 21l-2-2 2-2"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TextDirectionRtlIcon;
/* prettier-ignore-end */
