/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CreativeCommonsOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CreativeCommonsOffIcon(props: CreativeCommonsOffIconProps) {
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
        d={"M5.638 5.634a9 9 0 1012.723 12.733m1.686-2.332A9 9 0 007.954 3.958"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M10.5 10.5a2.187 2.187 0 00-2.914.116 1.927 1.927 0 000 2.768 2.188 2.188 0 002.914.116m6-3a2.193 2.193 0 00-2.309-.302M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CreativeCommonsOffIcon;
/* prettier-ignore-end */
