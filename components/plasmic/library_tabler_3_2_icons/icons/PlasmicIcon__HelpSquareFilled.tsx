/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HelpSquareFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HelpSquareFilledIcon(props: HelpSquareFilledIconProps) {
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
          "M19 2a3 3 0 012.995 2.824L22 5v14a3 3 0 01-2.824 2.995L19 22H5a3 3 0 01-2.995-2.824L2 19V5a3 3 0 012.824-2.995L5 2h14zm-7 13a1 1 0 00-.993.883L11 16l.007.127a1 1 0 001.986 0L13 16.01l-.007-.127A1 1 0 0012 15zm1.368-6.673a2.98 2.98 0 00-3.631.728 1 1 0 001.44 1.383l.171-.18a.98.98 0 011.11-.15 1 1 0 01-.34 1.886l-.232.012A1 1 0 0011.997 14a3 3 0 001.371-5.673z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HelpSquareFilledIcon;
/* prettier-ignore-end */
