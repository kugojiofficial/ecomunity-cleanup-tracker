/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LanguageHiraganaIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LanguageHiraganaIcon(props: LanguageHiraganaIconProps) {
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
        d={"M4 5h7M7 4c0 4.846 0 7 .5 8"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M10 8.5c0 2.286-2 4.5-3.5 4.5S4 11.865 4 11c0-2 1-3 3-3s5 .57 5 2.857c0 1.524-.667 2.571-2 3.143m2 6l4-9 4 9m-.9-2h-6.2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LanguageHiraganaIcon;
/* prettier-ignore-end */
