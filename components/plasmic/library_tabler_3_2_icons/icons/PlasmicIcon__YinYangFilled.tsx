/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type YinYangFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function YinYangFilledIcon(props: YinYangFilledIconProps) {
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
          "M17 3.34a10 10 0 11-14.995 8.984L2 12l.005-.324A10 10 0 0117 3.34zM8 5.072A8 8 0 0012 20l.2-.005a4 4 0 000-7.99L12 12a4 4 0 01-.2-7.995L12 4c-1.404 0-2.784.37-4 1.072zM12 6.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M12 14.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default YinYangFilledIcon;
/* prettier-ignore-end */
