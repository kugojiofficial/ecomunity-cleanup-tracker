/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ZoomQuestionIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ZoomQuestionIcon(props: ZoomQuestionIconProps) {
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
          "M3 10a7 7 0 1014 0 7 7 0 00-14 0zm18 11l-6-6m-5-2v.01M10 10a1.5 1.5 0 10-1.14-2.474"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ZoomQuestionIcon;
/* prettier-ignore-end */
