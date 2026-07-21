/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LayoutCardsFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LayoutCardsFilledIcon(props: LayoutCardsFilledIconProps) {
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
          "M8 3a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3h2zm10 0a3 3 0 013 3v6a3 3 0 01-3 3h-2a3 3 0 01-3-3V6a3 3 0 013-3h2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LayoutCardsFilledIcon;
/* prettier-ignore-end */
