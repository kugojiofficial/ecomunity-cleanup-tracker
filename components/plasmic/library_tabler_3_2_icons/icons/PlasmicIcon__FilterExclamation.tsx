/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FilterExclamationIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FilterExclamationIcon(props: FilterExclamationIconProps) {
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
          "M4 4h16v2.172a2 2 0 01-.586 1.414L15 12v7l-6 2v-8.5L4.52 7.572A2 2 0 014 6.227V4zm15 12v3m0 3v.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FilterExclamationIcon;
/* prettier-ignore-end */
