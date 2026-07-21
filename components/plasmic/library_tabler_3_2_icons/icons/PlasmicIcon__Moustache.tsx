/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MoustacheIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MoustacheIcon(props: MoustacheIconProps) {
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
          "M15 9a3 3 0 012.599 1.5c.933 1.333 2.133 1.556 3.126 1.556h.291l.77-.044h.213c-.963 1.926-3.163 2.925-6.6 3h-.565a3.001 3.001 0 11.165-6L15 9z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M9 9a3 3 0 00-2.599 1.5c-.933 1.333-2.133 1.556-3.126 1.556h-.291l-.77-.044h-.213c.963 1.926 3.163 2.925 6.6 3h.565a3.001 3.001 0 00-.165-6L9 9z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MoustacheIcon;
/* prettier-ignore-end */
