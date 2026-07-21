/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LanguageIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LanguageIcon(props: LanguageIconProps) {
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
          "M4 5h7M9 3v2c0 4.418-2.239 8-5 8m1-4c0 2.144 2.952 3.908 6.7 4m.3 7l4-9 4 9m-.9-2h-6.2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LanguageIcon;
/* prettier-ignore-end */
