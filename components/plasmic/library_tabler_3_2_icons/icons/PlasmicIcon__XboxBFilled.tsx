/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type XboxBFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function XboxBFilledIcon(props: XboxBFilledIconProps) {
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
          "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm1 5h-3a1 1 0 00-1 1v8a1 1 0 001 1h3a3 3 0 002.235-5A3 3 0 0013 7zm0 6a1 1 0 011 1l-.007.117A1 1 0 0113 15h-2v-2h2zm0-4a1 1 0 110 2h-2V9h2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default XboxBFilledIcon;
/* prettier-ignore-end */
