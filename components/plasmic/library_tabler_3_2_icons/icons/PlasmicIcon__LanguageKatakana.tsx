/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LanguageKatakanaIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LanguageKatakanaIcon(props: LanguageKatakanaIconProps) {
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
          "M5 5h6.586a1 1 0 01.707 1.707L11 8M8 8c0 1.5.5 3-2 5m6 7l4-9 4 9m-.9-2h-6.2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LanguageKatakanaIcon;
/* prettier-ignore-end */
