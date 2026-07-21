/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HomeQuestionIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HomeQuestionIcon(props: HomeQuestionIconProps) {
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
        d={"M20.136 11.136L12 3l-9 9h2v7a2 2 0 002 2h7"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M9 21v-6a2 2 0 012-2h2c.467 0 .896.16 1.236.428M19 22v.01M19 19a2 2 0 10-.377-3.961 1.98 1.98 0 00-1.123.662"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HomeQuestionIcon;
/* prettier-ignore-end */
