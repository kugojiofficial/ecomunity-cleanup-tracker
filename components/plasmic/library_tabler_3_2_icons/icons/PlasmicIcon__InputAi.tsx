/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InputAiIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InputAiIcon(props: InputAiIconProps) {
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
          "M20 11V9a2 2 0 00-2-2H6a2 2 0 00-2 2v5a2 2 0 002 2h4m4 5v-4a2 2 0 014 0v4m-4-2h4m3-4v6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default InputAiIcon;
/* prettier-ignore-end */
