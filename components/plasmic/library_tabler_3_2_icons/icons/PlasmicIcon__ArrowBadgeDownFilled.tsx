/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowBadgeDownFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowBadgeDownFilledIcon(props: ArrowBadgeDownFilledIconProps) {
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
          "M16.375 6.22L12 9.718l-4.375-3.5A1 1 0 006 7v6a1 1 0 00.375.78l5 4a1 1 0 001.25 0l5-4A1.001 1.001 0 0018 13V7a1 1 0 00-1.625-.78z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowBadgeDownFilledIcon;
/* prettier-ignore-end */
