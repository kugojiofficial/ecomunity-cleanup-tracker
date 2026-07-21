/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowAutofitHeightIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowAutofitHeightIcon(props: ArrowAutofitHeightIconProps) {
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
          "M12 20H6a2 2 0 01-2-2V6a2 2 0 012-2h6m6 10v7m0-18v7m-3 8l3 3 3-3M15 6l3-3 3 3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ArrowAutofitHeightIcon;
/* prettier-ignore-end */
