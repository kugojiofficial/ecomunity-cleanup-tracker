/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FilterPauseIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FilterPauseIcon(props: FilterPauseIconProps) {
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
          "M12.97 19.677L9 21v-8.5L4.52 7.572A2 2 0 014 6.227V4h16v2.172a2 2 0 01-.586 1.414L15 12v1.5m2 3.5v5m4-5v5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FilterPauseIcon;
/* prettier-ignore-end */
