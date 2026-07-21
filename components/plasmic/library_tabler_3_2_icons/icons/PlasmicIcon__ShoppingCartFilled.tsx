/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShoppingCartFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShoppingCartFilledIcon(props: ShoppingCartFilledIconProps) {
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
          "M6 2a1 1 0 01.993.883L7 3v1.068l13.071.935A1 1 0 0121 6.027l-.01.114-1 7a1 1 0 01-.877.853L19 14H7v2h10a3 3 0 11-2.995 3.176L14 19l.005-.176c.017-.288.074-.564.166-.824H8.829a3 3 0 11-5.824 1.176L3 19l.005-.176A3.002 3.002 0 015 16.17V4H4a1 1 0 01-.993-.883L3 3a1 1 0 01.883-.993L4 2h2zm0 16a1 1 0 100 2 1 1 0 000-2zm11 0a1 1 0 100 2 1 1 0 000-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ShoppingCartFilledIcon;
/* prettier-ignore-end */
