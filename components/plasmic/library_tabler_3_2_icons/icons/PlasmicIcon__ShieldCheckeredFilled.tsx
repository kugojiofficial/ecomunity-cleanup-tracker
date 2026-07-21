/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShieldCheckeredFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShieldCheckeredFilledIcon(
  props: ShieldCheckeredFilledIconProps
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
          "M11.013 12v9.754A13 13 0 012.28 12h8.734-.001zm9.284 3.794a13 13 0 01-7.283 5.951L13.013 12h8.708a12.96 12.96 0 01-1.424 3.794zM11.014 2.526L11.013 10H2.027c-.068-1.432.101-2.88.514-4.282a1 1 0 011.005-.717 11 11 0 007.192-2.256l.276-.219zM13.013 10V2.547l-.09-.073a11 11 0 007.189 2.537l.342-.01a1 1 0 011.005.717c.413 1.403.582 2.85.514 4.282h-8.96z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ShieldCheckeredFilledIcon;
/* prettier-ignore-end */
