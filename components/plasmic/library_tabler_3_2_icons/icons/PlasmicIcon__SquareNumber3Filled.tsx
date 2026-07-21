/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareNumber3FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquareNumber3FilledIcon(props: SquareNumber3FilledIconProps) {
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
          "M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005.195v12.666c0 1.96-1.537 3.56-3.472 3.662l-.195.005H5.667a3.667 3.667 0 01-3.662-3.472L2 18.333V5.667c0-1.96 1.537-3.56 3.472-3.662L5.667 2h12.666zM13 7h-2l-.15.005A2 2 0 009 9a1 1 0 001.974.23l.02-.113L11 9h2v2h-2l-.133.007c-1.111.12-1.154 1.73-.128 1.965l.128.021L11 13h2v2h-2l-.007-.117A1 1 0 009 15a2 2 0 001.85 1.995L11 17h2l.15-.005a2 2 0 001.844-1.838L15 15v-2l-.005-.15a1.99 1.99 0 00-.17-.667l-.075-.152-.019-.032.02-.03c.135-.245.218-.516.242-.795L15 11V9l-.005-.15a2 2 0 00-1.838-1.844L13 7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareNumber3FilledIcon;
/* prettier-ignore-end */
