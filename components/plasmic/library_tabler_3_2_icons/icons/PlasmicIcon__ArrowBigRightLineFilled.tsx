/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowBigRightLineFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowBigRightLineFilledIcon(
  props: ArrowBigRightLineFilledIconProps
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
          "M12.089 3.634A2 2 0 0011 5.414L10.999 8H6a1 1 0 00-1 1v6l.007.117A1 1 0 006 16l4.999-.001.001 2.587A2 2 0 0014.414 20L21 13.414a2 2 0 000-2.828L14.414 4a2 2 0 00-2.18-.434l-.145.068zM3 8a1 1 0 01.993.883L4 9v6a1 1 0 01-1.993.117L2 15V9a1 1 0 011-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowBigRightLineFilledIcon;
/* prettier-ignore-end */
