/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FunctionFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FunctionFilledIcon(props: FunctionFilledIconProps) {
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
          "M17.333 3A3.667 3.667 0 0121 6.667v10.666A3.667 3.667 0 0117.333 21H6.667A3.667 3.667 0 013 17.333V6.667A3.667 3.667 0 016.667 3h10.666zM13.75 6a2.38 2.38 0 00-2.37 2.145L11.095 11H9l-.117.007A1 1 0 009 13h1.894l-.265 2.656-.014.071a.38.38 0 01-.365.273.25.25 0 01-.25-.25v-.25l-.007-.117A1 1 0 008 15.5v.25l.005.154A2.25 2.25 0 0010.25 18a2.38 2.38 0 002.37-2.145L12.904 13H15l.117-.007A1 1 0 0015 11h-1.895l.266-2.656.014-.071A.381.381 0 0113.75 8a.25.25 0 01.25.25v.25l.007.117A1 1 0 0016 8.5v-.25l-.005-.154A2.25 2.25 0 0013.75 6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FunctionFilledIcon;
/* prettier-ignore-end */
