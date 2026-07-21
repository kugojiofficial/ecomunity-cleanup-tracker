/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowBadgeUpFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowBadgeUpFilledIcon(props: ArrowBadgeUpFilledIconProps) {
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
          "M11.375 6.22l-5 4A1 1 0 006 11v6l.006.112a1 1 0 001.619.669L12 14.28l4.375 3.5A1 1 0 0018 17v-6a1 1 0 00-.375-.78l-5-4a1 1 0 00-1.25 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowBadgeUpFilledIcon;
/* prettier-ignore-end */
