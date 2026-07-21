/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LetterSpacingIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LetterSpacingIcon(props: LetterSpacingIconProps) {
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
          "M5 12V6.5a2.5 2.5 0 115 0V12m0-4H5m8-4l3 8 3-8M5 18h14m-2 2l2-2-2-2M7 16l-2 2 2 2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LetterSpacingIcon;
/* prettier-ignore-end */
