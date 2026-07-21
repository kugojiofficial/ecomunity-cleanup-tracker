/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InnerShadowTopLeftFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InnerShadowTopLeftFilledIcon(
  props: InnerShadowTopLeftFilledIconProps
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
          "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 3a7 7 0 00-7 7 1 1 0 102 0 5 5 0 015-5 1 1 0 100-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default InnerShadowTopLeftFilledIcon;
/* prettier-ignore-end */
