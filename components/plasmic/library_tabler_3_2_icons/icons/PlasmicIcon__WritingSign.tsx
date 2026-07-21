/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WritingSignIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WritingSignIcon(props: WritingSignIconProps) {
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
          "M3 19c3.333-2 5-4 5-6 0-3-1-3-2-3s-2.032 1.085-2 3c.034 2.048 1.658 2.877 2.5 4C8 19 9 19.5 10 18c.667-1 1.167-1.833 1.5-2.5 1 2.333 2.333 3.5 4 3.5H18m2-2V5c0-1.121-.879-2-2-2s-2 .879-2 2v12l2 2 2-2zM16 7h4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default WritingSignIcon;
/* prettier-ignore-end */
