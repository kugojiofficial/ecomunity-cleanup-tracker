/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type KeyFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function KeyFilledIcon(props: KeyFilledIconProps) {
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
          "M14.52 2c1.029 0 2.015.409 2.742 1.136l3.602 3.602a3.878 3.878 0 010 5.483l-2.643 2.643a3.88 3.88 0 01-4.941.452l-.105-.078-5.882 5.883a3 3 0 01-1.68.843l-.22.027-.221.009H4c-1.014 0-1.867-.759-1.991-1.823L2 20v-1.172c0-.704.248-1.386.73-1.96l.149-.161.414-.414A1 1 0 014 16h1v-1a1 1 0 01.883-.993L6 14h1v-1a1 1 0 01.206-.608l.087-.1 1.468-1.469-.076-.103a3.9 3.9 0 01-.678-1.963L8 8.521c0-1.029.409-2.015 1.136-2.742l2.643-2.643A3.88 3.88 0 0114.52 2zm.495 5h-.02a2 2 0 000 4h.02a2 2 0 000-4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default KeyFilledIcon;
/* prettier-ignore-end */
