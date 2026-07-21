/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InnerShadowRightFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InnerShadowRightFilledIcon(
  props: InnerShadowRightFilledIconProps
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
          "M4.929 4.929c3.905-3.905 10.237-3.905 14.142 0 3.905 3.905 3.905 10.237 0 14.142-3.905 3.905-10.237 3.905-14.142 0-3.905-3.905-3.905-10.237 0-14.142zm12.02 2.121a1 1 0 00-1.413 1.414 5.001 5.001 0 010 7.072 1 1 0 001.414 1.414 6.999 6.999 0 000-9.9h-.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default InnerShadowRightFilledIcon;
/* prettier-ignore-end */
