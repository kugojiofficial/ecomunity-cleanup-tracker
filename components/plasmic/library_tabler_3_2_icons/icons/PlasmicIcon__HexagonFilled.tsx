/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HexagonFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HexagonFilledIcon(props: HexagonFilledIconProps) {
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
          "M10.425 1.414L3.65 5.41A3.21 3.21 0 002 8.217v7.285a3.226 3.226 0 001.678 2.826l6.695 4.237c1.034.57 2.22.57 3.2.032l6.804-4.302c.98-.537 1.623-1.618 1.623-2.793V8.218l-.005-.204a3.222 3.222 0 00-1.284-2.39l-.107-.075-.007-.007a1.074 1.074 0 00-.181-.133L13.64 1.414a3.33 3.33 0 00-3.216 0h.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HexagonFilledIcon;
/* prettier-ignore-end */
