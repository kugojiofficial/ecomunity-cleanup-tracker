/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CurlingIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CurlingIcon(props: CurlingIconProps) {
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
          "M4 13a4 4 0 014-4h8a4 4 0 014 4v2a4 4 0 01-4 4H8a4 4 0 01-4-4v-2zm0 1h16M8 5h6a2 2 0 012 2v2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CurlingIcon;
/* prettier-ignore-end */
