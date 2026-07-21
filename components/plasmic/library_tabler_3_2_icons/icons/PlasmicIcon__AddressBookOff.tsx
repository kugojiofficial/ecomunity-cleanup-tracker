/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AddressBookOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AddressBookOffIcon(props: AddressBookOffIconProps) {
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
          "M8 4h10a2 2 0 012 2v10m-.57 3.399c-.363.37-.87.601-1.43.601H8a2 2 0 01-2-2V6m4 10h6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M11 11a2 2 0 002 2m2-2a2 2 0 00-2-2M4 8h3m-3 4h3m-3 4h3M3 3l18 18"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default AddressBookOffIcon;
/* prettier-ignore-end */
