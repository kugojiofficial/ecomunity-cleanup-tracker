/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HighlightOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HighlightOffIcon(props: HighlightOffIconProps) {
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
          "M9 9l-6 6v4h4l6-6m2-2l2.503-2.503a2.829 2.829 0 00-4-4l-2.497 2.497M12.5 5.5l4 4m-12 4l4 4M19 15h2v2m-2 2h-6l3-3M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HighlightOffIcon;
/* prettier-ignore-end */
