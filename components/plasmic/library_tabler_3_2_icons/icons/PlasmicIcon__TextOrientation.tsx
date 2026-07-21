/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TextOrientationIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TextOrientationIcon(props: TextOrientationIconProps) {
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
          "M9 15l-5-5C2.633 8.633 2.633 6.367 4 5s3.633-1.367 5 0l5 5m-8.5 1.5l5-5M21 12l-9 9m9-9v4m0-4h-4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TextOrientationIcon;
/* prettier-ignore-end */
