/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SortAscendingSmallBigIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SortAscendingSmallBigIcon(
  props: SortAscendingSmallBigIconProps
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
          "M4 15l3 3 3-3M7 6v12m7-12.333c0-.369.298-.667.667-.667h2.666c.369 0 .667.298.667.667v2.666a.667.667 0 01-.667.667h-2.666A.667.667 0 0114 8.333V5.667zm0 7.5c0-.645.522-1.167 1.167-1.167h4.666c.645 0 1.167.522 1.167 1.167v4.666c0 .645-.522 1.167-1.167 1.167h-4.666A1.168 1.168 0 0114 17.833v-4.666z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SortAscendingSmallBigIcon;
/* prettier-ignore-end */
