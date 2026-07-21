/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowBigRightFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowBigRightFilledIcon(props: ArrowBigRightFilledIconProps) {
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
          "M12.089 3.634A2 2 0 0011 5.414L10.999 8H4a2 2 0 00-2 2v4l.005.15A2 2 0 004 16l6.999-.001.001 2.587A2 2 0 0014.414 20L21 13.414a2 2 0 000-2.828L14.414 4a2 2 0 00-2.18-.434l-.145.068z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowBigRightFilledIcon;
/* prettier-ignore-end */
