/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowBadgeRightFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowBadgeRightFilledIcon(
  props: ArrowBadgeRightFilledIconProps
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
          "M7 6l-.112.006a1 1 0 00-.669 1.619L9.72 12l-3.5 4.375A1 1 0 007 18h6a1 1 0 00.78-.375l4-5a1 1 0 000-1.25l-4-5A1 1 0 0013 6H7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowBadgeRightFilledIcon;
/* prettier-ignore-end */
