/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BarbellFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BarbellFilledIcon(props: BarbellFilledIconProps) {
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
          "M4 7a1 1 0 011 1v8a1 1 0 11-2 0v-3H2a1 1 0 010-2h1V8a1 1 0 011-1zm16 0a1 1 0 011 1v3h1a1 1 0 010 2h-1v3a1 1 0 01-2 0V8a1 1 0 011-1zm-4-2a2 2 0 012 2v10a2 2 0 01-4 0v-4h-4v4a2 2 0 01-4 0V7a2 2 0 114 0v4h4V7a2 2 0 012-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BarbellFilledIcon;
/* prettier-ignore-end */
