/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowBadgeLeftFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowBadgeLeftFilledIcon(props: ArrowBadgeLeftFilledIconProps) {
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
          "M17 6h-6a1 1 0 00-.78.375l-4 5a1 1 0 000 1.25l4 5A1.001 1.001 0 0011 18h6l.112-.006a1 1 0 00.669-1.619L14.28 12l3.5-4.375A1 1 0 0017 6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowBadgeLeftFilledIcon;
/* prettier-ignore-end */
