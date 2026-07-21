/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PresentationOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PresentationOffIcon(props: PresentationOffIconProps) {
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
          "M3 4h1m4 0h13M4 4v10a2 2 0 002 2h10m3.42-.592c.359-.362.58-.859.58-1.408V4m-8 12v4m-3 0h6m-7-8l2-2m4 0l2-2M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PresentationOffIcon;
/* prettier-ignore-end */
