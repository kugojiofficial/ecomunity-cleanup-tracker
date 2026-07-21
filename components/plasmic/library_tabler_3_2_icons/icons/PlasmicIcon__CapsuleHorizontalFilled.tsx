/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CapsuleHorizontalFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CapsuleHorizontalFilledIcon(
  props: CapsuleHorizontalFilledIconProps
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
        d={"M15 5H9a7 7 0 000 14h6a7 7 0 007-7l-.007-.303A7 7 0 0015 5z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CapsuleHorizontalFilledIcon;
/* prettier-ignore-end */
