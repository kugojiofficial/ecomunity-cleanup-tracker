/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BlockquoteIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BlockquoteIcon(props: BlockquoteIconProps) {
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
          "M6 15h15m0 4H6m9-8h6m0-4h-6M9 9h1a1 1 0 11-1 1V7.5a2 2 0 012-2M3 9h1a1 1 0 11-1 1V7.5a2 2 0 012-2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BlockquoteIcon;
/* prettier-ignore-end */
