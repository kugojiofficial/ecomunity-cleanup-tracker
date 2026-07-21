/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CreativeCommonsByIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CreativeCommonsByIcon(props: CreativeCommonsByIconProps) {
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
        d={"M3 12a9 9 0 1018.001 0A9 9 0 003 12z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M11 7a1 1 0 102 0 1 1 0 00-2 0zm-2 6v-1a1 1 0 011-1h4a1 1 0 011 1v1a1 1 0 01-1 1h-.5l-.5 4h-2l-.5-4H10a1 1 0 01-1-1z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CreativeCommonsByIcon;
/* prettier-ignore-end */
