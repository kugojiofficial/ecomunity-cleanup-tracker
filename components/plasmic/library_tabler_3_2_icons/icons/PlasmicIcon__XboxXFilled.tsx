/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type XboxXFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function XboxXFilledIcon(props: XboxXFilledIconProps) {
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
          "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm3.6 5.2a1 1 0 00-1.4.2L12 10.333 9.8 7.4a1 1 0 10-1.6 1.2l2.55 3.4-2.55 3.4a1 1 0 001.6 1.2l2.2-2.933 2.2 2.933a1 1 0 001.6-1.2L13.25 12l2.55-3.4a1 1 0 00-.2-1.4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default XboxXFilledIcon;
/* prettier-ignore-end */
