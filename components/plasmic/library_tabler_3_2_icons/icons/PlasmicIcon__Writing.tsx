/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WritingIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WritingIcon(props: WritingIconProps) {
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
          "M20 17V5c0-1.121-.879-2-2-2s-2 .879-2 2v12l2 2 2-2zM16 7h4m-2 12H5a2 2 0 110-4h4a2 2 0 100-4H6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default WritingIcon;
/* prettier-ignore-end */
