/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LanguageOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LanguageOffIcon(props: LanguageOffIconProps) {
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
          "M4 5h1m4 0h2M9 3v2m-.508 3.517C7.678 11.172 5.972 13 4 13m1-4c0 2.144 2.952 3.908 6.7 4m.3 7l2.463-5.541m1.228-2.764L16 11l.8 1.8M18 18h-5.1M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LanguageOffIcon;
/* prettier-ignore-end */
