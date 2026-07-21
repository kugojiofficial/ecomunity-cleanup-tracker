/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SortDescendingSmallBigIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SortDescendingSmallBigIcon(
  props: SortDescendingSmallBigIconProps
) {
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
          "M10 15l-3 3-3-3m3-9v12m7 .333c0 .369.298.667.667.667h2.666a.667.667 0 00.667-.667v-2.666a.667.667 0 00-.667-.667h-2.666a.667.667 0 00-.667.667v2.666zm0-7.5c0 .645.522 1.167 1.167 1.167h4.666c.645 0 1.167-.522 1.167-1.167V6.167C21 5.522 20.478 5 19.833 5h-4.666C14.522 5 14 5.522 14 6.167v4.666z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SortDescendingSmallBigIcon;
/* prettier-ignore-end */
